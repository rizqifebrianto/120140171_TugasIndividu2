class Stack {
    constructor(maxSize) {
      // Default kapasitas/size stack adalah 10.
      if (isNaN(maxSize)) {
        maxSize = 10;
      }
      this.maxSize = maxSize;
      // Wadah penyimpanan data dalam Stack menggunakan Array
      this.elements = []; 
    }
}