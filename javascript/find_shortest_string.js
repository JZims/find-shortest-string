function findShortestString(arr) {
  //Declare a variable to hold shortest string
  
  let shortest = arr[0]
  //loop through array to compare each string to the string held in shortest variable
  for(var i = 0; i < arr.length; i++){
    //During each iteration, compare the string's length to the length of the string held in the variable
    if(arr[i].length < shortest.length) shortest = arr[i]
    //If the variable is shorter, replace the shortest string
  }
  //Return the shortest string
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file







// And a written explanation of your solution
