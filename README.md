# Template Undangan Pernikahan Digital

## Struktur
- `index.html` — kerangka halaman + pemanggilan CSS/JS
- `css/style.css` — gaya kustom
- `scripts/config.js` — **semua data undangan** (file yang diedit untuk tiap pesanan)
- `scripts/tailwind.config.js` — tema Tailwind (warna & font)
- `scripts/helpers.js`, `render.js`, `ui.js`, `rsvp.js`, `gallery.js`, `animations.js` — logika halaman (jarang diubah)
- `img/`, `sound/` — foto dan musik (ganti dengan milik kostumer)
- `Code.gs` — Google Apps Script untuk RSVP & ucapan (tidak dimuat di browser)
- `FORM-KOSTUMER.txt` — daftar data yang dikirim ke kostumer via WhatsApp

## Langkah membuat undangan baru
1. Salin seluruh folder template ini, beri nama sesuai pesanan.
2. Isi data kostumer di `scripts/config.js` (semua yang perlu diganti sudah diberi komentar).
3. Ganti semua foto di `img/` dengan foto kostumer (nama file boleh tetap), taruh lagu di `sound/` lalu sesuaikan `music` di `config.js`.
4. Ubah **judul, deskripsi, dan URL pratinjau** di bagian atas `index.html` (blok bertanda "UBAH PER PESANAN"). Bagian ini dibaca WhatsApp/medsos dan tidak bisa diambil dari `config.js`. Pratinjau memakai `img/og.jpg` (landscape 1200x630).
5. RSVP & ucapan: buat Google Sheet + Apps Script dari `Code.gs`, deploy sebagai Web App, tempel URL (berakhiran `/exec`) ke `rsvp` di `config.js`.
6. Unggah semua file (termasuk folder `css/`, `scripts/`, `img/`, `sound/`) ke hosting, mis. GitHub Pages.
7. Bagikan link per tamu dengan menambahkan `?to=Nama Tamu` di ujung link.

## Urutan pemanggilan script (jangan ditukar)
`tailwind.config.js` (setelah CDN Tailwind) → `config` → `helpers` → `render` → `ui` → `rsvp` → `gallery` → `animations`

## Bagian opsional
Kosongkan di `config.js` bila tidak dipakai, bagiannya otomatis hilang dari halaman: `live`, `giftAddress`, `gifts`, `story`.
