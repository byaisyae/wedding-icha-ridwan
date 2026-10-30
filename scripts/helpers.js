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
// Kartu mempelai (selebar layar, tanpa sudut membulat): foto penuh sebagai latar + kartu kaca berisi nama, orang tua, dan Instagram.
// 2 foto (photos) = carousel otomatis; side "l" = foto bergeser ke kanan & teks rata kiri, side "r" = bergeser ke kiri & teks rata kanan.
const igIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
// Carousel otomatis 2 foto. dir: "r" = bergeser ke kanan, "l" = ke kiri, "d" = ke bawah, "u" = ke atas. 1 foto = diam.
const carousel = (photos, alt, dir = "r") => {
  const ph = (Array.isArray(photos) ? photos : [photos]).filter(Boolean);
  const im = (src, cls = "") =>
    `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()" class="${cls}">`;
  const cls = { r: "pc-r", l: "pc-l", d: "pc-v pc-d", u: "pc-v pc-u" }[dir] || "pc-r";
  return ph.length > 1
    ? `<div class="pc-track ${cls}">${im(ph[0])}${im(ph[1])}${im(ph[0])}</div>`
    : ph.length
      ? im(ph[0], "w-full h-full object-cover")
      : "";
};
const prof = (p, a, side = "l") => {
  const media = carousel(p.photos && p.photos.length ? p.photos : [p.photo], p.nick, side === "l" ? "r" : "l");
  const align = side === "l" ? "text-left items-start" : "text-right items-end";
  return `<div class="${a}"><div class="pc ph relative w-full aspect-[3/4] overflow-hidden">${media}<div class="absolute inset-x-5 bottom-6 sm:inset-x-6 sm:bottom-7 flex flex-col ${align} rounded-2xl bg-black/45 backdrop-blur-sm p-5 sm:p-6"><h3 class="font-serif text-2xl sm:text-3xl text-white">${p.full}</h3><p class="mt-2 text-sm sm:text-base leading-relaxed text-white/90">${p.role} dari Bapak <b class="text-white font-medium">${p.father}</b><br>&amp; Ibu <b class="text-white font-medium">${p.mother}</b></p><a href="https://instagram.com/${p.ig}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sk-300 text-n9 text-sm font-medium hover:bg-sk-200 transition">${igIcon}${p.ig}</a></div></div></div>`;
};
// Kartu acara (Akad/Resepsi): foto carousel di atas, lalu info + judul vertikal. Acara ganjil (akad) judul di kanan, acara genap (resepsi) judul di kiri.
const evCard = (e, i) => {
  const day = new Date(e.date || C.date)
    .toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    .toUpperCase();
  const media = carousel(e.photos || (e.photo ? [e.photo] : []), e.t, i % 2 ? "l" : "r");
  return `<div class="${i % 2 ? "rr" : "rl"} text-left bg-sk-200 text-n9 ${i % 2 ? "rounded-bl-[2rem]" : "rounded-br-[2rem]"} rounded-t-[2rem] overflow-hidden shadow-xl">${media ? `<div class="pc ph relative aspect-[3/2] w-full overflow-hidden">${media}</div>` : ""}<div class="flex ${i % 2 ? "flex-row-reverse" : ""}"><div class="flex-1 min-w-0 p-5 sm:p-7"><p class="font-bold tracking-wide text-base sm:text-lg leading-snug">${day}${e.time ? `<br>${e.time}` : ""}</p><p class="mt-4 text-sm sm:text-base font-medium">${e.place}</p><p class="text-sm mt-1 leading-relaxed">${e.addr}</p><a href="${e.map}" target="_blank" rel="noopener" class="mt-5 inline-block px-5 py-2.5 rounded-md bg-n7 text-white text-sm font-medium hover:bg-n8 transition">Buka Maps</a></div><div class="w-16 sm:w-20 flex-none flex items-center justify-center bg-n7 ${i % 2 ? "rounded-bl-[2rem]" : "rounded-br-[2rem]"}"><span class="font-script text-3xl sm:text-4xl text-white whitespace-nowrap" style="writing-mode:vertical-rl;${i % 2 ? "transform:rotate(180deg)" : ""}">${e.t}</span></div></div></div>`;
};
// Kartu cerita (Our Story): foto carousel bergeser ke bawah di atas, daftar momen di kiri, judul "Love Story" vertikal di kanan.
const storyCard = () => {
  const sp = (C.storyPhotos && C.storyPhotos.length ? C.storyPhotos : C.story.map((s) => s.i))
    .filter(Boolean)
    .slice(0, 2);
  const media = carousel(sp, "Love Story", "d");
  return `<div class="rv text-left bg-sk-200 text-n9 rounded-t-[2rem] rounded-br-[2rem] overflow-hidden shadow-xl max-w-3xl mx-auto">${media ? `<div class="pc ph relative aspect-[3/2] w-full overflow-hidden">${media}</div>` : ""}<div class="flex"><div class="flex-1 min-w-0 p-5 sm:p-7 space-y-6">${C.story.map((s) => `<div><h3 class="font-serif italic text-xl sm:text-2xl">${s.t}</h3><p class="mt-2 text-sm font-medium">${s.d}</p><p class="mt-1 text-sm leading-relaxed">${s.p}</p></div>`).join("")}</div><div class="w-16 sm:w-20 flex-none flex items-center justify-center bg-n7 rounded-br-[2rem]"><span class="font-script text-3xl sm:text-4xl text-white whitespace-nowrap" style="writing-mode:vertical-rl">Love Story</span></div></div></div>`;
};
