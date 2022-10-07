const ErrorResponse = require('../utils/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Color for the function. 
function getRandomColor() {
    var color = '#';
	var letters = '0123456789ABCDEF';
	for (var i = 0; i < 10; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// sign up 
const signUp = (data, res, next) => {
	let { email, name, password } = data;
	
	bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_LENGTH), (err, hash) => {
		if (err) return next(err);

		// Creating SQL Query to insert Data
		let query = `
				INSERT INTO USERS(EMAIL_ADDRESS, PASSWORD, NAME)
					VALUES(
						"${email}",
						"${hash}",
						"${name}"
					);
				`;

		
		db.query(query, (err) => {
			// This function will handle duplicate signups. 
			if (err) {
				if (err.code === 'ER_DUP_ENTRY')
					next(new ErrorResponse('You have an account, please sign in!', 403));
				else next(err);
				return;
			}

                // This will query the database and find number of users with the same name. 
			query = `
            SELECT COUNT(ID) AS num FROM USERS WHERE NAME LIKE '${name}';
        `;
    db.query(query, (err, result) => {
        if (err) return next(err);

				// This will allow the creation of a unique user name.
				let username = name.replace(/\s/g, '.').toLowerCase();
				if (result[0].num > 1) username += result[0].num;

				const avatarColourCode = getRandomColor();

				// Update User with unique username
				query = `
						UPDATE USERS SET 
                        WHERE EMAIL_ADDRESS = "${email}"
							USERNAME = "${username}",
							AVATAR_COLOUR_CODE = "${avatarColourCode}";
						
					`;
				db.query(query, (err) => {
					if (err) return next(err);

					query = `
						SELECT 
							email_verified, 
                            email_address as email
							name, username, id,
							verification_email_sent,
							new_account,
							created_at, updated_at, 
							avatar_colour_code 
						FROM USERS WHERE email_address = "${email}";
					`;

					db.query(query, (err, result) => {
						if (err) return next(err);

						// response if user registration is successful. 
						let data = {
							payload: {
								email,
							},
							message: 'User registered. Please verify your email address. Check your email!',
							user: result[0],
						};

						// create Token and send with cookies
						sendTokenResponseWithCookie(data, 201, res, next);
					});
				});
			});
		});
	});
};

// These function handles sign in. 
const signIn = (data, res, next) => {
	// This function quarrys the data base and finds a user based on the below paramiters. 
	let query = `
		SELECT 
			email_address as email, 
            email_verified, 
        	name, username, id,
			verification_email_sent,
			new_account,
            created_at, updated_at, 
			password 
		FROM USERS WHERE email_address = "${data.email}";
	`;
	db.query(query, (err, result) => {
		if (err) return next(err);

		//
		if (result.length === 0)
			return next(new ErrorResponse('Somethings not right! Please try again!', 401));

		
		let { email, password, email_verified } = result[0];

		bcrypt.compare(data.password, password, function (err, matched) {
			if (err) return next(err);

			// This will handle if the password is incorrect.
			if (!matched)
				return next(
					new ErrorResponse('Somethings not right! Please try again!', 401)
				);

			// This will populate a successful log in. 
			let data = {
				payload: {
					email,
				},
				message: 'HOOK UM HORNS, WELCOME!',
				user: {
					...result[0],
					password: undefined,
				},
			};

			
			sendTokenResponseWithCookie(data, 200, res, next);
		});
	});
};


const sendTokenResponseWithCookie = (data, statusCode, res, next) => {
	// THIS WILL CREATE A TOKEN THAT WILL KEEP THE USER LOGGED IN FOR THE DAY
	jwt.sign(data.payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
		if (err) return next(err);

		// THIS ALLOWS THE ACCESS TOKEN 
		let accessToken = token.replace(/[.]/g, process.env.JWT_RANDOM_STRING);

		
		const cookieOptions = {
			maxAge: process.env.JWT_COOKIE_MAX_AGE,
			httpOnly: true,
		};

		
		res
			.status(statusCode)
			.cookie('DEV_TOKEN', accessToken, cookieOptions)
			.json({
				success: true,
				message: data.message,
				responses: {
					accessToken,
					user: {
						...data.user,
						email_verified: data.user.email_verified === 0 ? false : true,
						new_account: data.user.new_account === 0 ? false : true,
					},
				},
			});
	});
};

module.exports = { signUp, signIn };