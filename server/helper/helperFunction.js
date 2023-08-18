const date = require("date-and-time")

//get curent time and date
const getCurrentTimeAndDate = () => {
    const now = new Date();
    const pattern = date.compile('ddd, MMM/DD/YYYY, hh:mm:ss');
    return date.format(now, pattern);
}

module.exports = { getCurrentTimeAndDate };
