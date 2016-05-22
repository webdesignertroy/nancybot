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

/*
BMI Categories: 
Underweight = <18.5
Normal weight = 18.5–24.9 
Overweight = 25–29.9 
Obesity = BMI of 30 or greater

5’3" and weighs 125 lbs

125 X 0.45 = 56.25 kg (Multiply the weight in pounds by 0.45 (the metric conversion factor))
63 X 0.025 = 1.575 m (Multiply the height in inches by 0.025 (the metric conversion factor))
1.575 X 1.575 = 2.480625  <Square the answer from step 2>
56.25 : 2.480625 = 22.7 <Divide the answer from step 1 by the answer from step 3>
The BMI for a person who is 5’3" and weighs 125 lbs is 22.7 or practically, 23.
*/

/*
module.exports = function(robot) {
    robot.hear(/BMI?/, function(response) {

        // metric conversion 
        var allInches = feet * 12 + inch

        var weight = 125 * .45
        var height = allInches * .025

        var BMI = weight / (height * height)
        console.log(BMI);
        return response.send(BMI);
    })

}
*/

module.exports = function(robot) {
    robot.hear(/BMI?/, function(response) {
        var feet = 5;
        var inch = 3;
        var lbs = 125;

        // metric conversion 
        var allInches = feet * 12 + inch

        //var weight = lbs * .45
        var weight = lbs * 703;
        var height = allInches * .025

        var BMI = weight / (height * height)
        return response.send('Your BMI is ' + BMI);
    })

}
  


