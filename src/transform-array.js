const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let resultArray = new Array();
  for(let i = 0; i < arr.length; i++) {
    resultArray.push(arr[i]);
    if (arr[i] === '--double-next') {
      delete(resultArray[i]);
      resultArray.push(arr[i + 1]);
      
    } else if (arr[i] === '--doyble-prev') {
      delete(resultArray[i]);
      resultArray.push(arr[i - 1]);
      
    } else if (arr[i] === 'discard-prev') {
      delete(resultArray[i]);
      resultArray.pop(arr[i - 1]);
      
    } else if (arr[i] === '--discard-next') {
      delete(resultArray[i]);
      resultArray.pop(arr[i + 1]);
      
    }
  }
    return resultArray;
}

module.exports = {
  transform
};
