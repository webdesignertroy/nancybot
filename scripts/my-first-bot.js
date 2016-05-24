// JavaScript Document

module.exports = function(robot) { 

/******** Variables ********/
var participate;
var initialQuestion = "empty";
var pounds;
var minutes;

/******** Arrays ********/
var imageUnfurl = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.jpeg",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png"
  ];

var feedMeUnfurl = [
  "1.jpeg",
  "2.jpg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpeg",
  "11.jpeg",
  "12.jpg",
  "13.jpg",
  "14.jpeg",
  "15.jpg",
  "16.jpeg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg"
  ];

/******** Questions ********/

//Listens for thristy
  robot.respond(/(.*) thirsty (.*) | thirsty (.*) | (.*) thirsty/i, function(res) { 
    
    res.reply('Would you like to find out how much water you need to drink a day?\nType: _*OK Nancy*_ if you want to know.');
      
  });

//Listens for Ok Nancy
  robot.hear(/Ok Nancy/i, function(res) {
    res.send('How much do you weigh in lbs?\nRespond with: "nancy [your weight] lbs"\n(e.g. _*nancy 135 lbs*_)');
  });

//Listens for * lbs
  robot.respond(/(.*) lbs/i, function(res) {   
    pounds = res.match[1];  
    res.reply('Now, on an average, how many minutes do you exercise per day?\nRespond with: "nancy [number of minutes] minutes"\n(e.g. _*nancy 30 minutes*_)');      
  });

//Listens for * minutes
  robot.respond(/(.*) minutes/i, function(res) {   
    minutes = res.match[1];  
    var min = 1;
    var max = imageUnfurl.length - 1;
    var rndPick = Math.floor(Math.random() * (max - min + 1)) + min;
    var weightAnswer = pounds * 0.5;
    var exerciseAnswer = minutes / 30 * 12;
    var waterAnswer = weightAnswer + exerciseAnswer;
    var inGallons = waterAnswer * 0.0078125;
    inGallons = inGallons.toFixed(2);
    var waterResponse = "You need to drink *" + waterAnswer + " oz* (*" + inGallons + " gal*) of water every day.\n";
    waterResponse +='!http://webdesignertroy.com/dump/' + imageUnfurl[rndPick] +'\n';
    waterResponse += "To get a more exact result when considering gender, age, height, etc.,\n";
    waterResponse += "Check out the [Hydration Calculator!](http://www.camelbak.com/en/HydratED/HydrationCalculator.aspx)";
    res.reply(waterResponse);      
  });

  //Listens for hungry
  robot.hear(/hungry/i, function(res) {   
    var min = 1;
    var max = feedMeUnfurl.length - 1;
    var rndPick = Math.floor(Math.random() * (max - min + 1)) + min;
    var foodResponse = "Eat This and Stay Healthy:\n";
    foodResponse +='!http://webdesignertroy.com/dump/healthy/' + feedMeUnfurl[rndPick] +'\n';
    res.reply(foodResponse);      
  });

};