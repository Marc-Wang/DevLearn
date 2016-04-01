function titleCase(str) {
  var myStr= "";
  var otherStr = [];
  var myArray = str.toLowerCase().split(" ");
  for (var i = 0; i < myArray.length; i++) {
    var otherArray = myArray[i].split("");
    otherArray[0] = otherArray[0].toUpperCase();
    otherStr.push(otherArray.join(""));    
  }
  myStr = otherStr.join(" ");
  return myStr;
}

titleCase("I'm a little tea pot");
