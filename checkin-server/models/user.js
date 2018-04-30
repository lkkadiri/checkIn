'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define(
		'User',
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			phone: DataTypes.STRING,
			visits: DataTypes.INTEGER,
			points: DataTypes.INTEGER,
			lastVisited: DataTypes.DATE
		},
		{}
	);
	User.associate = function(models) {
		// associations can be defined here
	};
	return User;
};
