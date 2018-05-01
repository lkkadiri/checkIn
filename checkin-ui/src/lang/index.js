// This is where all the copy for the UI goes, makes it easier to maintain it all in one place
module.exports = {
	requestError: 'Sorry! Something went wrong. The server seems to be offline or unavailable.',
	heythere: `Welcome to Baker!`,
	welcomeMessage: `Please enter your phone number below to check-in. Rack up points and save big!`,
	signup: `Sorry! we could not find you. Please signup now to receive 50 bonus points instantly.`,
	pointsMessage: ({firstName, lastName, visits, points}) => {
		let msg;
		if (visits === 1) {
			msg = `Hey ${firstName},  Welcome to Baker! You have scored 50 points on your first visit! Everytime you checkin from here on out you get 20 points! Rock on!!`;
		} else {
			msg = `Hey ${firstName} ${lastName}! You have visited ${visits} times and so far have scored ${points} points!`
		}
		return msg;
	}
};
