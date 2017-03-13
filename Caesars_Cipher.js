function rot13(str) { // LBH QVQ VG!
  
  var finalStr = "";  // New string to store the decoded message.
  
  for (var i = 0; i < str.length; i++){  // Loop from 0 to str.length.
    
    var n = str.charCodeAt(i); // Every loop, n will store the character UTF-8 Unicode value.
    
    if (n >= 78 && n <= 90){  // To move between 65 and 90 + 13 from the bottom.
      
      n = n - 13;  // So 13 is taken to set the real character.
      
      finalStr = finalStr + String.fromCharCode(n);  // And now it's added to the final string using the real value.
    
    }  else if (n >= 65 && n <= 90){  // To move between 65 and 90 - 13 from the top.
      
      n = n + 13;  // So 13 is given to set the real character.
      
      finalStr = finalStr + String.fromCharCode(n);  // And now it's added to the final string using the real value.
    
    } else {  // For any other case different than A - Z.
      
      finalStr = finalStr + str[i];  // The character is added directly to the new string.
    
    }
  }  
  
  return finalStr;  // Return the final decoded string.
  
}

rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
