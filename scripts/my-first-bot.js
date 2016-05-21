 module.exports = function(robot) { 
  robot.respond(/do you want to play/i, function(res) {
    var sodasHad;
    sodasHad = robot.brain.get('totalSodas') * 1 || 0;
    if (sodasHad > 1) {
      return res.reply("I already played" + sodasHad + " times with you.");
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