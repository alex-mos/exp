var nextFiveDays = function(date){
    var day = date.getDate(),
    month = date.getMonth(),
    dates = [];

    for (var i = 0; i <= 5; i++) {
      dates.push(month + '/' + (day + i));
    }
    
    return dates.join(', ');
};