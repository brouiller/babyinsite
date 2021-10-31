module.exports = {
  // get month/date/year
  format_date: (date) => {
    date = new Date(date * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },

  // get hour:minute
  format_hourMin: (date) => {
    date = new Date(date * 1000);
    if (date.getMinutes() < 10) {
      minutes = "0" + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }
    if (date.getHours() < 10) {
      hours = "0" + date.getHours();
    } else {
      hours = date.getHours();
    }
    return `${hours}:${minutes}`;
  },

  //get hour
  getHour: (date) => {
    return `${new Date(date * 1000).getHours()}`;
  },

  // get minute
  getMinute: (date) => {
    return `${new Date(date * 1000).getMinutes()}`;
  },

  //converts unix timestamp to string that says hours and minutes with the appropriate values inserted
  getTimeDifference: (date1) => {
    var date = parseInt(Date.now() / 1000);
    var seconds = date - date1;
    var displayHours = parseInt(seconds / 3600);
    var minutes = seconds % 3600;
    var displayMinutes = parseInt(minutes / 60);
    return `${displayHours} hours and ${displayMinutes} minutes ago`;
  },
};
