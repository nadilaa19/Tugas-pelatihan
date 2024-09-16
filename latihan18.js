// Array nilai
let nilai = [100, 80, 80, 70, 90];

// Gunakan .reduce() untuk menghitung total nilai
let jumlahNilai = nilai.reduce((total, item) => {
  return total + item;
}, 0); // Initial value untuk total adalah 0

// Hitung rata-rata
let rataRata = jumlahNilai / nilai.length;

// Tampilkan hasil rata-rata di console
console.log(rataRata); // Output: 84
