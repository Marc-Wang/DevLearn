/*
Return the remaining elements of an array after chopping off n elements from the head.
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var finalArray=[];
  if(arr.length<= howMany) {
    return finalArray;
  } 
  else {
    return arr.slice(howMany, arr.length+1);
  }
}

slasher([1, 2, 3], 2);
