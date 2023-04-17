const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let address;
  let arr = email.split();
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === "@"){
     address = arr.slice(i+1);
    }
    let res = address.join('');
    return res
  }

  
}

module.exports = {
  getEmailDomain
};
