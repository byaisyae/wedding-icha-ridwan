/* Variabel & fungsi bantu (format tanggal, escape HTML, builder section/profil). */
const B = C.bride,
  G = C.groom,
  d0 = new Date(C.date),
  $ = (s) => document.querySelector(s);
const fmt = d0.toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
const ov = (a, b) =>
  `background-image:linear-gradient(${a},${b}),url(${C.bg.cover})`;
const bgs = (url, o = "rgba(46,26,33,.82)") =>
  `background-image:linear-gradient(${o},${o}),url(${url})`;
const sec = (id, h, sub, body, st = "", cls = "") =>
  `<section id="${id}" class="relative py-20 sm:py-28 px-5 sm:px-6 bg ${st ? "fx" : ""} ${cls}" style="${st}"><div class="max-w-5xl mx-auto text-center"><h2 class="rv font-script text-5xl sm:text-6xl text-white">${h}</h2>${sub ? `<p class="rv mt-4 text-sm sm:text-base text-sk-300/90 max-w-2xl mx-auto leading-relaxed" style="--d:.1s">${sub}</p>` : ""}<div class="mt-12">${body}</div></div></section>`;
const btn = (h, t) =>
  `<a href="${h}" target="_blank" rel="noopener" class="inline-block px-5 py-2 rounded-full border border-sk-300/60 text-sk-200 text-sm hover:bg-sk-300 hover:text-n9 transition">${t}</a>`;
const prof = (
  p,
  a,
) => `<div class="${a} text-center"><div class="ph relative mx-auto w-52 h-72 sm:w-60 sm:h-80 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-sk-300/40 shadow-2xl"><img src="${p.photo}" alt="${p.nick}" loading="lazy" onerror="this.remove()" class="w-full h-full object-cover hover:scale-110 transition duration-700"></div>
<h3 class="font-serif text-2xl text-white mt-6">${p.full}</h3><p class="font-script text-3xl text-sk-300">${p.nick}</p>
<p class="text-sm mt-2 leading-relaxed">${p.role} dari Bapak <b class="text-white font-medium">${p.father}</b><br>&amp; Ibu <b class="text-white font-medium">${p.mother}</b></p>
<div class="mt-4 flex justify-center gap-2 flex-wrap">${btn("https://instagram.com/" + p.ig, "@" + p.ig)}</div></div>`;
// ukuran foto galeri otomatis jika belum ada di GD (foto melebar tampil selebar grid)
const gdFix = (im) => {
  const p = im.parentElement;
  if (p.style.aspectRatio) return;
  p.style.aspectRatio = `${im.naturalWidth}/${im.naturalHeight}`;
  if (im.naturalWidth / im.naturalHeight > 1.2) p.style.columnSpan = "all";
};
