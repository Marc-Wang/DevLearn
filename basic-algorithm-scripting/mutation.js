/*
Return true if the string in the first element of the array contains all of 
the letters of the string in the second element of the array.
*/
function mutation(arr) {
  var myArray = arr[1].toLowerCase().split(""); 
  for(var i=0; i < arr[1].length; i++) {
   if (arr[0].toLowerCase().indexOf(myArray[i]) === -1) {
     console.log(myArray[i]);
     return false;
   }
  }
  return true; 
}
mutation(["hello", "hk"]);
