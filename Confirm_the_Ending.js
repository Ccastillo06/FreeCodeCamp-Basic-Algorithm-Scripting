function confirmEnding(str, target) {
  
  var n = str.length, m = target.length;  // Assing str and target length to new variables.
  
  var final = str.substring(n-m);  // Use .substring() to set final as a string with (n-m) length.
  
  return (final === target);  // Check if both strings are the same.
  
}

confirmEnding("Bastian", "n"); // should return true.
confirmEnding("Connor", "n"); // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // should return false.
confirmEnding("He has to give me a new name", "name"); // should return true.
confirmEnding("Open sesame", "same"); // should return true.
confirmEnding("Open sesame", "pen"); // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // should return false.
//Do not use the built-in method .endsWith() to solve the challenge.
