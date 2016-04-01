function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatString = "";
  if (num <= 0) {
    return repeatString;
  }
  else {
    for(var i = 0; i < num; i++) {
      repeatString += str;
      //repeatString.concat(str);
    }
    return repeatString;
  }
}

repeatStringNumTimes("abc", 3);
