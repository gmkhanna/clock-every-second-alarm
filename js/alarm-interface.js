var AlarmTime = require('./../js/alarm-func.js').alarmModule;

function update() {
  $('#displayed-momentJS').text(moment().format('LTS'));
}

setInterval(update, 1);

$(document).ready(function() {
  $("#alarm-form").submit(function(event) {
    event.preventDefault();
    var timeInput = $('#time-input').val();
    var momentJS = $('#displayed-momentJS').val();
    var beep = new AlarmTime(momentJS);
    setInterval(function() {
      if(beep.setTime(timeInput)) {
        $('#beep-display').show();
      }
    }, 1000);
  });
});
