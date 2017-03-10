function repeatStringNumTimes(str, num) {
  
  var conc = "";  // Create an empty string.
  
  for ( var n = 0; n < num; n++){  // Repeat a loop num times. "Also works (n = 1; n <= num; n++)".
    
    conc = conc.concat(str);  // .concat() is used to concatenate strings.
  }
  
  return conc;  // Return the new string with str concatenated num times.
}

repeatStringNumTimes("*", 3); // should return "***".
repeatStringNumTimes("abc", 3); // should return "abcabcabc".
repeatStringNumTimes("abc", 4); // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); // should return "abc".
repeatStringNumTimes("*", 8); // should return "********".
repeatStringNumTimes("abc", -2); // should return "".
