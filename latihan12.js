// Definisikan kelas Pelajar
class Pelajar {
    // Constructor dengan parameter nama dan sekolah
    constructor(nama, sekolah) {
      // Menggunakan method setter untuk inisialisasi
      this.setNama(nama);
      this.setSekolah(sekolah);
    }
  
    // Method setter untuk _nama
    setNama(nama) {
      this._nama = nama;
    }
  
    // Method setter untuk _sekolah
    setSekolah(sekolah) {
      this._sekolah = sekolah;
    }
  
    // Method getter untuk _nama
    getNama() {
      return this._nama;
    }
  
    // Method getter untuk _sekolah
    getSekolah() {
      return this._sekolah;
    }
  
    // Method belajar
    belajar() {
      return `${this.getNama()} belajar di ${this.getSekolah()}`;
    }
  }
  
  // Buat instance dari kelas Pelajar
  const pelajar = new Pelajar("Alpha", "Skilvul");
  
  // Tampilkan hasil dari method belajar() melalui instance pelajar
  console.log(pelajar.belajar());
  