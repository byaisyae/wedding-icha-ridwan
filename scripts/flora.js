/* Kelopak bunga yang jatuh pelan di dalam #flora (tepi kiri-kanan undangan). Ubah N untuk jumlah kelopak. */
(() => {
  const box = document.getElementById("petals");
  if (!box || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const N = innerWidth < 640 ? 7 : 11;
  const r = (a, b) => a + Math.random() * (b - a);
  for (let i = 0; i < N; i++) {
    const p = document.createElement("i");
    p.className = "petal";
    p.style.setProperty("--x", r(2, 96).toFixed(1) + "%");
    p.style.setProperty("--s", r(8, 15).toFixed(1) + "px");
    p.style.setProperty("--dx", r(-70, 70).toFixed(0) + "px");
    p.style.setProperty("--dur", r(11, 19).toFixed(1) + "s");
    p.style.setProperty("--dl", (-r(0, 19)).toFixed(1) + "s");
    box.appendChild(p);
  }
})();
