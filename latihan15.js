// Menambahkan method baru ke String.prototype
String.prototype.tambahKata = function(str) {
    return this.concat(str);
  };
  
  // Menggunakan method yang telah dibuat
  console.log('Belajar '.tambahKata("coding")); // Output: "Belajar coding"
  