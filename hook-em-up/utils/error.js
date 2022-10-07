class Error extends Error {
	constructor(...args) {
		super(args[0]);
        this.errors = args[2];
		this.statusCode = args[1];
	}
}
module.exports = Error;