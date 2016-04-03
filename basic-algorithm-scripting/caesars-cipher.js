/*
*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
*In a shift cipher the meanings of the letters are shifted by some set amount.
*A common modern use is the ROT13 cipher, where the values of the letters are 
*shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/
function rot13(str) {
  //var myArray = str.split("");// LBH QVQ VG!
  var myArray = str.toUpperCase().split("");
  for(var i=0; i<str.length; i++){
    var codeNum = str.charCodeAt(i); 
    //var myString = myArray[i];
    if(codeNum>64 && codeNum<78) {
      myArray[i] = String.fromCharCode(codeNum + 13);  
    }
    else if(codeNum > 77 && codeNum < 91) {
      myArray[i] = String.fromCharCode(codeNum + 13 - 26);
    }
  }
  return myArray.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
