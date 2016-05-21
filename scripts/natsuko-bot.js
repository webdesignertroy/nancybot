/*
module.exports = function(robot) {
	robot.hear(/These boots/, function(response) {
		return response.send('...are made for walkin');
	})

}

// .respond is the respond method
// .here is to show the @name
// index starts from 1 instead of 0
module.exports = function(robot) {
	robot.respond(/Hi Hubot! My name is (.*)/i, function(message) {
		var name = message.match[1];
		if (name == 'Nancy') {
			return message.send('You are not Nancy-- I am Nancy!');
		} else {
			return message.reply('Nice to meet you, ' + name + '!');
		}
	});
*/

/*
module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();
​
        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });
​
    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });
​
    robot.respond(/are you there?/i, function(msg){
        msg.reply('Yes, usually here, and listening.');
    });
​
    robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });
​
}
*/

module.exports = function(robot) {
    robot.hear(/Howdy/, function(response) {
        return reponse.send('Another great day!');
    })
}
module.exports = function(robot) {
    robot.hear(/These boots/, function(response) {
        return response.send('...are made for walkin');
    })

}
  


