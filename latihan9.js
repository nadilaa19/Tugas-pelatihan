// Definisikan kelas Orang
class Orang {
    // Konstruktor dengan parameter nama dan umur
    constructor(nama, umur) {
      this.nama = nama; // Assign parameter nama ke properti nama
      this.umur = umur; // Assign parameter umur ke properti umur
    }
  
    // Method bekerja
    bekerja() {
      return `${this.nama} sedang menunggu kepastian`; // Mengembalikan string dengan nama
    }
  }
  
  // Buat objek user1 sebagai instance dari kelas Orang
  const user1 = new Orang("Nadila", 8);
  
  // Tampilkan hasil pemanggilan method bekerja() dari objek user1
  console.log(user1.bekerja());
  