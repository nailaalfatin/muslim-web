const city = 1204;
const date = new Date();
const dd = String(date.getDate()).padStart(2, "0");
const mm = String(date.getMonth() + 1).padStart(2, "0");
const yyyy = date.getFullYear();
const now = yyyy + "-" + mm + "-" + dd;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}/`;


// INI BUAT LIST SURAT
window.onload = function () {
  getData();
};

function getData() {
  fetch("https://api.banghasan.com/quran/format/json/surat")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      return response.json();
    })
    .then(function (data) {
      displayData(data);
    
    })
    .catch(function (error) {
      console.log("Terjadi kesalahan", error);
    });
}

function displayData(data) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  data.hasil.forEach(function (surat) {
    var suratDiv = document.createElement("div");
    suratDiv.classList.add("surah");
    suratDiv.className = 'container';

    //Nama surat
    var namaSurah = document.createElement("h2");
    namaSurah.className = "nama-surat";
    namaSurah.textContent = surat.nama;

    var hr = document.createElement("hr");
    hr.className = hr;

    //Nama asma
    var namaAsma = document.createElement("p");
    namaAsma.className = "asma";
    namaAsma.textContent = surat.asma;
    namaAsma.className = "arab";

    //Nama type
    var namaType = document.createElement("p");
    namaType.className = "type";
    namaType.textContent = "Diturunkan di " + surat.type;

    //Nama arti
    var namaArti = document.createElement("p");
    namaArti.className = "arti";
    namaArti.textContent = "Arti : " + surat.arti;

    suratDiv.appendChild(namaSurah);
    suratDiv.appendChild(hr);
    suratDiv.appendChild(namaAsma);
    suratDiv.appendChild(namaType);
    suratDiv.appendChild(namaArti);

    resultDiv.appendChild(suratDiv);
  });
}

