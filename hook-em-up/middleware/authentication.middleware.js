const jwt = require('jsonwebtoken');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/error');

const partiallyProtectedRoute = [
	/\/user\/(\d+)\/profile$/,
];

exports.checkAuthentication = asyncHandler((req, res, next) => {
	// allows the token to start authenication. 
	let token;

	// Gives access to the "Bearer" of this token
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
		
		token = req.headers.authorization.split(' ')[1]; // Bearer tokenXXX
	} else if (req.cookies.DEV_TOKEN) {
		
		token = req.cookies.DEV_TOKEN;
	}

	// this will see if there is an avalible token 
	if (!token) {
		
		if (
			req.method === 'GET' &&
			req.query.view === 'public' &&
			req.query.url &&
			req.originalUrl.split('?')[0].includes(req.query.url)
		) {
			let matchedURL = false;

			partiallyProtectedRoute.forEach((urlExp) => {
				if (urlExp.test(req.query.url)) matchedURL = true;
			});

			if (matchedURL) return next();
		}

		// this will populated an unauthorized message
		throw new ErrorResponse(`TOKEN INVALID TRY AGAIN!`, 401);
	}

	
	const keyPattern = new RegExp(`${process.env.JWT_RANDOM_STRING}`, 'g');
	token = token.replace(keyPattern, '.');

	// this decrypits and verifies the token 
	jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
		if (err) throw new ErrorResponse(`Session timed out! Sorry! Relogin!`, 403);

		//this will find a users decoded token email. 
		let query = `
                SELECT 
                    email_address as email, 
                    email_verified, 
                    name, username, id,
					verification_email_sent,
					new_account,
                    created_at, updated_at 
                    FROM USERS WHERE email_address = "${decodedToken.email}";
            `;

		db.query(query, (err, result) => {
			if (err) next(err);

			// this will validate if there is a user found if not will populate the following message. 
			if (result.length === 0)
				return next(
					new ErrorResponse(
						'Error: Your account was not found. Either it does not exist or has been deleated. If you belive this to be an error please contact support.',
						403
					)
				);

			
			req.user = result[0];

			// This will change all boolean from false to true 
			req.user.email_verified = req.user.email_verified === 0 ? false : true;
			req.user.new_account = req.user.new_account === 0 ? false : true;
			req.user.verification_email_sent = req.user.verification_email_sent === 0 ? false : true;

			if (
				req.method !== 'GET' &&
				Object.keys(req.params).includes('user_id') &&
				parseInt(req.params.user_id) !== req.user.id
			)
				next(new ErrorResponse('Sorry you may not access this part of the site!', 403));

		
			next();
		});
	});
});

