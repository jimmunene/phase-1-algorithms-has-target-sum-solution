function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i=0; i<array.length; i++){
  const complement = target-array[i];
  for (let j = i + 1; j< array.length; j++){
    if (array[j]===complement) return true;
  }
}
 return false;
}  
/* 
  Write the Big O time complexity of your function here
*/
//0(n^2)
/* 
  Add your pseudocode here
  write a function (hasTargetSum)that has two arguments-an array and a target
  create an object to keep track of the numbers we have seen
  iterate through the numbers in the array
  for the current number identify a complement that adds to the target (complement = target-number)
  if any of the key is the complement return true
  else add that number to the object

*/

/*
  Add written explanation of your solution here
  The code iterates through each numner in the array identifying a complement
  if present it returns true 
  and if not false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
