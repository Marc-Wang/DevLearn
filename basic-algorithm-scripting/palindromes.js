function palindrome(str) {
  // Good luck!
return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eyes,sdf lksdjf.");
//still need to learn regual expression in javascript
