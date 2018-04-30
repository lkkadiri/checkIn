require('dotenv').config(); // this line is important!

module.exports = {
	development: {
		username: 'checkin_user',
		password: 'password',
		database: 'checkin_development',
		host: process.env.DB_HOST,
		dialect: 'postgres'
	},
	test: {
		username: 'checkin_user',
		password: 'password',
		database: 'checkin_test',
		host: process.env.DB_HOST,
		dialect: 'postgres'
	},
	production: {
		username: 'checkin_user',
		password: 'password',
		database: 'checkin_production',
		host: process.env.DB_HOST,
		dialect: 'postgres'
	}
};
