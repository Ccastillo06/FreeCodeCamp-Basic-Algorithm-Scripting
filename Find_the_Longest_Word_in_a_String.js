function findLongestWord(str) {
  
  var longest;  
  var nextWord;
  
  var array = str.split(" ");  // Split the string into an array formed of words.
  
  var n=0;  // Counting variable starting from the first member of the array.
  
  longest = array[n];  // Longest is the first word in the starting point.
  
   while (n < array.length){  // Loop until n becomes the array.length of words
     
     nextWord = array [n];  // Starting from the first word, they get compared next 
     
     if (longest.length <= nextWord.length){  // If condition will substitute longest for a longer word each loop.
         
       longest = array[n];
      
     }
     
     n++;  // Plus 1 to the counting variable until array.length.
     
   }
  
  
  
  return longest.length;
  
  
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog"); // should return 6.
findLongestWord("May the force be with you"); // should return 5.
findLongestWord("Google do a barrel roll"); // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // should return 19.
