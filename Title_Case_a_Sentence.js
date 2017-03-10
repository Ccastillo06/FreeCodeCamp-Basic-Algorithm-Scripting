
function titleCase(str) {

  str= str.toLowerCase();  // String to lowercase completely.
  
  var array = str.split(" ");  // Make an array out of the string separating words.
  
 for ( var i=0; i<array.length; i++){  // Run a loop for the array's whole length.
   
   var low = array[i].split("");  // Take the first element of the array split into separate letters.
   
   var upp = low[0];  // Take the first letter of low.
   
   low.shift();  // Delete the first element of low.
   low.unshift(upp.toUpperCase());  // Introduce that element in uppercase.
   
   low = low.join("");  // Join every letter back into the word.
   
   array[i] = low;  // Change the value of that element of the array now corrected.
   
   
 }
  
  str = array.join(" ");  // Join the whole array considering the blank spaces into a string.
  
        
  return str;  // Return the string.
  
  
  
  
}


titleCase("I'm a little tea pot"); // should return a string.
titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return "Here Is My Handle Here Is My Spout".
