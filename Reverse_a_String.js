function reverseString(str) {
  
  var array = str.split(""); //Split every element inside the string into an array ["h","e","l","l","o"," ","w","o","r","l","d"]
  
  str=array.reverse();       //Reverse the whole new array ["d","l","r", and so on...] 
  
  str=array.join("");        //An now join all the elements together in a new string "dlrow olleh"
  
  return str;
 
}

reverseString("hello world");
reverseString("hello"); // should return a string.
reverseString("hello"); // should become "olleh".
reverseString("Howdy"); // should become "ydwoH".
reverseString("Greetings from Earth"); // should return "htraE morf sgniteerG".
