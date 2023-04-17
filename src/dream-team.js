const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(members) {
  let team = [];
  let arr = Array.from(members);
  arr.forEach(element => {
    if (typeof(element) !== "string" || typeof(element) === "boolean" || typeof(element) === "object" || typeof(element) === "undefined" || typeof(element) === "null"){
      return false
    } else {team += element[0];
    }
  });
  team.toString().toUpperCase();
  return team.sort;
}


module.exports = {
  createDreamTeam
};
