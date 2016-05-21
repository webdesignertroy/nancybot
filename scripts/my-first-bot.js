 module.exports = function(robot) { 

var allStudents = [
{name: "stefan2122", BMI: 0, H2O: 0},
{name: "netsuke", BMI: 0, H2O: 0},
{name: "asaldivar", BMI: 0, H2O: 0},
{name: "johnnythecakes", BMI: 0, H2O: 0},
{name: "tyleriscool", BMI: 0, H2O: 0},
{name: "maykosaka", BMI: 0, H2O: 0},
{name: "adrinr", BMI: 0, H2O: 0},
{name: "amicar", BMI: 0, H2O: 0},
{name: "dreiserman", BMI: 0, H2O: 0},
{name: "evanomics", BMI: 0, H2O: 0},
{name: "gonz", BMI: 0, H2O: 0},
{name: "evanomics", BMI: 0, H2O: 0},
{name: "jackreid", BMI: 0, H2O: 0},
{name: "mcunningham78", BMI: 0, H2O: 0},
{name: "raffikazanijan", BMI: 0, H2O: 0}
];

var sodasHad;
var sodasRes;

//Play Day  
  robot.respond(/do you want to play/i, function(res) {   

    sodasHad = robot.brain.get('totalSodas') * 1 || 0; 

    switch (sodasHad) {
      case 1:
        sodasRes = "once.";
      break;
      case 2:
        sodasRes = "twice.";
      break;
      default:
        sodasRes = sodasHad + " times.";
    }
    
    if (sodasHad > 0) {
      res.reply("We already played " + sodasRes);
      return robot.brain.set('totalSodas', sodasHad + 1);
    } else {
      res.reply('Sure!');
      return robot.brain.set('totalSodas', sodasHad + 1);
    }
  });

  robot.respond(/sleep it off/i, function(res) {
    robot.brain.set('totalSodas', 0);
    return msg.reply('zzzzz');
  });


  robot.respond /hi|hello/i, (msg) ->
    msg.send "Howdy!"

//conflicts

};