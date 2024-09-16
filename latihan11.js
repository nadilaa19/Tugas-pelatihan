class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  class Harimau extends Hewan {
    makan() {
      return `${this.nama} makan daging`; // Overriding method makan
    }
  }
  
  // Buat instance dari kelas Harimau
  const harimauSumatra = new Harimau("Harimau Sumatra");
  
  // Tampilkan hasil dari method makan() melalui instance harimauSumatra
  console.log(harimauSumatra.makan());
  // Buat kode kamu di bawah ini