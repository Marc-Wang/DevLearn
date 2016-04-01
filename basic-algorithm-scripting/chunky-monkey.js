/*Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array.*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var finalArray = [];
  var newArray = [];
  for(var i=0; i<arr.length; i++) {

    if(i%size === 0 && i !== 0) {      
      finalArray.push(newArray);
      newArray = [];
    }
    newArray.push(arr[i]);
    if(i === arr.length-1){
      finalArray.push(newArray);
    }
  }
  return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
/////////////////////////////////////
function chunkArrayInGroups(arr, size) {
  var finalArray = [];
  for(var i=0; i< arr.length; i+=size){
    if(i+size > arr.length) {
      finalArray.push(arr.slice(i, arr.length));
      break;
    }
    finalArray.push(arr.slice(i, i+size));
  }
  return finalArray;
}  
chunkArrayInGroups(["a", "b", "c", "d"], 2);
