function mutation(arr) {
  
 var mut = true;  // Create a boolean variable with a default value of True.
 
 arr[0] = arr[0].toLowerCase();  // Change arr[0] to lower case for comparisons.
  
 arr[1] = arr[1].toLowerCase();  // Change arr[1] to lower case for comparisons.
  
 for (var i = 0; i<arr[1].length; i++){  // Increasing variable to loop through the arrays comparing them. 
   
   var c;  // Variable that will store the value of .indexOf().
   
   c = arr[0].indexOf(arr[1][i]);  // Gives c a value -1 if arr[1][i] doesn't appear in arr[0], if not, gives the position.
   
   if (c < 0){  // If the said value doesn't appear, give mut the value of False.
     
     mut = false;
     
   }
 }
  
  return mut;  // Return True if every letter of arr[1] appear in arr[0], if not, returns False.
  
}

mutation(["hello", "hey"]); // should return false.
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
