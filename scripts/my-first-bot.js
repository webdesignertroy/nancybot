module.exports = funciton(robot) {
	robot.hear(/These boots/, function(response) {
		return response.send('.. are made for walkin');
	});
}