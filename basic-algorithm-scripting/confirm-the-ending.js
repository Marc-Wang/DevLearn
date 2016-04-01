function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var strLength = str.length;
  return (str.substr(strLength-gargetLength, strLength) === target));
}

confirmEnding("Bastian", "n");
