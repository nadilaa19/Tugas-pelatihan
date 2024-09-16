// Definisikan kelas PersegiPanjang
class PersegiPanjang {
    // Constructor dengan parameter panjang dan lebar
    constructor(panjang, lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    // Method untuk menghitung luas
    luas() {
      let hasil = this.panjang * this.lebar;
      return hasil;
    }
  
    // Method untuk menghitung keliling
    keliling() {
      let hasil = 2 * (this.panjang + this.lebar);
      return hasil;
    }
  }
  
  // Buat instance dari kelas PersegiPanjang
  const persegiPanjang = new PersegiPanjang(4, 3);
  
  // Tampilkan hasil dari method luas() dan keliling() melalui instance persegiPanjang
  console.log("Luas: " + persegiPanjang.luas());
  console.log("Keliling: " + persegiPanjang.keliling());
  