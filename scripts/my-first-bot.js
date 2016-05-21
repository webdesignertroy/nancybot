 module.exports = function(robot) { 
  robot.respond(/do you want to play/i, function(res) {
    var sodasHad;
    var sodasRes;

    switch(){
      case 1:
        sodasRes = "once";
      break;
      case 2:
        sodasRes = "twice";
      break;
      default:
        sodaRes = sodasHad + " times";
      break;
    }

    sodasHad = robot.brain.get('totalSodas') * 1 || 0;
    if (sodasHad > 0) {
      return res.reply("We already played " + sodaRes +".");
    } else {
      res.reply('Sure!');
      return robot.brain.set('totalSodas', sodasHad + 1);
    }
  });

  robot.respond(/sleep it off/i, function(res) {
    robot.brain.set('totalSodas', 0);
    return msg.reply('zzzzz');
  });
};