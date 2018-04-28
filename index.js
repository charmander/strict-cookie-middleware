'use strict';

const {parseCookieHeader} = require('strict-cookie-parser');

const middleware = (request, response, next) => {
	if ('cookie' in request.headers) {
		const cookieHeader = request.headers.cookie;
		const cookies = parseCookieHeader(cookieHeader);

		if (cookies !== null) {
			request.cookies = cookies;
			next();
			return;
		}
	}

	request.cookies = new Map();
	next();
};

module.exports = middleware;
