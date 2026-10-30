/* Konfigurasi tema Tailwind (dimuat setelah cdn.tailwindcss.com). Ubah warna & font di sini. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        n9: "#2e1a21",
        n8: "#472830",
        n7: "#6b3f4e",
        sk: { 200: "#f6e1e4", 300: "#e3b7bf" },
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
