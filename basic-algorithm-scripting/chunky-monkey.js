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
