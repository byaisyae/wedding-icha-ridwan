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
    copyright: "© 2026 Aisyae Digital Invitation — Dibuat dengan cinta.",
    // kredit desainer di footer (kosongkan {} untuk menyembunyikan)
    credit: { name: "saevitation.com", url: "https://saevitation.com", ig: "saevitation" },
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
  // galeri: disarankan 6 foto portrait agar ringan (tampil sebagai slider + thumbnail)
  gallery: [
    U("1607357910286-1ff94ac13c24", 800, 1100),
    U("1596457221755-b96bc3a6df18", 800, 1100),
    U("1624067056935-593eb6595294", 800, 1100),
    U("1535185384036-28bbc8035f28", 800, 1100),
    U("1556499696-0ba753b9ad02", 800, 1100),
    U("1684244276932-6ae853774c4d", 800, 1100),
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  // 2 foto cerita (carousel otomatis bergeser ke bawah)
  storyPhotos: [U("1519741497674-611481863552", 1200, 800), U("1517456215183-9a2c3a748d0c", 1200, 800)],
  // contoh isi (hapus tanda // di depan, lalu isi dengan cerita asli):
  // story: [
  //   { d: "09 September 2016", t: "Awal Bertemu", p: "Tulis cerita singkat di sini." },
  //   { d: "12 Desember 2016", t: "Menjalin Hubungan", p: "Tulis cerita singkat di sini." },
  //   { d: "15 Januari 2023", t: "Bertunangan", p: "Tulis cerita singkat di sini." },
  // ],
  // cerita (kosongkan [] jika tidak dipakai)
  story: [
    {
      d: "Juni 2025",
      t: "Awal Pertemuan",
      p: "Tidak ada pertemuan yang benar-benar kebetulan. Di antara banyaknya tempat dan jarak yang memisahkan, ternyata takdir punya cara sendiri untuk mempertemukan kami. Siapa sangka, dua orang yang awalnya tidak saling mengenal bisa dipertemukan dengan cara yang tidak pernah disangka. Karena jika memang sudah berjodoh, sejauh apa pun jaraknya, pasti akan ada cara untuk bertemu.",
    },
    {
      d: "31 Agustus 2025",
      t: "Mulai Mengenal",
      p: "Semua berawal dari hari ulang tahun yang sederhana. Di hari istimewa itu, dia datang membawa sebuah hadiah berupa bolu yang begitu cantik dan indah. Mungkin terlihat sederhana, tetapi perhatian kecil itu menjadi awal dari cerita yang lebih berarti. Dari situlah kami mulai saling mengenal dan perlahan membuka cerita satu sama lain.",
    },
    {
      d: "September 2025",
      t: "Perjalanan Bersama",
      p: "Sejak saat itu, kami mulai menjalani hari-hari bersama dan mengenal lebih jauh satu sama lain. Ada banyak cerita, tawa, dan momen sederhana yang perlahan menjadi kenangan berharga. Kami belajar memahami, menerima, dan saling melengkapi. Hingga tanpa terasa, hubungan ini tumbuh menjadi sesuatu yang semakin berarti.",
    },
    {
      d: "12 Desember 2026",
      t: "Menuju Selamanya",
      p: "Kini, dua orang yang dulu dipertemukan secara tidak sengaja bersiap memulai cerita baru untuk selamanya. Setelah melewati berbagai cerita dan perjalanan, kami memilih untuk melangkah bersama dalam ikatan suci pernikahan. Karena ternyata, sejauh apa pun jarak memisahkan, jika memang sudah menjadi takdir, dua hati akan selalu menemukan jalan untuk bertemu. Dan kali ini, bukan lagi sekadar bertemu, tetapi untuk bersama selamanya.",
    },
  ],
};
/* =============================================== */
