function chunkArrayInGroups(arr, size) {
  
  var n = arr.length/size;  // Create a variable which contains the number of times arr contains size. 
  
  var pushed = [];  // Create a variable to store the new bidimensional array.
  
  for (var i = 0; i < n; i++){  // Loop through the array n times.
    
    var spl = arr.splice(0,size);  // Take from arr the new array called spl.
    
    pushed.push(spl);  // Store spl into pushed to create the bidimensional array.
    
  } // Can also make the loops with pushed.push(arr.splice(0,size));
  
  return pushed;  // Return the final formed array.
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //  should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //  should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //  should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //  should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //  should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //  should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
