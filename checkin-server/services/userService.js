const moment = require('moment');
const models = require('../models');
const config = require('config');
const lang = require('../lang');
const User = models.User;
module.exports = {
	/**
	 * Create a new user
	 *
	 * @param {any} { firstName, lastName, phone, email, visits, points }
	 * @returns
	 */
	async create({ firstName, lastName, phone, email, visits, points }) {
		const user = await User.create({
			firstName,
			lastName,
			phone,
			email,
			visits,
			points,
			lastVisited: new Date()
		});
		await this.sendEmail(user);
		return user;
	},

	/**
	 * Get a user by phone
	 *
	 * @param {any} { phone, userId }
	 * @returns
	 */
	async getUserByPhone({ phone, userId }) {
		return await User.findOne({ where: { phone } });
	},

	/**
	 * Update a user's points
	 *
	 * @param {any} points
	 * @param {any} userId
	 * @returns
	 */
	async updateUserPointsVists({ points, visits, userId, lastVisited }) {
		if (
			moment()
				.subtract(20, 'seconds')
				.isAfter(lastVisited)
		) {
			const updatedUser = await User.update(
				{ points: parseInt(points), visits, lastVisited: new Date() },
				{
					where: {
						id: userId
					},
					returning: true,
					plain: true
				}
			);
			await this.sendEmail(updatedUser[1].dataValues);
			return updatedUser[1].dataValues;
		}
		return null;
	},
	async sendEmail({ firstName, lastName, email, phone, points, visits }) {
		const sgMail = require('@sendgrid/mail');

		sgMail.setApiKey(config.get('SENDGRID_APIKEY'));
		const msg = {
			to: [email],
			from: lang['emailFrom'],
			subject: lang['emailSubject'],
			html: lang['emailBody']({ firstName, lastName, points, visits })
		};
		sgMail.send(msg);
	}
};
