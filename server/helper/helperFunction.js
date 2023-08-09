//get curent time and date
const getCurrentTimeAndDate = () => {
    const currentDateAndTime = new Date()
    const time = currentDateAndTime.getHours() + ":" + currentDateAndTime.getMinutes() + ":" + currentDateAndTime.getSeconds();
    const date = currentDateAndTime.getDate() + "-" + (currentDateAndTime.getMonth() + 1) + "-" + currentDateAndTime.getFullYear();
    return date + " " + time;
}

module.exports = { getCurrentTimeAndDate };
