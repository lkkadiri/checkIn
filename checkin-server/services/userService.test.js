const userService = require('./userService');
const moment = require('moment');
const User = require('../models').User;
let testUser;
jest.mock('../models', () => ({
	User: {
		create: jest.fn().mockImplementation(async data => {
			return { ...data, id: 1 };
		}),
		findOne: jest.fn().mockImplementation(() => {
			return { name: 'foundUser' };
		}),
		update: jest.fn().mockImplementation(data => {
			return [{}, { dataValues: { ...data } }];
		})
	}
}));
beforeAll(() => {
	testUser = {
		firstName: 'leela',
		lastName: 'kadiri',
		phone: '12030303',
		email: 'test@test.com'
	};
});
describe('UserService', () => {
	describe('create', () => {
		test('should create a user', async () => {
			await userService.create(testUser);
			expect(User.create).toHaveBeenCalled();
		});
	});
	describe('getUserByPhone', () => {
		it('should findOne user with the phone', async () => {
			let user = await userService.getUserByPhone({ phone: '3033333333' });
			expect(User.findOne).toHaveBeenCalled();
			expect(user.name).toEqual('foundUser');
		});
	});
	describe('updateUserPointsVists', () => {
		it('should not update user points and visits if lastVisited is less than 5 minutes', async () => {
			let user = await userService.updateUserPointsVists({
				points: 20,
				visits: 3,
				userId: 1,
				lastVisited: new Date()
			});
			expect(User.update).not.toHaveBeenCalled();
		});
		it('should update user points and visits if lastVisited is less than 5 minutes', async () => {
			let user = await userService.updateUserPointsVists({
				points: 20,
				visits: 3,
				userId: 1,
				lastVisited: moment().subtract(7, 'minutes')
			});
			expect(User.update).toHaveBeenCalled();
			expect(user.points).toEqual(20);
			expect(user.visits).toEqual(3);
		});
	});
});
