// Function mandi
function mandi() {
    console.log("Mandi");
  }
  
  // Function sarapan dengan callback
  function sarapan(callback) {
    setTimeout(() => {
      console.log("Sarapan tertunda 3 detik");
      if (callback) callback(); // Memanggil callback setelah sarapan selesai
    }, 3000);
  }
  
  // Function berangkatSekolah
  function berangkatSekolah() {
    console.log("Berangkat Sekolah");
  }
  
  // Memanggil function dengan urutan yang diinginkan
  mandi();
  sarapan(berangkatSekolah);
  