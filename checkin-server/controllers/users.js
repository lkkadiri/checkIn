const UserService = require('../services').userService;

module.exports = {
	/**
	 * Create a new user
	 *
	 * @param {any} { firstName, lastName, phone, email }
	 * @returns
	 */
	async create({ firstName, lastName, phone, email }) {
		return await UserService.create({
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			email: email,
			visits: 1,
			points: 50
		});
	},

	/**
	 * Find Or create a user by phone, new users returning users get 20 points
	 *
	 * @param {any} { phone }
	 */
	async checkUser({ phone }) {
		let user = await UserService.getUserByPhone({ phone });

		if (user) {
			let updateRes = await UserService.updateUserPointsVists({
				points: user.points + 20,
				visits: user.visits + 1,
				userId: user.id,
				lastVisited: user.lastVisited
			});
			if (updateRes) {
				user = updateRes;
			}
		}
		return user;
	}
};
