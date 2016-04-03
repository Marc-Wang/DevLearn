/*
function destroyer(arr) {
  // Remove all the values
  function deleteItem(myArray) {  
    for(var i=1; i<arguments.length; i++) {    
      if(myArray === arguments[i]){
        return false;
      } 
    }
    return true;
  }
  return arr.filter(deleteItem);
}
*/
//It is my code above but it doesn't work. have no idea what happend.
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
