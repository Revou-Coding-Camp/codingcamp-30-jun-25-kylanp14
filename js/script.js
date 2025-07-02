<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  // Form dan tempat hasil ditampilkan
  const form = document.getElementById("messageForm");
  const infoBox = document.getElementById("infoBox");

  // Handle form submit
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ambil data dari form
      const data = new FormData(form);
      const name = data.get("name");
      const birthdate = new Date(data.get("birthdate"));
      const gender = data.get("gender");
      const message = data.get("message");

      // Validasi: jenis kelamin harus dipilih
      if (!gender) {
        alert("Silakan pilih jenis kelamin.");
        return;
      }

      // Format tanggal ke dd/mm/yyyy
      const day = String(birthdate.getDate()).padStart(2, '0');
      const month = String(birthdate.getMonth() + 1).padStart(2, '0');
      const year = birthdate.getFullYear();
      const formatted = `${day}/${month}/${year}`;

      // Tampilkan hasil input di infoBox
      infoBox.innerHTML = `
        <div class="mb-1 font-bold">Current time :</div>
        <div id="currentTime" class="mb-3">${new Date().toString()}</div>
        <div>
          <b>Nama</b> : ${name}<br />
          <b>Tanggal Lahir</b> : ${formatted}<br />
          <b>Jenis Kelamin</b> : ${gender}<br />
          <b>Pesan</b> : ${message}
        </div>
      `;
    });
  }

  // Update waktu setiap detik
  function updateTime() {
    const timeNow = new Date().toString();
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      timeEl.textContent = timeNow;
    }
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Sapa nama pengguna lewat prompt
  const welcomeName = prompt("Masukkan nama Anda:");
  const nameTarget = document.getElementById("welcomeName");
  if (nameTarget) {
    nameTarget.textContent = welcomeName || "Pengunjung";
  }
});
=======
function showSection(sectionId) {
  document.getElementById("luas").classList.add("hidden");
  document.getElementById("keliling").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasilLuas").innerText = "Masukkan alas dan tinggi dengan benar.";
    return;
  }
  const luas = 0.5 * alas * tinggi;
  document.getElementById("hasilLuas").innerText = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasilLuas").innerText = "";
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById("sisi1").value);
  const s2 = parseFloat(document.getElementById("sisi2").value);
  const s3 = parseFloat(document.getElementById("sisi3").value);
  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    document.getElementById("hasilKeliling").innerText = "Masukkan ketiga sisi dengan benar.";
    return;
  }
  const keliling = s1 + s2 + s3;
  document.getElementById("hasilKeliling").innerText = `K = ${s1} + ${s2} + ${s3} = ${keliling}`;
}

function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("hasilKeliling").innerText = "";
}
>>>>>>> 0666c5cf55b173e6e16e4e44b761cee8aec233b9
