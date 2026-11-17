
// ======================================
// WEBSITE BELAJAR OTOMOTIF ONLINE
// File: script.js
// ======================================

// DATA MATERI OTOMOTIF
const materiOtomotif = [
    {
        judul: "Dasar-Dasar Mesin Sepeda Motor",
        kategori: "Mesin",
        deskripsi: "Mempelajari komponen dan cara kerja mesin sepeda motor.",
        icon: "🔧"
    },
    {
        judul: "Sistem Kelistrikan Sepeda Motor",
        kategori: "Kelistrikan",
        deskripsi: "Mempelajari aki, lampu, CDI, ECU, dan sistem pengapian.",
        icon: "⚡"
    },
    {
        judul: "Sistem Bahan Bakar",
        kategori: "Bahan Bakar",
        deskripsi: "Mengenal sistem karburator dan teknologi injeksi.",
        icon: "⛽"
    },
    {
        judul: "Sistem Pengereman",
        kategori: "Chassis",
        deskripsi: "Mempelajari rem cakram, rem tromol, dan ABS.",
        icon: "🛠️"
    },
    {
        judul: "Sistem Transmisi",
        kategori: "Mesin",
        deskripsi: "Mempelajari kopling, transmisi, dan CVT.",
        icon: "⚙️"
    },
    {
        judul: "Perawatan Sepeda Motor",
        kategori: "Perawatan",
        deskripsi: "Mempelajari servis berkala dan perawatan kendaraan.",
        icon: "🏍️"
    }
];

// MENAMPILKAN MATERI
function tampilkanMateri(data = materiOtomotif) {
    const container = document.getElementById("daftarMateri");

    if (!container) return;

    container.innerHTML = "";

    data.forEach((materi, index) => {
        const card = document.createElement("div");

        card.className = "materi-card";

        card.innerHTML = `
            <div class="materi-icon">${materi.icon}</div>
            <h3>${materi.judul}</h3>
            <p>${materi.deskripsi}</p>
            <span>${materi.kategori}</span>
            <button onclick="mulaiBelajar(${index})">
                Mulai Belajar
            </button>
        `;

        container.appendChild(card);
    });
}

// FUNGSI PENCARIAN MATERI
function cariMateri() {
    const input = document.getElementById("searchMateri");

    if (!input) return;

    const keyword = input.value.toLowerCase();

    const hasil = materiOtomotif.filter(materi =>
        materi.judul.toLowerCase().includes(keyword) ||
        materi.kategori.toLowerCase().includes(keyword)
    );

    tampilkanMateri(hasil);
}

// FUNGSI MULAI BELAJAR
function mulaiBelajar(index) {
    const materi = materiOtomotif[index];

    if (!materi) return;

    alert(
        "Selamat Belajar!\n\n" +
        "Materi: " + materi.judul +
        "\nKategori: " + materi.kategori +
        "\n\nSemangat belajar otomotif!"
    );
}

// DATA KUIS OTOMOTIF
const soalKuis = [
    {
        soal: "Apa fungsi utama aki pada sepeda motor?",
        pilihan: [
            "Menyimpan energi listrik",
            "Mengatur tekanan ban",
            "Mendinginkan mesin",
            "Menggerakkan roda"
        ],
        jawaban: 0
    },
    {
        soal: "Apa fungsi busi pada mesin sepeda motor?",
        pilihan: [
            "Mengisi aki",
            "Memercikkan bunga api",
            "Mengatur rem",
            "Mengalirkan oli"
        ],
        jawaban: 1
    },
    {
        soal: "Apa fungsi radiator pada mesin berpendingin cairan?",
        pilihan: [
            "Mendinginkan mesin",
            "Mengisi bahan bakar",
            "Mengatur transmisi",
            "Menghidupkan lampu"
        ],
        jawaban: 0
    },
    {
        soal: "Apa kepanjangan dari ECU?",
        pilihan: [
            "Engine Control Unit",
            "Electric Cooling Unit",
            "Engine Cylinder Utility",
            "Electronic Cable Unit"
        ],
        jawaban: 0
    },
    {
        soal: "Komponen yang berfungsi memperlambat kendaraan adalah?",
        pilihan: [
            "Karburator",
            "Kopling",
            "Rem",
            "Aki"
        ],
        jawaban: 2
    }
];

// VARIABEL KUIS
let nomorSoal = 0;
let skor = 0;

// MENAMPILKAN SOAL KUIS
function tampilkanKuis() {
    const soalElement = document.getElementById("pertanyaan");
    const pilihanElement = document.getElementById("pilihanJawaban");

    if (!soalElement || !pilihanElement) return;

    if (nomorSoal >= soalKuis.length) {
        soalElement.innerHTML = "Kuis Selesai!";
        pilihanElement.innerHTML = `
            <h3>Skor Kamu: ${skor}/${soalKuis.length}</h3>
            <button onclick="ulangKuis()">Ulangi Kuis</button>
        `;
        return;
    }

    const soal = soalKuis[nomorSoal];

    soalElement.innerHTML = `
        ${nomorSoal + 1}. ${soal.soal}
    `;

    pilihanElement.innerHTML = "";

    soal.pilihan.forEach((pilihan, index) => {
        const button = document.createElement("button");

        button.textContent = pilihan;

        button.onclick = () => periksaJawaban(index);

        pilihanElement.appendChild(button);
    });
}

// MEMERIKSA JAWABAN
function periksaJawaban(pilihan) {
    const soal = soalKuis[nomorSoal];

    if (pilihan === soal.jawaban) {
        skor++;
        alert("Benar! Jawaban kamu tepat.");
    } else {
        alert(
            "Jawaban kurang tepat.\n" +
            "Jawaban benar: " +
            soal.pilihan[soal.jawaban]
        );
    }

    nomorSoal++;

    tampilkanKuis();
}

// MENGULANGI KUIS
function ulangKuis() {
    nomorSoal = 0;
    skor = 0;

    tampilkanKuis();
}

// TOMBOL KEMBALI KE ATAS
function kembaliKeAtas() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// NOTIFIKASI SELAMAT DATANG
function notifikasiSelamatDatang() {
    console.log(
        "Selamat datang di Website Belajar Otomotif Online!"
    );
}

// INISIALISASI WEBSITE
document.addEventListener("DOMContentLoaded", function () {

    tampilkanMateri();

    notifikasiSelamatDatang();

    const pencarian = document.getElementById("searchMateri");

    if (pencarian) {
        pencarian.addEventListener("input", cariMateri);
    }

    const tombolKuis = document.getElementById("mulaiKuis");

    if (tombolKuis) {
        tombolKuis.addEventListener("click", function () {
            nomorSoal = 0;
            skor = 0;
            tampilkanKuis();
        });
    }

});
