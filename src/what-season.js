const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 let arr = new Array(date);
if (arr[1] > 2 && arr[1] < 6) {
  return "spring";
} else if (arr[1] < 9 && arr[1] > 5 ) {
  return "summer";
} else if(arr[1] > 8 && arr[1] < 12){
  return "autumn";
} else if( arr[1] > 11 || arr[1] < 3){
  return "winter"
} else if (typeof arr === "string" || arr[0] > 2018 || arr[0] < 1971) {
  return "undefined";
} else if(arr.length === 0) {
  return "Unable to determine the time of year!"
} else if(arr.forEach(element => { typeof element !== "number"}))
  {return "Invalid date!"}
}


module.exports = {
  getSeason
};
