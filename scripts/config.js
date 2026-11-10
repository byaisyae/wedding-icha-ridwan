/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Semua foto memakai file lokal di folder img/ (foto asli kostumer).
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
    photos: ["img/bride-1.jpg", "img/bride-2.jpg"],
  },
  groom: {
    full: "Asep Ridwan",
    nick: "Ridwan",
    ig: "ridwannn_313",
    wa: "6283170854327",
    father: "Jajang Irawan",
    mother: "Sumiati",
    role: "Putra",
    address: "Sumberejo RT 02 RW 03, Waway Karya, Lampung Timur",
    // 2 foto = carousel otomatis (bergeser ke kiri).
    photos: ["img/groom-1.jpg", "img/groom-2.jpg"],
  },
  date: "2026-12-12T07:30:00", // tanggal & jam mulai acara (Sabtu, 12 Desember 2026)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Icha & Ridwan", // judul tab browser
    copyright: "© 2026 Aisyae Digital Invitation — Dibuat dengan cinta.",
    // kredit desainer di footer (kosongkan {} untuk menyembunyikan)
    credit: {
      name: "saevitation.com",
      url: "https://saevitation.com",
      ig: "saevitation",
    },
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
  rsvp: "https://script.google.com/macros/s/AKfycbzMHV6I-FdWrFjCwSy974_ioTJlw2uFrjDm2SxTDJGfm2bTxHL93BsVfVUzfbTPjk1c/exec",
  // foto latar tiap bagian
  bg: {
    // latar paralax watercolor untuk bagian tanpa foto (Mempelai, Galeri, Cerita, Hadiah)
    paper: "img/paper.jpg",
    cover: "img/cover.jpg",
    // cover pembuka & Home (HP dan desktop memakai foto yang sama, dipotong penuh)
    open: "img/open.jpg",
    openWide: "img/open.jpg",
    quote: "img/quote.jpg",
    foot: "img/foot.jpg",
    date: "img/date.jpg",
  },
  events: [
    {
      t: "Akad Nikah",
      // photos: 2 foto = carousel otomatis; date (opsional) = tanggal khusus acara ini, kosong = tanggal utama
      photos: ["img/foot.jpg", "img/gal-9.jpg"],
      time: "07.30 - 09.00 WIB",
      place: "Gedung Brata Kartika",
      addr: "Jl. Nagrog No.815, Pasirwangi, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40618",
      map: "https://maps.app.goo.gl/CNNyqXyhwyHs3FMG8?g_st=ac",
    },
    {
      t: "Resepsi",
      photos: ["img/resepsi-1.jpg", "img/resepsi-2.jpg"],
      time: "10.00 - 15.00 WIB",
      place: "Gedung Brata Kartika",
      addr: "Jl. Nagrog No.815, Pasirwangi, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40618",
      map: "https://maps.app.goo.gl/CNNyqXyhwyHs3FMG8?g_st=ac",
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/sunda.mp4", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Icha",
    addr: "Jl. Cigending Gg. Situ Indah 2 RT 03 RW 08 (Pabrik Tempe Afka)",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [{ bank: "BCA", no: "2831880815", name: "Khoerunnisa" }],
  // galeri: disarankan 6 foto portrait agar ringan (tampil sebagai slider + thumbnail)
  gallery: [
    "img/gal-1.jpg",
    "img/gal-2.jpg",
    "img/gal-3.jpg",
    "img/gal-11.webp",
    "img/gal-4.jpg",
    "img/gal-5.jpg",
    "img/gal-6.jpg",
    "img/open.jpg",
    "img/gal-7.jpg",
    "img/gal-8.jpg",
    "img/gal-10.webp",
    "img/gal-9.jpg",
    "img/foot.jpg",
    "img/quote.jpg",
    "img/date.jpg",
    "img/open-wide.jpg",
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  // 2 foto cerita (carousel otomatis bergeser ke bawah)
  storyPhotos: ["img/story-1.jpg", "img/story-2.jpg"],
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
