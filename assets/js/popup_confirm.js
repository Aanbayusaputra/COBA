function Simpan(){	 
    var userPreference;

      if (confirm("Apakah Anda ingin menyimpan perubahan ini?") == true) {
          userPreference = "Data Berhasil di Simpan!";
      } else {
          userPreference = "Batal Disimpan!";
      }

      document.getElementById("msg").innerHTML = userPreference; 
  }