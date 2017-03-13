function destroyer(arr) {
 
  var non = []; // New array to store the non argument elements.
 
  for (var i = 0; i < arr.length; i++){  // Loop through arr.
    
    var c = 0;  // A conditional value to store the coincidence.
    
    for (var j = 1; j < arguments.length; j++){  // Loop through the arguments starting from [1].
      
      if (arr[i] == arguments[j]){  // Adds one when element and argument are the same value.       
        
        c++;
        
      }
    }
    
    if (c === 0){  // If it's 0, it means no element was the same as an argument.
        
        non.push(arr[i]);  // Push that element to a new array.
      
    }
  }
  
  return non;  // Return the final array of isolated elements.
 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].
