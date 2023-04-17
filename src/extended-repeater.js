const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let object = new Object(options);
 let string = str + object.addition + object.additionSeparator;
 let string2 = string.repeat(object.repeatTimes);
 let string3 = string2.split();
 let string4 = string3.join(object.separator)
 let string5 = string4.repeat(object.additionRepeatTimes);
 return string5;
}

module.exports = {
  repeater
};
