const ErrorResponse = require('../utils/error');
const checker = require('../utils/validator');
const { signUp, signIn } = require('../services/authenication');


exports.registerHandler= (req, res, next) => {
	let { name, email, password } = req.body;

	
	if (!name || !email || !password || (name && name.trim().length === 0)) {
		next(new ErrorResponse('Please provide all the information!', 400));
	}
	// Makes sure all imputs are valid 
	name = name.replace(/\s{2,}/g, ' ');
	if (!checker.alphabetic(name)) {
		next(new ErrorResponse('You can only use letters!', 400));
	}
	if (!checker.email(email)) {
		next(new ErrorResponse('This is not an email address. Try again!', 400));
	}
	if (!checker.password(password)) {
		next(new ErrorResponse('This password does not meet the requirements', 400));
	}

	// This will start the sign up service to create an account. 
	signUp({ name, email, password }, res, next);
};

//this will create the log in. 
exports.registerHandler = (req, res, next) => {
	let { email, password } = req.body;

	// This makes sure feilds are valid. 
	if (!checker.email(email)) {
		next(new ErrorResponse('This is not an email address! Try again!', 400));
	}
    if (!email || !password) {
		next(new ErrorResponse('Please provide the required information!', 400));
	}


	signIn({ email, password }, res, next);
};


exports.userHandler  = (req, res, next) => {
	let message;
	if (!req.user.email_verified && req.user.verification_email_sent)
		message =
			'Please verify your email address. A link has been sent to you!';
	delete req.user.verification_email_sent;
	return res.status(200).json({
		success: true,
		message,
		user: req.user,
	});
};