// =========================================================
// PORTOFOLIO — Alpine.js komponen & integrasi SweetAlert2
// Versi Final — throttle, validasi email, modal fix, data terpusat.
// =========================================================

document.addEventListener('alpine:init', () => {

  // =========================================================
  // DATA TERPUSAT — Navbar, Skills, Services, Jobs,
  //                 Testimonials, Blog Posts
  // =========================================================

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'blog', label: 'Blog' },
  ];

  const skills = [
    {
      name: 'Laravel & PHP',
      level: 92,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"/>
        <path d="m21 16-4-2.3v-3.4L21 8"/>
      </svg>`
    },
    {
      name: 'MySQL Database',
      level: 89,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>`
    },
    {
      name: 'Tailwind CSS',
      level: 95,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>`
    },
    {
      name: 'JavaScript & Alpine.js',
      level: 88,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <circle cx="12" cy="12" r="2.2" fill="currentColor"/>
      </svg>`
    },
    {
      name: 'HTML5 & CSS3',
      level: 96,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z"/>
        <path d="M8 8h8M8 12h7m-6 4l3 1 3-1"/>
      </svg>`
    },
    {
      name: 'Figma & UI/UX Design',
      level: 90,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
      </svg>`
    },
    {
      name: 'REST API & Leaflet.js',
      level: 86,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>`
    },
    {
      name: 'Git & GitHub Workflow',
      level: 91,
      icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="6" y1="9" x2="6" y2="15"/>
        <path d="M18 15a9 9 0 0 0-9-9H6"/>
      </svg>`
    },
  ];

  const services = [
    {
      title: 'Full Stack Web Development',
      desc: 'Membangun website dinamis dan web application lengkap dari backend (Laravel/PHP/MySQL) hingga antarmuka frontend interaktif yang cepat, aman, dan mudah dioperasikan.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'REST API'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
             </svg>`,
      estimate: '7 — 14 Hari Kerja',
      deliverables: [
        'Arsitektur Backend teruji (Laravel / PHP MVC)',
        'Database MySQL terelasi & migrasi siap pakai',
        'Frontend responsif modern dengan Tailwind & Alpine.js',
        'Sistem Otentikasi & Otorisasi Pengguna (Role-based)',
        'Garansi perbaikan bug & pendampingan deployment'
      ],
      process: [
        'Diskusi kebutuhan sistem & perumusan database schema',
        'Pembuatan prototipe UI & persetujuan alur pengguna',
        'Pengkodean backend, CRUD, integrasi API & frontend',
        'Uji coba fitur (testing) & penyesuaian revisi',
        'Pemberian source code, dokumentasi, & upload ke hosting'
      ]
    },
    {
      title: 'Joki & Pengerjaan Proyek Web App',
      desc: 'Membantu pengerjaan tugas akhir, prototipe sistem instansi pemerintah, web profil UMKM, atau dashboard monitoring dengan tenggat waktu cepat dan garansi revisi sampai tuntas.',
      tags: ['Sistem Informasi', 'Dashboard Admin', 'Monitoring', 'Pengerjaan Cepat'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
             </svg>`,
      estimate: '3 — 7 Hari Kerja (Sesuai Deadline)',
      deliverables: [
        'Source code aplikasi lengkap, bersih & beranotasi',
        'Database SQL (.sql) siap impor langsung jalan',
        'Panduan instalasi & demonstrasi alur program',
        'Presentasi ringkas fitur untuk sidang/evaluasi',
        'Garansi revisi gratis sampai sistem diterima'
      ],
      process: [
        'Penyampaian proposal/panduan tugas atau brief instansi',
        'Penetapan jadwal rilis & konfirmasi arsitektur',
        'Siklus pengerjaan cepat (Sprint 1-3 hari)',
        'Demo progress langsung via video / live preview',
        'Finalisasi revisi dan serah terima tuntas'
      ]
    },
    {
      title: 'UI/UX Design & Frontend Modern',
      desc: 'Merancang antarmuka soft-ui / modern neumorphism yang estetis di Figma dan mengimplementasikannya langsung ke dalam kode CSS & JavaScript yang 100% responsif.',
      tags: ['Figma', 'Soft-UI', 'Neumorphism', 'Desain Responsif'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
             </svg>`,
      estimate: '4 — 8 Hari Kerja',
      deliverables: [
        'File desain Figma terorganisir dengan Auto Layout & Komponen',
        'Desain visual responsive (Mobile, Tablet, Desktop)',
        'Implementasi kode HTML/Tailwind CSS / Neumorphism murni',
        'Animasi mikro & interaksi pengguna yang halus',
        'Aksesibilitas visual terstandarisasi WCAG 2.1'
      ],
      process: [
        'Benchmarking gaya visual & identitas brand/proyek',
        'Penyusunan wireframe & tata letak hirarki informasi',
        'Desain High-Fidelity Neumorphic di Figma',
        'Slicing ke HTML semantic + Tailwind CSS + Vanilla/Alpine JS',
        'Pengujian lintas browser & layar sentuh'
      ]
    },
  ];

  const projects = [
    {
      title: 'SIMGK Deiyai — Sistem Monitoring Gereja',
      category: 'Web App',
      year: '2026',
      desc: 'Aplikasi monitoring pelayanan gereja berbasis web yang mengintegrasikan dashboard real-time, manajemen gereja dan klasis, data jemaat, kegiatan & ibadah, laporan, statistik, galeri foto, ekspor data, serta sistem keamanan dan pencatatan aktivitas.',
      tags: [
        'Laravel',
        'Vanilla JS',
        'Alpine.js',
        'Chart.js',
        'LocalStorage',
        'Responsive UI/UX'
      ],
      img: 'img/proyek-simgk-deiyai.png',
      link: 'https://ipo-rk.github.io/SI-MOGE/',
      features: [
        'Dashboard Real-time Statistik Klasis & Jemaat Gereja',
        'Manajemen Jadwal Ibadah, Pelayan Firman, & Warta Jemaat',
        'Pencatatan Keuangan & Ekspor Laporan Otomatis (Excel/PDF)',
        'Sistem Galeri Dokumentasi Pelayanan Berbasis Cloud',
        'Pencatatan Log Aktivitas & Pengamanan Hak Akses Multi-Level'
      ]
    },
    {
      title: 'SIMASRA (Sistem Informasi Monitoring & Manajemen Asrama)',
      category: 'Web App',
      year: '2026',
      desc: 'Sistem Informasi Monitoring & Manajemen Asrama Mahasiswa Kabupaten Deiyai yang terintegrasi untuk pengelolaan penghuni, kamar, presensi QR Code, perizinan, pembinaan, inventaris, laporan, dan manajemen hak akses berbasis peran.',
      tags: [
        'Laravel',
        'MySQL',
        'Tailwind CSS',
        'Alpine.js',
        'Chart.js',
        'SweetAlert2'
      ],
      img: 'img/proyek-simasra.png',
      link: 'https://ipo-rk.github.io/ASDEY-Monitoring/landing.html',
      features: [
        'Presensi Digital Mahasiswa Menggunakan QR Code Dinamis',
        'Manajemen Kapasitas Kamar & Inventaris Gedung Asrama',
        'Sistem Pengajuan Izin Bermalam & Log Kepulangan Mandiri',
        'Dashboard Analitik Kedisiplinan & Grafik Kehadiran Bulanan',
        'Role-based Access Control (Admin, Pengurus Asrama, Mahasiswa)'
      ]
    },
    {
      title: 'KUGIYAI.TOBE.ID (Sistem Manajemen Percetakan Digital)',
      category: 'Web App',
      year: '2026',
      desc: 'Sistem manajemen percetakan digital terintegrasi untuk mengelola pesanan cetak baliho/spanduk, kalkulasi harga dinamis, antrean mesin cetak, pembayaran, pengantaran real-time via Leaflet.js, dashboard bisnis, dan landing page promosi.',
      tags: [
        'Laravel',
        'Tailwind CSS',
        'Alpine.js',
        'Leaflet.js',
        'OpenStreetMap',
        'Chart.js',
        'SweetAlert2',
        'QRCode'
      ],
      img: 'img/proyek-KUGIYAITOBE.png',
      link: 'https://ipo-rk.github.io/percetakan_baliho/',
      features: [
        'Kalkulator Biaya Cetak Otomatis (Ukuran Meter x Bahan)',
        'Pelacakan Pengantaran Kurir Real-time (Leaflet.js Map)',
        'Generasi Resi & Faktur Digital Berbasis QR Code',
        'Monitoring Antrean Produksi & Kapasitas Mesin Cetak',
        'Dashboard Rekapitulasi Omset Harian, Mingguan, & Bulanan'
      ]
    },
    {
      title: 'SIPARS Deiyai (Pengelolaan Arsip Surat Elektronik)',
      category: 'Web App',
      year: '2025',
      desc: 'Sistem Informasi Pengelolaan Arsip Surat Masuk dan Surat Keluar berbasis web untuk Dinas Kominfo Kabupaten Deiyai. Mempermudah disposisi pimpinan, pencarian berkas cepat, dan digitalisasi dokumen dinas.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'PDF Viewer'],
      img: 'img/proyek-sipars.png',
      link: '',
      features: [
        'Digitalisasi Arsip Surat Masuk & Surat Keluar Format PDF',
        'Alur Disposisi Berjenjang dari Kepala Dinas ke Bidang Terkait',
        'Pencarian Cepat Berdasarkan Nomor Surat, Pengirim, & Tanggal',
        'Audit Trail & Riwayat Pengunduhan Dokumen Rahasia',
        'Backup Database Terjadwal & Pengarsipan Berbasis Kategori'
      ]
    },
    {
      title: 'KugiyaiTobe Digital Printing',
      category: 'UI/UX',
      year: '2026',
      desc: 'UI/UX rancangan sistem manajemen percetakan digital dengan dashboard admin, sistem pemesanan online, antrean produksi cetak baliho, pelacakan pengantaran, verifikasi pembayaran, dan monitoring kepuasan pelanggan.',
      tags: ['Figma', 'UI/UX', 'Dashboard', 'Web App'],
      img: 'img/kugiyaitobe-digital-printing.png',
      link: 'https://ipo-rk.github.io/percetakan_baliho/',
      features: [
        'Desain High-Fidelity Dashboard Admin, Kasir, & Operator Mesin',
        'Prototipe Alur Pemesanan Spanduk & Baliho Interaktif di Figma',
        'Sistem Desain Neumorphic Terintegrasi dengan Komponen Reusable',
        'Simulasi Pelacakan Pengantaran Kurir Berbasis Peta Visual'
      ]
    },
    {
      title: 'ASRAMA DEIYAI UI/UX Design',
      category: 'UI/UX',
      year: '2026',
      desc: 'UI/UX Sistem Informasi Manajemen dan Monitoring Asrama Mahasiswa Kabupaten Deiyai dengan dashboard admin, modul data penghuni, presensi QR, monitoring kamar, pembayaran iuran, dan tampilan responsif.',
      tags: ['Figma', 'UI/UX', 'Dashboard', 'Responsive'],
      img: 'img/asrama-deiyai.png',
      link: 'https://ipo-rk.github.io/ASDEY-Monitoring/landing.html',
      features: [
        'Desain UI Mobile-First yang Ringan & Mudah Digunakan Mahasiswa',
        'Prototipe Interaktif Presensi QR Code & Pengajuan Izin',
        'Palet Warna Modern Soft-UI dengan Kontras Optimal',
        'Desain Dashboard Statistik Penghuni untuk Pemerintah Daerah'
      ]
    },
    {
      title: 'Pasar Dekat Mobile',
      category: 'Mobile',
      year: '2022',
      desc: 'Prototipe aplikasi belanja kebutuhan harian dari pasar tradisional terdekat dengan katalog komoditas pedagang lokal dan perkiraan jarak pengantaran.',
      tags: ['React Native', 'Firebase', 'Mobile UI'],
      img: '',
      link: 'https://github.com',
      features: [
        'Katalog Komoditas Pangan Pasar Tradisional',
        'Pencarian Pedagang Terdekat Berdasarkan Lokasi Pengguna',
        'Simulasi Keranjang Belanja & Estimasi Ongkos Kirim',
        'Antarmuka Ringan Sesuai Perangkat Android Entry-Level'
      ]
    },
  ];

  const jobs = [
    {
      role: 'Full Stack Web Developer (Freelance & Joki Proyek)',
      place: 'Mandiri / Klien Pemerintahan & UMKM',
      period: '2023 — Sekarang',
      desc: 'Mengerjakan berbagai proyek joki dan pesanan sistem informasi terintegrasi seperti SIPARS (Dinas Kominfo Deiyai), SIMASRA (Asrama Mahasiswa Deiyai), SIMGK Deiyai, dan sistem percetakan KUGIYAI.TOBE.ID menggunakan Laravel, Tailwind CSS, Alpine.js, dan MySQL.',
    },
    {
      role: 'Belajar Coding & Web Development',
      place: 'Komunitas SaCode Papua',
      period: '2023',
      desc: 'Menimba ilmu dan mengikuti program belajar intensif pemrograman web di komunitas SaCode Papua, memperdalam pemahaman teknologi web modern (HTML, CSS, JavaScript, PHP, MySQL), logika algoritma, serta best practices pembuatan sistem web.',
    },
    {
      role: 'Mahasiswa & Eksplorasi Web Development',
      place: 'Universitas Sains dan Teknologi Jayapura (USTJ)',
      period: '2021 — Sekarang',
      desc: 'Memulai perjalanan pemrograman dari dasar logika komputasi, algoritma, database relational, hingga arsitektur web full stack modern.',
    },
  ];

  const testimonials = [
    {
      name: 'Andi Prasetyo',
      role: 'CEO, Mitra Solusi Digital',
      stars: 5,
      quote: 'Rick11 memahami kebutuhan sistem secara mendalam. Sistem informasi arsip dan dashboard yang dibangun sangat rapi, cepat, dan mudah dioperasikan oleh staf kami.',
    },
    {
      name: 'Riana Kusumawati',
      role: 'Koordinator Proyek Sistem Informasi',
      stars: 5,
      quote: 'Pengerjaan tepat waktu dengan kode yang bersih dan terstruktur. Komunikasi selalu responsif dan revisi diselesaikan dengan sangat baik. Sangat direkomendasikan untuk joki proyek web app.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pengelola Unit Usaha Percetakan',
      stars: 5,
      quote: 'Sistem percetakan KUGIYAI.TOBE.ID membantu otomatisasi pesanan dan pelacakan kurir secara nyata. Tampilan neumorphic-nya sangat elegan dan modern!',
    },
  ];

  const blogPosts = [
    {
      title: 'Mengapa Neumorphism Masih Relevan di 2026',
      excerpt: 'Banyak yang mengira neumorphism sudah mati. Tapi dengan pendekatan yang tepat pada kontras dan aksesibilitas, gaya ini justru memberikan kedalaman visual yang tidak bisa ditiru flat design.',
      category: 'Desain',
      date: 'Agust 2026',
      isoDate: '2026-08-15',
      content: `
        <p style="margin-bottom:12px;">Tren antarmuka pengguna terus berkembang dinamis. Dari era skeuomorphism bertekstur nyata, beralih ke flat design yang serba datar, hingga lahirnya Neumorphism (Soft-UI). Di tahun 2026, Neumorphism kembali menemukan bentuk terbaiknya berkat perpaduan standar aksesibilitas WCAG 2.1.</p>
        <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin:12px 0;border:1px solid var(--shadow-light);">
          <strong style="color:var(--accent);font-size:13px;display:block;margin-bottom:6px;">Kunci Sukses Neumorphism Modern:</strong>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--text-muted);line-height:1.7;">
            <li><strong>Rasio Kontras Terkalibrasi:</strong> Tidak lagi mengandalkan bayangan pucat yang samar, melainkan formula dual-shadow dengan kontras teks minimal 4.5:1.</li>
            <li><strong>Token CSS Terpadu:</strong> Variabel <code>--surface</code>, <code>--shadow-dark</code>, dan <code>--shadow-light</code> yang bereaksi mulus terhadap mode terang dan gelap.</li>
            <li><strong>Hierarki Taktil:</strong> Tombol menonjol (convex) saat idle dan melesap (inset) saat ditekan, memberikan umpan balik haptic visual yang sangat memuaskan.</li>
          </ul>
        </div>
        <p style="margin:0;">Hasilnya adalah antarmuka yang elegan, nyaman dipandang berjam-jam, dan memberikan identitas visual berkelas bagi sistem web app modern.</p>
      `
    },
    {
      title: '5 Kebiasaan Code Review yang Membuat Tim Lebih Cepat',
      excerpt: 'Code review bukan hanya tentang menemukan bug — ini tentang mentransfer pengetahuan. Berikut lima kebiasaan yang mengubah review dari ritual menjadi investasi.',
      category: 'Engineering',
      date: 'Jul 2026',
      isoDate: '2026-07-20',
      content: `
        <p style="margin-bottom:12px;">Dalam pengembangan aplikasi web skala instansi maupun pengerjaan proyek joki berbatas waktu ketat, code review yang terarah justru menghemat puluhan jam proses penelusuran bug di kemudian hari.</p>
        <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin:12px 0;border:1px solid var(--shadow-light);">
          <strong style="color:var(--accent);font-size:13px;display:block;margin-bottom:6px;">5 Prinsip Code Review Efektif:</strong>
          <ol style="margin:0;padding-left:18px;font-size:13px;color:var(--text-muted);line-height:1.7;">
            <li><strong>Batasi Ukuran PR:</strong> Review berkala di bawah 250 baris kode jauh lebih teliti dibanding memeriksa 1.000 baris sekaligus.</li>
            <li><strong>Otomatisasi Linting:</strong> Jangan habiskan energi memperdebatkan titik-koma; serahkan pada ESLint, Prettier, atau Laravel Pint.</li>
            <li><strong>Fokus pada Logika & Keamanan:</strong> Periksa sanitasi query SQL, validasi CSRF, otorisasi hak akses peran, dan penanganan exception.</li>
            <li><strong>Berikan Solusi Kode Alternatif:</strong> Tuliskan contoh snippet perbaikan alih-alih kritik abstrak.</li>
            <li><strong>Apresiasi Solusi Cerdas:</strong> Luangkan waktu memuji solusi arsitektur yang rapi dan elegan.</li>
          </ol>
        </div>
      `
    },
    {
      title: 'Animasi Scroll yang Tidak Mengganggu: Panduan Praktis',
      excerpt: 'Terlalu banyak animasi adalah musuh konsentrasi pengguna. Pelajari kapan harus menggunakan scroll reveal, seberapa lambat, dan bagaimana menghormati preferensi reduced motion.',
      category: 'Interaksi',
      date: 'Jun 2026',
      isoDate: '2026-06-10',
      content: `
        <p style="margin-bottom:12px;">Animasi antarmuka yang baik adalah animasi yang dirasakan sebagai aliran alami interaksi, bukan yang mencuri perhatian atau menghalangi tujuan pengguna mengakses informasi.</p>
        <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin:12px 0;border:1px solid var(--shadow-light);">
          <strong style="color:var(--accent);font-size:13px;display:block;margin-bottom:6px;">Panduan Motion UI Berkualitas:</strong>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--text-muted);line-height:1.7;">
            <li><strong>Durasi Terukur:</strong> Pertahankan rentang waktu transisi elemen antara 250ms hingga 400ms.</li>
            <li><strong>Kurva Easing Organik:</strong> Gunakan <code>cubic-bezier(0.16, 1, 0.3, 1)</code> untuk kesan deselerasi yang mulus.</li>
            <li><strong>Gunakan IntersectionObserver:</strong> Hindari kalkulasi posisi scroll manual di thread utama agar scroll tetap stabil 60 FPS.</li>
            <li><strong>Wajib Dukung Reduced Motion:</strong> Hormati pengaturan sistem operasi dengan mematikan animasi bagi pengguna yang sensitif gerak.</li>
          </ul>
        </div>
      `
    },
  ];

  // =========================================================
  // siteShell — Layout global: navbar, scroll, cursor glow, theme toggle
  // =========================================================
  Alpine.data('siteShell', () => ({
    mobileOpen: false,
    scrolled: false,
    showTop: false,
    activeSection: 'beranda',
    theme: localStorage.getItem('theme') || 'dark',
    navItems,
    skills,
    services,
    projects,
    jobs,
    testimonials,
    blogPosts,

    init() {
      // Terapkan tema awal ke <html>
      document.documentElement.setAttribute('data-theme', this.theme);

      // Scroll handler
      const onScroll = () => {
        this.scrolled = window.scrollY > 12;
        this.showTop = window.scrollY > 480;
        this.updateActiveSection();
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      // Cursor glow — throttle via requestAnimationFrame
      const glow = document.getElementById('cursor-glow');
      if (glow && window.matchMedia('(hover: hover)').matches) {
        let rafId = null;
        window.addEventListener('mousemove', (e) => {
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            rafId = null;
          });
        });
      }

      // Tutup mobile menu saat klik di luar
      document.addEventListener('click', (e) => {
        if (this.mobileOpen && !e.target.closest('header')) {
          this.mobileOpen = false;
        }
      });
    },

    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },

    updateActiveSection() {
      const sectionIds = ['beranda', 'tentang', 'keahlian', 'layanan', 'proyek', 'pengalaman', 'testimoni', 'blog', 'kontak'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          this.activeSection = id;
          break;
        }
      }
    },

    scrollTo(id) {
      this.mobileOpen = false;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    openService(svc) {
      if (window.showServiceModal) window.showServiceModal(svc);
    },

    openCv() {
      if (window.showCvModal) window.showCvModal();
    },

    downloadCv() {
      if (window.showCvModal) window.showCvModal();
    },

    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  }));

  // =========================================================
  // projectSection — Filter kategori & pagination kartu proyek (maks 3 awal)
  // =========================================================
  Alpine.data('projectSection', () => ({
    filter: 'Semua',
    limit: 3,

    setFilter(category) {
      this.filter = category;
      this.limit = 3; // Reset ke 3 kartu setiap ganti kategori
    },

    get filteredProjects() {
      if (this.filter === 'Semua') {
        return this.projects;
      }
      return this.projects.filter(p => p.category === this.filter);
    },

    get visibleProjects() {
      return this.filteredProjects.slice(0, this.limit);
    },

    get hasMore() {
      return this.filteredProjects.length > this.limit;
    },

    showMore() {
      this.limit += 3; // Tambah 3 kartu lagi otomatis saat diklik
    },
  }));

  // =========================================================
  // reveal — Animasi elemen masuk viewport via IntersectionObserver
  // =========================================================
  Alpine.data('reveal', () => ({
    inView: false,
    init() {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.inView = true;
              entry.target.classList.add('in-view');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      obs.observe(this.$el);
    },
  }));

  // =========================================================
  // skillRing — Lingkaran persentase keahlian dinamis
  // =========================================================
  Alpine.data('skillRing', (percent) => ({
    percent,
    animated: false,
    init() {
      const circle = this.$refs.bar;
      if (!circle) return;

      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.animated) {
              this.animated = true;
              const offset = circumference - (this.percent / 100) * circumference;
              requestAnimationFrame(() => {
                circle.style.strokeDashoffset = `${offset}`;
              });
              obs.unobserve(this.$el);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(this.$el);
    },
  }));

  // =========================================================
  // HELPER MODAL GLOBAL: Detail CV & Detail Layanan
  // =========================================================
  window.showCvModal = function () {
    Swal.fire({
      title: 'Curriculum Vitae',
      html: `
        <div class="cv-modal-sheet">
          <!-- Header CV -->
          <div class="cv-sheet-header">
            <div class="cv-sheet-avatar">
              <img src="img/hero-image.png" alt="Devp Rick11" onerror="this.parentElement.style.display='none';">
            </div>
            <div class="cv-sheet-title">
              <h3>Devp Rick11</h3>
              <p class="cv-role">Full Stack Web Developer &amp; UI/UX Specialist</p>
              <p class="cv-meta">Jayapura, Papua, Indonesia &bull; halo@devprick11.id</p>
            </div>
          </div>

          <!-- Ringkasan Profesional -->
          <div class="cv-sheet-section">
            <h4>Ringkasan Profesional</h4>
            <p style="color:var(--text-muted);margin:0;font-size:13px;line-height:1.6;">
              Pengembang Web Full Stack berdomisili di Jayapura, Papua. Mendalami dunia pemrograman web sejak 2021 dan menimba ilmu di komunitas teknologi <strong>SaCode Papua (2023)</strong>. Menguasai arsitektur backend Laravel/PHP &amp; MySQL serta antarmuka modern Tailwind CSS &amp; Alpine.js. Berpengalaman mengerjakan berbagai proyek joki dan pesanan aplikasi instansi pemerintahan, asrama mahasiswa, hingga unit bisnis percetakan.
            </p>
          </div>

          <!-- Pendidikan & Pelatihan -->
          <div class="cv-sheet-section">
            <h4>Pendidikan &amp; Pelatihan</h4>
            <div class="cv-card-item">
              <div class="cv-card-top">
                <strong style="font-size:13px;color:var(--text);">Universitas Sains dan Teknologi Jayapura (USTJ)</strong>
                <span class="cv-badge">2021 — Sekarang</span>
              </div>
              <p style="font-size:12px;color:var(--text-muted);margin:2px 0 0;">Mahasiswa Fakultas Teknik &bull; Jayapura, Papua</p>
            </div>
            <div class="cv-card-item">
              <div class="cv-card-top">
                <strong style="font-size:13px;color:var(--text);">Komunitas SaCode Papua</strong>
                <span class="cv-badge">2023</span>
              </div>
              <p style="font-size:12px;color:var(--text-muted);margin:2px 0 0;">Pembelajar Pemrograman Web Intensif, Algoritma, &amp; Kolaborasi Coding</p>
            </div>
          </div>

          <!-- Keahlian Teknis -->
          <div class="cv-sheet-section">
            <h4>Keahlian Utama</h4>
            <div class="cv-tags">
              <span>Laravel &amp; PHP (92%)</span>
              <span>MySQL Database (89%)</span>
              <span>Tailwind CSS (95%)</span>
              <span>JavaScript &amp; Alpine.js (88%)</span>
              <span>HTML5 &amp; CSS3 (96%)</span>
              <span>Figma UI/UX (90%)</span>
              <span>Leaflet.js Maps (86%)</span>
              <span>Git &amp; GitHub (91%)</span>
            </div>
          </div>

          <!-- Portofolio Proyek Unggulan -->
          <div class="cv-sheet-section" style="margin-bottom:0;">
            <h4>Portofolio Proyek Unggulan</h4>
            <ul class="cv-list">
              <li><strong>SIMGK Deiyai:</strong> Sistem Informasi Monitoring Pelayanan Gereja real-time.</li>
              <li><strong>SIMASRA Deiyai:</strong> Sistem Manajemen Asrama Mahasiswa (Presensi QR Code).</li>
              <li><strong>KUGIYAI.TOBE.ID:</strong> Sistem Percetakan Digital terintegrasi kalkulator harga &amp; Leaflet map.</li>
              <li><strong>SIPARS Deiyai:</strong> Sistem Pengelolaan Arsip Surat Elektronik Dinas Kominfo.</li>
            </ul>
          </div>
        </div>
      `,
      width: "min(620px, calc(100vw - 2rem))",
      background: 'var(--surface)',
      color: 'var(--text)',
      showCancelButton: true,
      confirmButtonText: '🖨️ Cetak / Simpan PDF',
      cancelButtonText: 'Tutup',
      confirmButtonColor: '#d1a86a',
      cancelButtonColor: 'var(--surface)',
      customClass: { popup: 'swal-neu' },
    }).then((res) => {
      if (res.isConfirmed) {
        // Tutup modal terlebih dahulu agar tidak mengganggu layout engine print browser
        Swal.close();
        setTimeout(() => {
          window.print();
        }, 300);
      }
    });
  };

  window.showServiceModal = function (svc) {
    if (!svc) return;
    const deliverablesList = (svc.deliverables || [
      'Full Source Code terstruktur & rapi',
      'Database Schema & Migrasi data',
      'Desain UI/UX responsif multi-device',
      'Garansi revisi & panduan instalasi'
    ]).map(d => `<li style="margin-bottom:5px;">✓ ${d}</li>`).join('');

    const processList = (svc.process || [
      'Konsultasi kebutuhan & penetapan alur sistem',
      'Pembuatan wireframe & mockup UI',
      'Pengembangan kode & integrasi database',
      'Pengujian komprehensif & penyesuaian revisi',
      'Serah terima source code / deployment online'
    ]).map((p, idx) => `<li style="margin-bottom:5px;"><strong>Tahap ${idx + 1}:</strong> ${p}</li>`).join('');

    Swal.fire({
      title: svc.title,
      html: `
        <div style="text-align:left;font-size:13.5px;line-height:1.7;color:var(--text);max-height:65vh;overflow-y:auto;padding-right:4px;">
          <p style="color:var(--text-muted);margin-bottom:14px;font-size:13.5px;">${svc.desc}</p>
          
          <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin-bottom:12px;border:1px solid var(--shadow-light);">
            <p style="font-weight:700;font-size:12.5px;color:var(--accent);margin:0 0 8px;text-transform:uppercase;letter-spacing:0.5px;">Yang Anda Dapatkan (Deliverables):</p>
            <ul style="list-style:none;padding:0;margin:0;color:var(--text-muted);font-size:12.5px;">
              ${deliverablesList}
            </ul>
          </div>

          <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin-bottom:14px;border:1px solid var(--shadow-light);">
            <p style="font-weight:700;font-size:12.5px;color:var(--accent);margin:0 0 8px;text-transform:uppercase;letter-spacing:0.5px;">Alur Kerja Pengerjaan:</p>
            <ol style="padding-left:18px;margin:0;color:var(--text-muted);font-size:12.5px;">
              ${processList}
            </ol>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:10px;background:var(--bg);border:1px solid var(--shadow-light);">
            <span style="font-size:12px;color:var(--text-muted);">Estimasi Pengerjaan:</span>
            <span style="font-size:12.5px;font-weight:700;color:var(--accent);">${svc.estimate || '3 — 14 Hari Kerja'}</span>
          </div>
        </div>
      `,
      width: "min(580px, calc(100vw - 2rem))",
      background: 'var(--surface)',
      color: 'var(--text)',
      showCancelButton: true,
      confirmButtonText: '💬 Pesan via WhatsApp',
      cancelButtonText: 'Tutup',
      confirmButtonColor: '#25d366',
      cancelButtonColor: 'var(--surface)',
      customClass: { popup: 'swal-neu' },
    }).then((result) => {
      if (result.isConfirmed) {
        const text = encodeURIComponent(`Halo Devp Rick11, saya ingin memesan / berkonsultasi mengenai layanan: *${svc.title}*.`);
        window.open(`https://wa.me/6281215376865?text=${text}`, '_blank');
      }
    });
  };

  // =========================================================
  // projectModal — Modal detail proyek & Curriculum Vitae
  // =========================================================
  Alpine.data('projectModal', () => ({
    open(projectOrTitle, desc, stack, year, link, img) {
      let title, category, pDesc, pStack, pYear, pLink, pImg, features;
      if (typeof projectOrTitle === 'object' && projectOrTitle !== null) {
        title = projectOrTitle.title;
        category = projectOrTitle.category || 'Web App';
        pDesc = projectOrTitle.desc;
        pStack = Array.isArray(projectOrTitle.tags) ? projectOrTitle.tags.join(', ') : (projectOrTitle.tags || '');
        pYear = projectOrTitle.year;
        pLink = projectOrTitle.link;
        pImg = projectOrTitle.img;
        features = projectOrTitle.features || [];
      } else {
        title = projectOrTitle;
        category = 'Web App';
        pDesc = desc;
        pStack = stack;
        pYear = year;
        pLink = link;
        pImg = img;
        features = [];
      }

      const imgPreview = pImg
        ? `<div style="margin-bottom:14px;border-radius:14px;overflow:hidden;border:1px solid var(--shadow-light);max-height:220px;background:var(--bg);">
             <img src="${pImg}" alt="${title}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.parentElement.style.display='none';">
           </div>`
        : '';

      const featuresHtml = (features && features.length > 0)
        ? `<div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin-bottom:12px;border:1px solid var(--shadow-light);text-align:left;">
             <p style="font-size:12.5px;font-weight:700;color:var(--accent);margin:0 0 8px;text-transform:uppercase;letter-spacing:0.5px;">Fitur Utama Sistem:</p>
             <ul style="margin:0;padding-left:18px;color:var(--text-muted);font-size:12.5px;line-height:1.7;">
               ${features.map(f => `<li style="margin-bottom:4px;">${f}</li>`).join('')}
             </ul>
           </div>`
        : '';

      const linkButton = (pLink && pLink !== '#')
        ? `<div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;">
             <a href="https://wa.me/6281215376865?text=${encodeURIComponent('Halo Devp Rick11, saya tertarik dengan proyek: ' + title)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:var(--bg);color:var(--text);font-size:12px;border-radius:10px;text-decoration:none;border:1px solid var(--shadow-light);">💬 Diskusi Proyek Serupa</a>
             <a href="${pLink}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(145deg,#dfb87a,#d1a86a);color:#1b1e27;font-weight:600;font-size:13px;border-radius:10px;text-decoration:none;">Kunjungi Tautan &rarr;</a>
           </div>`
        : `<div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;align-items:center;">
             <span style="display:inline-block;padding:6px 12px;background:var(--bg);color:var(--text-muted);font-size:11.5px;border-radius:8px;border:1px solid var(--shadow-light);">Proyek Privat / Prototype Internal</span>
             <a href="https://wa.me/6281215376865?text=${encodeURIComponent('Halo Devp Rick11, saya tertarik membuat sistem seperti: ' + title)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:linear-gradient(145deg,#dfb87a,#d1a86a);color:#1b1e27;font-weight:600;font-size:12.5px;border-radius:10px;text-decoration:none;">💬 Konsultasi Sistem Ini</a>
           </div>`;

      Swal.fire({
        title,
        html: `
          ${imgPreview}
          <div style="display:flex;gap:8px;margin-bottom:12px;justify-content:flex-start;">
            <span style="font-size:11px;font-weight:700;color:var(--accent);background:var(--accent-soft);padding:3px 10px;border-radius:999px;">${category}</span>
            <span style="font-size:11px;color:var(--text-muted);background:var(--bg);border:1px solid var(--shadow-light);padding:3px 10px;border-radius:999px;">Tahun ${pYear}</span>
          </div>
          <p style="color:var(--text-muted);text-align:left;line-height:1.7;margin-bottom:12px;font-size:13.5px">${pDesc}</p>
          ${featuresHtml}
          <div style="background:var(--bg);padding:10px 14px;border-radius:12px;margin-bottom:12px;border:1px solid var(--shadow-light);text-align:left;">
            <p style="margin:0;font-size:12.5px;color:var(--text-muted);">
              <strong style="color:var(--accent)">Teknologi:</strong> ${pStack}
            </p>
          </div>
          ${linkButton}`,
        width: "min(600px, calc(100vw - 2rem))",
        background: 'var(--surface)',
        color: 'var(--text)',
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#d1a86a',
        customClass: { popup: 'swal-neu' },
      });
    },

    downloadCv() {
      if (window.showCvModal) window.showCvModal();
    },

    openCv() {
      if (window.showCvModal) window.showCvModal();
    },
  }));

  // =========================================================
  // blogModal — Modal baca artikel blog
  // =========================================================
  Alpine.data('blogModal', () => ({
    open(title, category, date, content) {
      Swal.fire({
        title,
        html: `
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--shadow-light);">
            <span style="font-size:12px;font-weight:600;color:var(--accent);background:var(--accent-soft);padding:4px 10px;border-radius:999px;">${category}</span>
            <span style="font-size:12px;color:var(--text-muted);">${date}</span>
          </div>
          <div style="color:var(--text-muted);text-align:left;line-height:1.8;font-size:13.5px;max-height:60vh;overflow-y:auto;padding-right:6px;">
            ${content}
          </div>`,
        width: "min(580px, calc(100vw - 2rem))",
        background: 'var(--surface)',
        color: 'var(--text)',
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#d1a86a',
        customClass: { popup: 'swal-neu' },
      });
    },
  }));

  // =========================================================
  // contactForm — Form kontak dengan validasi email proper
  // =========================================================
  Alpine.data('contactForm', () => ({
    form: { name: '', email: '', subject: '', message: '' },
    sending: false,

    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    },

    submit() {
      const { name, email, message } = this.form;

      if (!name.trim()) {
        return this._warn('Nama wajib diisi', 'Masukkan nama lengkap Anda.');
      }
      if (!this.isValidEmail(email)) {
        return this._warn('Email tidak valid', 'Masukkan alamat email yang benar, mis. nama@email.com.');
      }
      if (!message.trim() || message.trim().length < 10) {
        return this._warn('Pesan terlalu singkat', 'Tulis pesan minimal 10 karakter.');
      }

      this.sending = true;
      // Simulasi pengiriman — ganti dengan pemanggilan API/email service asli.
      setTimeout(() => {
        this.sending = false;
        Swal.fire({
          title: 'Pesan terkirim! 🎉',
          text: `Terima kasih, ${name.trim()}.Balasan akan dikirim ke ${email.trim()} dalam 1–2 hari kerja.`,
          icon: 'success',
          background: 'var(--surface)',
          color: 'var(--text)',
          confirmButtonText: 'Sip, terima kasih!',
          confirmButtonColor: '#d1a86a',
          customClass: { popup: 'swal-neu' },
        });
        this.form = { name: '', email: '', subject: '', message: '' };
      }, 900);
    },

    _warn(title, text) {
      Swal.fire({
        title,
        text,
        icon: 'warning',
        background: 'var(--surface)',
        color: 'var(--text)',
        confirmButtonColor: '#d1a86a',
        customClass: { popup: 'swal-neu' },
      });
    },
  }));

});