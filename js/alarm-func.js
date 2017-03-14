function AlarmTime (time) {
  this.time = time;
}


AlarmTime.prototype.setTime = function(alarmTime) {
  if (alarmTime === (moment().format('HH:mm'))) {
    console.log("alarm time and moment is true");
    return true;
  } else {
    console.log("not working");
    console.log((moment().format('HH:mm')));
    return false;
  }
};

exports.alarmModule = AlarmTime;
