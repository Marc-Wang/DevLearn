function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var strLength = str.length;
  if(str.substr(strLength-targetLength, strLength) === target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
