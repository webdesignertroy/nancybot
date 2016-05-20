module.exports = funciton(robot) {
	robot.hear(/These boots/, function(response) {
		"use strict";
		return response.send('.. are made for walkin');
	});
}