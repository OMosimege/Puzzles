const targetSumExistsInTwoNumbers = (list, target) => {
  /*Search for X in the HashTable
    If it's there, pair is found
    If not, insert X in the HashTable
  */
  const indices = {};
  list.sort();
  var targetSum = false;
  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    if (target - num in indices) {
      //[indices[target - num], i];
      return targetSum = true;
    }
    indices[list[i]] = i;
  }
  return targetSum
}

const targetSumExistsInThreeNumbers = (list, target) => {
  /*Search for third element x 
    which when added to the twoSum(), the triplet is found.
  */
  list.sort();
  var targetSum = false;
  
  for(let i = 0; i < list.length; i++){
    const indices = twoNumSum(list, target-list[i]);
    if(indices !== -1 && !indices.includes(i)){
        return targetSum = True;
    };
  };
  return targetSum
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}