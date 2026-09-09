# Devp Rick11 — Premium Neumorphic Portfolio

> **Versi Final** — Portofolio interaktif _Product Designer & Frontend Developer_ dengan konsep **Neumorphism Soft-UI**, performa tinggi, aksesibilitas WCAG 2.1, serta responsif 100% pada semua perangkat (mobile, tablet, desktop).

---

## 📌 Daftar Isi

- [Ikhtisar Proyek](#ikhtisar-proyek)
- [Fitur Utama](#fitur-utama)
- [Struktur Halaman & Navigasi](#struktur-halaman--navigasi)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Direktori](#struktur-direktori)
- [Panduan Instalasi & Menjalankan](#panduan-instalasi--menjalankan)
- [Kustomisasi Konten](#kustomisasi-konten)
- [Checklist Optimasi & Kualitas](#checklist-optimasi--kualitas)
- [Lisensi](#lisensi)

---

## 🌟 Ikhtisar Proyek

Portofolio ini dirancang dengan gaya antarmuka **Soft-UI / Neumorphism** tingkat lanjut. Menggunakan permainan bayangan ganda (_dual drop-shadow_ & _inner-shadow_) yang presisi untuk menciptakan ilusi kedalaman fisik yang elegan dan nyaman dipandang, dilengkapi efek micro-interactions, scroll spy, dan filter dinamis tanpa dependensi build tools yang berat.

---

## ✨ Fitur Utama

1. **Desain Neumorphism Murni**:
   - Geometri cembung (_convex_), datar (_flat_), dan cekung (_inset_) yang seimbang.
   - Efek 3D Card Tilt interaktif yang merespons pergerakan kursor mouse.
   - Ambient mouse-glow di latar belakang dengan optimasi `requestAnimationFrame`.

2. **100% Responsif di Seluruh Viewport**:
   - Optimal dari layar ultra-kecil (`320px`), smartphone standar (`375px - 428px`), tablet (`768px`), laptop (`1024px`), hingga layar lebar (`1440px+`).
   - Mencegah overflow horizontal (`overflow-x: hidden` multi-layer).
   - Menu drawer mobile yang otomatis menutup saat navigasi diklik atau saat pengguna mengetuk area luar.

3. **Interaktivitas Cepat & Ringan**:
   - **Scrollspy Real-Time**: Indikator navbar aktif berpindah otomatis sesuai posisi section yang sedang dibaca.
   - **Kategori Filter Proyek**: Filter instan (_Semua_, _Web App_, _UI/UX_, _Mobile_) dengan transisi halus.
   - **Dynamic Project Modal**: Pop-up detail proyek interaktif via SweetAlert2 kustom tema Neumorphic gelap.
   - **Skill Progress Rings**: Animasi cincin SVG progress terisi otomatis saat elemen masuk ke viewport layar.

4. **Validasi Formulir Kontak Lengkap**:
   - Validasi nama, format email via Regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), kategori proyek, dan panjang minimal pesan.
   - Notifikasi status kirim interaktif (loading & alert).

5. **Aksesibilitas & Standar Web Modern**:
   - Semantik HTML5 lengkap (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Atribut ARIA (`role`, `aria-label`, `aria-hidden`, `aria-required`, `aria-selected`, `aria-expanded`).
   - Mendukung preferensi sistem `prefers-reduced-motion: reduce` untuk pengguna dengan sensitivitas gerak.

---

## 🧭 Struktur Halaman & Navigasi

Halaman portofolio terdiri dari 9 seksi berurutan:

| No  | ID Seksi      | Nama Seksi          | Deskripsi Komponen                                                                                                              |
| --- | ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `#beranda`    | **Beranda (Hero)**  | Headline, status ketersediaan, CTA buttons, link sosial media, dan visual geometris lingkaran neumorphic dengan floating stats. |
| 2   | `#tentang`    | **Tentang Saya**    | Narasi biografi profesional, 4 kartu metrik pencapaian (klien, kepuasan, penghargaan, durasi karier), dan tombol unduh CV.      |
| 3   | `#keahlian`   | **Keahlian**        | 8 kartu skill teknis dilengkapi SVG radial progress bar yang beranimasi saat discroll.                                          |
| 4   | `#layanan`    | **Layanan**         | 3 kartu layanan inti (_UI/UX Design_, _Frontend Dev_, _Design System_) dengan ikon SVG dan tag kapabilitas.                     |
| 5   | `#proyek`     | **Karya Terpilih**  | Tab filter kategori, kartu 3D tilt, monogram/thumbnail gambar, badge tahun rilis, dan tombol modal detail.                      |
| 6   | `#pengalaman` | **Pengalaman**      | Garis timeline vertikal dinamis dengan indikator tahun, nama instansi/perusahaan, dan deskripsi tanggung jawab.                 |
| 7   | `#testimoni`  | **Testimoni Klien** | Ulasan klien dengan kutipan berformat tanda petik kurung, rating bintang 5, dan inisial avatar.                                 |
| 8   | `#blog`       | **Catatan & Blog**  | 3 kartu artikel wawasan desain dan teknologi dengan label kategori dan tanggal publikasi.                                       |
| 9   | `#kontak`     | **Kontak**          | Informasi email, lokasi, SLA respons kerja, serta form interaktif (Nama, Email, Kategori Proyek, Pesan).                        |

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Semantik terstruktur & SEO Open Graph Meta Tags.
- **Tailwind CSS (CDN)** — Utility-first styling untuk layout fleksibel dan grid responsif.
- **Vanilla CSS3 (`style.css`)** — CSS Variables, custom Neumorphic shadows, keyframe animations, dan media queries.
- **Alpine.js v3** — State management reaktif yang sangat ringan untuk interaktivitas UI.
- **Alpine.js Intersect Plugin** — Trigger animasi scroll reveal berbasis `IntersectionObserver`.
- **SweetAlert2** — Modal dialog pop-up yang disesuaikan dengan palet dark neumorphic.
- **Google Fonts** — _Space Grotesk_ (Headings) & _Inter_ (Body text).

---

## 📂 Struktur Direktori

```text
Personal/
├── index.html       # Markup utama semantik portofolio (9 Section lengkap)
├── style.css        # Desain token, neumorphic mixins, animasi, media queries
├── app.js           # Logika data Alpine.js, filter, observer, validasi form
└── README.md        # Dokumentasi teknis dan panduan operasional
```

---

## 🚀 Panduan Instalasi & Menjalankan

Proyek ini dibuat menggunakan pendekatan _zero-build setup_, sehingga Anda tidak perlu menginstall Node.js atau menjalankan bundler untuk mencobanya:

1. **Jalankan Langsung**:
   - Cukup buka file `index.html` dengan klik dua kali pada peramban web modern apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

2. **Menjalankan Melalui Local Server (Disarankan)**:
   - Jika menggunakan **VS Code**, pasang ekstensi **Live Server**, lalu klik kanan pada `index.html` & pilih **Open with Live Server**.
   - Atau via terminal (Python):
     ```bash
     python -m http.server 8000
     ```
     Buka browser di `http://localhost:8000`.

---

## ✏️ Kustomisasi Konten

Semua data portofolio tersentralisasi dan mudah dimodifikasi:

- **Mengubah Biodata & Data Seksi**:
  Buka `app.js` pada blok paling atas:
  - Ubah array `navItems` untuk mengatur navigasi.
  - Ubah array `skills` untuk memperbarui tingkat penguasaan alat/bahasa.
  - Ubah array `services` untuk mengganti penawaran jasa.
  - Ubah array `projects` untuk menambah atau mengganti portofolio karya (termasuk properti `img`).
  - Ubah array `jobs` untuk memperbarui riwayat pekerjaan.
  - Ubah array `testimonials` untuk testimoni klien Anda.
  - Ubah array `blogPosts` untuk menambahkan artikel baru.

- **Menambahkan Gambar Nyata pada Kartu Proyek**:
  Buka `app.js`, cari array `projects`:
  ```javascript
  {
    title: 'Nimbus Finance',
    category: 'Web App',
    year: '2024',
    desc: 'Deskripsi proyek...',
    tags: ['React', 'Node.js'],
    img: 'img/proyek-1.png', // Masukkan path foto (misal: img/proyek-1.png atau URL web)
    link: 'https://demo-anda.com'
  }
  ```

---

## 📋 Checklist Optimasi & Kualitas

- [x] **Zero Console Errors**: Tidak ada ekspresi parse error pada Alpine.js.
- [x] **Konsistensi Desain**: Seluruh token warna (`--bg`, `--surface`, `--accent`) dan radius sudut tersinkronisasi.
- [x] **Responsivitas 100%**: Tidak ada elemen terpotong pada resolusi mobile 320px hingga desktop 4K.
- [x] **Performa Halus**: Event listener mousemove di-throttle dengan `requestAnimationFrame`.
- [x] **SEO Ready**: Tag Canonical, Open Graph Facebook/LinkedIn, dan Twitter Card terpasang.

---

## 📄 Lisensi

Hak Cipta © 2026 **Devp Rick11**. Dilisensikan di bawah lisensi MIT untuk keperluan edukasi dan pengembangan personal.
