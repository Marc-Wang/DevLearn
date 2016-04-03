/*
*Return the lowest index at which a value (second argument) should be inserted 
*into an array (first argument) once it has been sorted.
*/

//My code is work but goods awful.Need to make it pretty.
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var numLocation = 0;
  arr.sort(function(a, b){return a-b;});
  for(var i=0; i<arr.length; i++) {
    if (num < arr[0]){
      return 0;
    }
    else if (num === arr[i]){
      return i;
    }
    else if(num > arr[i] && num < arr[i+1]){
      return i+1;
    }
    else if(num > arr[arr.length-1]){
      return arr.length;
    }
  }
  //return numLocation;
}

getIndexToIns([20, 30, 40, 50, 60], 10);
