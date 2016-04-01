function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  var maxNumber = 0;
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<arr[i].length; j++){
      if(arr[i][j] > maxNumber) {
        maxNumber =arr[i][j];
      }
    }
    maxArray.push(maxNumber);
    maxNumber = 0; //forget to clean maxNumber with infect next subarray max number if next subarry's max number is less than before
  }
  return maxArray;
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 8], [32, 35, 37, 59], [1000, 1001, 857, 1]]);
//largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
