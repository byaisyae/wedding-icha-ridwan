/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Foto dummy pernikahan dari Unsplash (lisensi bebas pakai). Ganti dengan foto kostumer saat pesanan asli.
const U = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`;
// Kosongkan ("" / []) bagian opsional bila tidak dipakai: live, giftAddress, gifts, story.
const C = {
  bride: {
    full: "Khoerunnisa", // nama + gelar
    nick: "Icha", // nama panggilan (tampil di cover)
    ig: "Khrnns_icha", // tanpa @
    wa: "6281224235253", // format 62xxx
    father: "Agus",
    mother: "Kokom",
    role: "Putri", // Putri / Putri pertama / Putri kedua ...
    address: "Jl. Cigending Gg. Situ Indah 2 RT 03 RW 08, Ujungberung, Bandung",
    // 2 foto = carousel otomatis (bergeser ke kanan). Isi 1 foto saja bila tidak ingin carousel.
    photos: [U("1565038930214-09566ed2149b", 900, 1200), U("1607357910286-1ff94ac13c24", 900, 1200)],
  },
  groom: {
    full: "Asep Ridwan",
    nick: "Ridwan",
    ig: "ridwan_313",
    wa: "6283170854327",
    father: "Jajang Irawan",
    mother: "Sumiati",
    role: "Putra",
    address: "Sumberejo RT 02 RW 03, Waway Karya, Lampung Timur",
    // 2 foto = carousel otomatis (bergeser ke kiri).
    photos: [U("1545396047-0fd21ce522ba", 900, 1200), U("1596457221755-b96bc3a6df18", 900, 1200)],
  },
  date: "2026-12-12T07:30:00", // tanggal & jam mulai acara (Sabtu, 12 Desember 2026)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Icha & Ridwan", // judul tab browser
    copyright: "Copyright © 2026 Aisyae Digital Invitation",
  },
  text: {
    greeting: "Assalamu'alaikum Wr. Wb.",
    intro:
      "Segala puji bagi Allah SWT yang telah menjadikan hamba-Nya hidup berpasang-pasangan. Dengan memohon ridho, rahmat, dan berkah-Nya, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami.",
    quote:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "AR-RUM AYAT : 21",
    closing:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih.",
  },
  // URL Web App Google Apps Script (berakhiran /exec) untuk RSVP & ucapan. Kosongkan = disimpan di browser saja (hanya untuk uji coba)
  rsvp: "",
  // foto latar tiap bagian
  bg: {
    cover: U("1519741497674-611481863552", 1200, 900),
    quote: U("1517456215183-9a2c3a748d0c", 1200, 900),
    foot: U("1502955422409-06e43fd3eff3", 1200, 900),
    date: U("1556302482-70b6e670e6b7", 1200, 900),
  },
  events: [
    {
      t: "Akad Nikah",
      // photos: 2 foto = carousel otomatis; date (opsional) = tanggal khusus acara ini, kosong = tanggal utama
      photos: [U("1646325311277-0c35409fdd57", 1200, 800), U("1607357910286-1ff94ac13c24", 1200, 800)],
      time: "07.30 - 09.00 WIB",
      place: "Gedung Brata Kartika",
      addr: "Jl. Nagrog No.815, Pasirwangi, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40618",
      map: "https://maps.app.goo.gl/CNNyqXyhwyHs3FMG8?g_st=ac",
    },
    {
      t: "Resepsi",
      photos: [U("1537633468298-d86f0c2d4173", 1200, 800), U("1695266392136-1805eef542ac", 1200, 800)],
      time: "10.00 - 15.00 WIB",
      place: "Gedung Brata Kartika",
      addr: "Jl. Nagrog No.815, Pasirwangi, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40618",
      map: "https://maps.app.goo.gl/CNNyqXyhwyHs3FMG8?g_st=ac",
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/Calum-Scott-You-Are-The-Reason-Official-Video.mp3", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Icha",
    addr: "Jl. Cigending Gg. Situ Indah 2 RT 03 RW 08 (Pabrik Tempe Afka)",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [{ bank: "BCA", no: "2831880815", name: "Khoerunnisa" }],
  // galeri: foto melebar (landscape) otomatis tampil selebar grid
  gallery: [
    U("1646325311277-0c35409fdd57", 1600, 900),
    U("1607357910286-1ff94ac13c24", 800, 1100),
    U("1596457221755-b96bc3a6df18", 800, 1100),
    U("1537633468298-d86f0c2d4173", 800, 1100),
    U("1695266392136-1805eef542ac", 800, 1100),
    U("1556499696-0ba753b9ad02", 800, 1100),
    U("1684244276932-6ae853774c4d", 800, 1100),
    U("1556302482-70b6e670e6b7", 1600, 900),
    U("1624067056935-593eb6595294", 800, 1100),
    U("1535185384036-28bbc8035f28", 800, 1100),
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  story: [], // belum ada data cerita — kosong = bagian Our Story otomatis tidak tampil
};
// Ukuran foto galeri (lebar, tinggi) — OPSIONAL. Kosong = ukuran dibaca otomatis saat foto dimuat.
const GD = {};
/* =============================================== */
