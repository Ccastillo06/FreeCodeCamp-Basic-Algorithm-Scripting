function largestOfFour(arr) {
 
 
  var array = []; // Create a new array variable to store every number from the given arr.
 
  for (var i=0; i < arr.length; i++){  // A for loop to get into every element of arr.
    
     var n = 0;  // A variable which will store the biggest number in each element.
    
    for (var j=0; j < arr[i].length; j++){  // Another for loop for every sub array in arr.
      
      if (n < arr[i][j]){  // The condition given to store a number bigger that the value in n.
        
        n = arr[i][j];
      }
    }
    
    array[i] = n;  // Store the biggest numbers of every sub array of arr into a new array to show the final result. 
  }

  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000]
