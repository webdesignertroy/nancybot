 module.exports = function(robot) { 
  robot.respond(/do you want to play/i, function(res) {
    var sodasHad;
    var sodaRes;
    switch(sodasHad) {
      case 1:
        SodaRes = "once";
      break;
      case 2:
        SodaRes = "twice" ;
      break;
      default:
      SodaRes = sodasHad + " times";
    }
    sodasHad = robot.brain.get('totalSodas') * 1 || 0;
    if ( sodasHad > 3 ) {
      return res.reply("I played with you " + SodaRes + " today. Leave me alone!!!");
    } else if ( sodasHad = 1 ){
      res.reply('Sure! I haven\'t played with you today');
      return robot.brain.set('totalSodas', sodasHad += 1);      
    } else {
      res.reply('I played with you ' + SodaRes + ' today.');
      return robot.brain.set('totalSodas', sodasHad += 1);
    }
  });

  robot.respond(/sleep it off/i, function(res) {
    robot.brain.set('totalSodas', 0);
    return msg.reply('zzzzz');
  });
};