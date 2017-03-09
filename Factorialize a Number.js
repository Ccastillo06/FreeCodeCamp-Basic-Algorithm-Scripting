function factorialize(num) {
  
  var n = 1;          // Helping number for the first factor which will keep track of the multiplications
  
  while(num > 1){     // Factorials stop at 1, so we can multiply until we reach that value that doesn't influence the result
    
    n = n * num;      // As said, n = 1 * num the first time, then it will be n = (1*num) * (num-1)
    num = num - 1;    // Reducing the number once each step
        
  }
  
  
  return n;
}


factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
