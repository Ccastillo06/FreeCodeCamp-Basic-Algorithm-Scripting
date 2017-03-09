
function palindrome(str) {
  var n = 0;
  
  var newString = str.replace(/[^a-z0-9]/gi, "").toLowerCase(); // "" sticks everything together
                                                                // /[^a-z0-9] removes all non Alpha Numerical Characters 
                                                                // /gi is for global, and case sensitive
  
  var array = newString.split("");                              // The string becomes an array
  
  var reversed = newString.split("").reverse();                 // The string becomes a reversed array
  
  for (var i=0; i<array.length;i++){                            // Loop that compares both array and reversed in length
    
    if(array[i]===reversed[i]){                                 // Whenever they have the same letter, n sums +1
      
      n++;
      
    } 
    
  }  
  
  return n===i;                                                  // If n = i, both arrays are the same in their whole length
  
}


palindrome("eye"); // should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.
