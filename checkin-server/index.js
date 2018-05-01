const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');
const Router = require('koa-router');
const Sequelize = require('sequelize');
const usersController = require('./controllers').users;
const logo = require('./logo').logo;
const app = new Koa();

app.use(cors());
app.use(bodyParser());

// Connect to database
// TODO: Move all these to configs
const sequelize = new Sequelize({
	database: 'checkin_development',
	username: 'checkin_user',
	password: 'password',
	dialect: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: 5432,
	logging: false
});

console.log(logo);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

var router = new Router();
router
	.post('/users', async (ctx, next) => {
		let res = await usersController.create(ctx.request.body);
		ctx.status = 201;
		ctx.body = res;
	})
	.post('/users/phone', async (ctx, next) => {
		let { phone } = ctx.request.body;
		let res = await usersController.checkUser({ phone });
		ctx.body = res;
	});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
