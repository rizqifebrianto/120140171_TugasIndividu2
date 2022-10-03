function luar(){ 
    var nilaiLuar = 0 
    function dalam(){ 
       console.log(++nilaiLuar); 
    } 
    return dalam 
  } 
   
  var closure = luar() 
   
  closure(); // Output: 1 
  closure(); // Output: 2 
  closure(); // Output: 3 