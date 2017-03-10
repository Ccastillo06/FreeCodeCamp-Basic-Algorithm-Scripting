function truncateString(str, num) {
  
  var newStr;
  
  if (num < str.length){
    
    if (num <= 3){
    
    newStr = str.substring(0, num);
    
    newStr = newStr.concat("..."); 
    
  } else {
    
     newStr = str.substring(0,num-3);
    
     newStr = newStr.concat("...");
    
    }
    
    return newStr;
    
  }
    
  return str;
  
}



truncateString("A-tisket a-tasket A green and yellow basket", 11); // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14); // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); // should return "A...".
truncateString("Absolutely Longer", 2); // should return "Ab...".

/* Another solution could be:

  if (num <= 3){
    
    newStr = str.substring(0, num);
    
    newStr = newStr.concat("..."); 
    
  } else if (num >= str.length){
    
    newStr = str;
    
  } else {
    
     newStr = str.substring(0,num-3);
    
     newStr = newStr.concat("...");
    
  }
  
  return newStr;
}

*/
