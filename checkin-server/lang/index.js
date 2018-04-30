module.exports = {
	emailFrom: `checkin@trybaker.com`,
	emailSubject: `Thanks for checking in!`,
	emailBody: ({ firstName, lastName, visits, points }) => {
		let sig = `<br><br>Sincerely,<br>Your team at Baker`;
		let msg;
		if (visits === 1) {
			msg = `Hey ${firstName},  Welcome to Baker! You have scored 50 points on your first visit! Everytime you checkin from here on out you get 20 points! Rock on!!`;
		} else {
			msg = `Hey ${firstName} ${lastName}, Welcome back to Baker! You have racked up ${points} points by visiting ${visits} times. Keep coming back for special offers and free merch!`;
		}
		return msg + sig;
	}
};
