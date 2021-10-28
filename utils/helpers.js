module.exports = {
  // get month/date/year
  format_date: (date) => {
    date = new Date(date * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },

  // get hour:minute
  format_hourMin: (date) => {
    date = new Date(date * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  },

  //get hour
  getHour: (date) => {
    return `${new Date(date * 1000).getHours()}`;
  },

  // get minute
  getMinute: (date) => {
    return `${new Date(date * 1000).getMinutes()}`;
  },
};
