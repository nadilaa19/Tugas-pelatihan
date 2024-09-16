// Array makanan
let makanan = ["Nasi", "Ayam", "Pisang"];

// Gunakan .map() untuk menambahkan " Goreng" pada setiap item
let gorengMakanan = makanan.map((item) => {
  return item + " Goreng";
});

// Tampilkan hasil di console
console.log(gorengMakanan); // Output: ['Nasi Goreng', 'Ayam Goreng', 'Pisang Goreng']
