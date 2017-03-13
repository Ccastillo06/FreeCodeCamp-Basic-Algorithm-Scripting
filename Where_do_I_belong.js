function getIndexToIns(arr, num) {
  
  arr.push(num);  // The given value is introduced into the array.
  
  arr.sort(function (a,b){  // Sort uses a function to compare the numbers inside the array, if a-b is negative, a is lower.
    
    return (a - b);
    
    
  });
  
  var i = 0;  // A counting variable for the loop in order to go through the array.
    
  while (arr[i] !== num){  // If the element in the array isn't the same as num, it takes one more step.
      
      i++;
      
    }
    
  return i;  // Returns the position of num in the array.
  
  }
  

getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
getIndexToIns([40, 60], 50); // should return 1.
getIndexToIns([3, 10, 5], 3); // should return 0.
getIndexToIns([5, 3, 20, 3], 5); // should return 2.
getIndexToIns([2, 20, 10], 19); // should return 2.
getIndexToIns([2, 5, 10], 15); // should return 3.
