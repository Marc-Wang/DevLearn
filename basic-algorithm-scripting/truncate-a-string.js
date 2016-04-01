function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num) {
    return str;
  }
  else if(num <= 0) {
    return false;
  }
  else if(num<=3){
    return str.slice(0,num).concat("...");
  }
  else{
    return str.slice(0, num-3).concat("...");
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
