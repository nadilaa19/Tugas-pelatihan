class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur); // Panggil konstruktor dari kelas Orang
      this.namaSekolah = namaSekolah; // Assign namaSekolah ke properti namaSekolah
    }
  
    // Method belajar
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }
  
  // Buat instance dari kelas Pelajar
  const user = new Pelajar("Terra", 17, "Skilvul");
  
  // Tampilkan hasil dari method belajar() melalui instance user
  console.log(user.belajar());
  // Tulis kode kamu di bawah ini