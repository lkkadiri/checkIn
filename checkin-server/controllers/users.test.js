const UserService = require('../services').userService;
const userController = require('./index').users;
let testUser;
jest.mock('../services/userService', () => ({
	create: jest.fn().mockImplementation(async data => {
		return { ...data, id: 1 };
	}),
	getUserByPhone: jest.fn().mockImplementation(async data => {
		if (data.phone === '3033333333') {
			return { ...data, id: 1, points: 50, visits: 1 };
		} else {
			return null;
		}
	}),
	updateUserPointsVists: jest.fn().mockImplementation(async data => {
		return { ...data, id: 1, points: 70, visits: 2 };
	})
}));

describe('UserController', () => {
	beforeAll(() => {
		testUser = {
			firstName: 'leela',
			lastName: 'kadiri',
			phone: '12030303',
			email: 'test@test.com'
		};
	});
	describe('create', () => {
		test('should create a user and set default 50 points and 1 visit and assign an id', async () => {
			let user = await userController.create(testUser);
			expect(UserService.create).toBeCalledWith({
				...testUser,
				points: 50,
				visits: 1
			});
			expect(user).toEqual({ id: 1, ...testUser, points: 50, visits: 1 });
		});
	});

	describe('checkUser', () => {
		test('should check for a user by phone', async () => {
			let user = await userController.checkUser({ phone: '3033333333' });
			expect(UserService.getUserByPhone).toBeCalledWith({
				phone: '3033333333'
			});
		});
		test('should check for a user by phone', async () => {
			let user = await userController.checkUser({ phone: 'dummynumber' });
			expect(user).toEqual(null);
		});
		test('should add 20 points on a found user', async () => {
			// Our mock return a testUser with 50 point and one visit
			let user = await userController.checkUser({ phone: '3033333333' });
			expect(user.points).toEqual(70);
			expect(user.visits).toEqual(2);
		});
	});
});
