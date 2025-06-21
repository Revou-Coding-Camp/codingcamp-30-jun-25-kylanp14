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