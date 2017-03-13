function bouncer(arr) {
  
  return arr.filter(Boolean); // The value Boolean compares everything inside arr as truth or false value.
  
}

/*  Also works perfectly:

function bouncer (arr){
  
 return arr.filter(function (val){  // .filter() needs a function to work, and that function can return true or false if Boolean.
    
   return val;
    
 });
  
}

*/


bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
bouncer([1, null, NaN, 2, undefined]); // should return [1, 2].
