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
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'JavaScript & Alpine.js', level: 88 },
    { name: 'Figma & Desain Sistem', level: 94 },
    { name: 'UI/UX Research', level: 85 },
    { name: 'React', level: 78 },
    { name: 'Desain Responsif', level: 96 },
    { name: 'Git & Kolaborasi Tim', level: 90 },
  ];

  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Merancang pengalaman pengguna yang intuitif dan antarmuka yang estetis — dari wireframe, user flow, hingga prototype interaktif yang siap diserahkan ke developer.',
      tags: ['Figma', 'Prototyping', 'Design System', 'Usability Testing'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>
             </svg>`,
    },
    {
      title: 'Frontend Development',
      desc: 'Membangun antarmuka responsif dan performan menggunakan teknologi modern. Kode yang bersih, terstruktur, dan dapat dikembangkan oleh tim manapun.',
      tags: ['HTML/CSS', 'Tailwind', 'Alpine.js', 'React'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
             </svg>`,
    },
    {
      title: 'Design System',
      desc: 'Membangun sistem desain yang konsisten dan terdokumentasi — komponen reusable, token desain, dan panduan gaya yang mempercepat pengembangan produk jangka panjang.',
      tags: ['Figma Tokens', 'Component Library', 'Documentation', 'Storybook'],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
             </svg>`,
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
      link: 'https://ipo-rk.github.io/SI-MOGE/'
    },
    {
      title: 'KugiyaiTobe Digital Printing',
      category: 'UI/UX',
      year: '2026',
      desc: 'UI/UX sistem manajemen digital printing dengan dashboard admin, pemesanan, produksi, pelacakan pengantaran, pembayaran, dan monitoring pelanggan.',
      tags: ['Figma', 'UI/UX', 'Dashboard', 'Web App'],
      img: 'img/kugiyaitobe-digital-printing.png',
      link: '#',
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
      link: 'https://ipo-rk.github.io/ASDEY-Monitoring/landing.html'
    },
    {
      title: 'Pasar Dekat',
      category: 'Mobile',
      year: '2022',
      desc: 'Aplikasi belanja kebutuhan harian dari pasar tradisional terdekat dengan pelacakan real-time.',
      tags: ['React Native', 'Firebase'],
      img: '',
      link: 'https://github.com',
    },
    {
      title: 'ASRAMA DEIYAI',
      category: 'UI/UX',
      year: '2026',
      desc: 'UI/UX Sistem Informasi Manajemen dan Monitoring Asrama Mahasiswa Kabupaten Deiyai dengan dashboard admin, data penghuni, presensi QR, monitoring kamar, pembayaran, dan tampilan responsif.',
      tags: ['Figma', 'UI/UX', 'Dashboard', 'Responsive'],
      img: 'img/asrama-deiyai.png',
      link: '#',
    },
    {
      title: 'KUGIYAI.TOBE.ID (Sistem Manajemen Percetakan Digital)',
      category: 'Web App',
      year: '2026',
      desc: 'Sistem manajemen percetakan digital terintegrasi untuk mengelola pesanan, produksi, pembayaran, pengantaran real-time, dashboard bisnis, dan landing page promosi dalam satu platform.',
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
      link: 'https://ipo-rk.github.io/percetakan_baliho/'
    },
  ];

  const jobs = [
    {
      role: 'Lead Product Designer',
      place: 'Nimbus Fintech',
      period: '2023 — Sekarang',
      desc: 'Memimpin tim desain 4 orang, membangun sistem desain internal, dan menaikkan skor kegunaan aplikasi sebesar 34% dalam dua kuartal pertama.',
    },
    {
      role: 'Frontend Developer & Desainer UI',
      place: 'Studio Loka',
      period: '2021 — 2023',
      desc: 'Menerjemahkan desain menjadi antarmuka responsif menggunakan Tailwind CSS dan Alpine.js untuk klien e-commerce dan UMKM digital.',
    },
    {
      role: 'Junior UI Designer',
      place: 'Kreasi Digital Nusantara',
      period: '2019 — 2021',
      desc: 'Mendesain landing page dan aset pemasaran untuk lebih dari 20 klien UMKM lokal, serta membantu menyusun panduan merek visual.',
    },
  ];

  const testimonials = [
    {
      name: 'Andi Prasetyo',
      role: 'CEO, Nimbus Fintech',
      stars: 5,
      quote: 'Rick11 tidak hanya mendesain — ia memahami produk kami secara mendalam. Sistem desain yang ia bangun mempercepat siklus rilis kami hampir dua kali lipat.',
    },
    {
      name: 'Riana Kusumawati',
      role: 'Product Manager, Studio Loka',
      stars: 5,
      quote: 'Kolaborasinya sangat lancar. Ia bisa berbicara dalam bahasa bisnis, bahasa desain, dan bahasa kode secara bersamaan. Jarang menemukan talenta seperti ini.',
    },
    {
      name: 'Budi Santoso',
      role: 'Founder, Pasar Dekat',
      stars: 5,
      quote: 'Aplikasi kami yang sebelumnya mendapat banyak keluhan usabilitas kini punya ulasan bintang 4.8 di Play Store. Terima kasih atas kerja kerasnya!',
    },
  ];

  const blogPosts = [
    {
      title: 'Mengapa Neumorphism Masih Relevan di 2026',
      excerpt: 'Banyak yang mengira neumorphism sudah mati. Tapi dengan pendekatan yang tepat pada kontras dan aksesibilitas, gaya ini justru memberikan kedalaman visual yang tidak bisa ditiru flat design.',
      category: 'Desain',
      date: 'Agust 2026',
      isoDate: '2026-08-15',
    },
    {
      title: '5 Kebiasaan Code Review yang Membuat Tim Lebih Cepat',
      excerpt: 'Code review bukan hanya tentang menemukan bug — ini tentang mentransfer pengetahuan. Berikut lima kebiasaan yang mengubah review dari ritual menjadi investasi.',
      category: 'Engineering',
      date: 'Jul 2026',
      isoDate: '2026-07-20',
    },
    {
      title: 'Animasi Scroll yang Tidak Mengganggu: Panduan Praktis',
      excerpt: 'Terlalu banyak animasi adalah musuh konsentrasi pengguna. Pelajari kapan harus menggunakan scroll reveal, seberapa lambat, dan bagaimana menghormati preferensi reduced motion.',
      category: 'Interaksi',
      date: 'Jun 2026',
      isoDate: '2026-06-10',
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
  // reveal — Scroll reveal generik via IntersectionObserver
  // =========================================================
  Alpine.data('reveal', () => ({
    init() {
      this.$el.classList.add('reveal');
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.$el.classList.add('is-visible');
              obs.unobserve(this.$el);
            }
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(this.$el);
    },
  }));

  // =========================================================
  // skillRing — Animasi progress ring saat masuk viewport
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
  // projectModal — Modal detail proyek & unduh CV
  // =========================================================
  Alpine.data('projectModal', () => ({
    open(title, desc, stack, year, link, img) {
      const imgPreview = img
        ? `<div style="margin-bottom:14px;border-radius:14px;overflow:hidden;border:1px solid #2a3040;max-height:200px;">
             <img src="${img}" alt="${title}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.parentElement.style.display='none';">
           </div>`
        : '';

      const linkButton = link
        ? `<div style="margin-top:16px;text-align:right;">
             <a href="${link}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:8px 16px;background:linear-gradient(145deg,#dfb87a,#d1a86a);color:#1b1e27;font-weight:600;font-size:13px;border-radius:10px;text-decoration:none;">Kunjungi Tautan &rarr;</a>
           </div>`
        : '';

      Swal.fire({
        title,
        html: `
          ${imgPreview}
          <p style="color:var(--text-muted);text-align:left;line-height:1.7;margin-bottom:12px;font-size:14px">${desc}</p>
          <div style="background:var(--bg);padding:12px 14px;border-radius:12px;margin-bottom:12px;border:1px solid var(--shadow-light);">
            <p style="text-align:left;font-size:13px;color:var(--text-muted);margin-bottom:4px">
              <strong style="color:var(--accent)">Tahun Rilis:</strong> ${year}
            </p>
            <p style="text-align:left;font-size:13px;color:var(--text-muted);margin:0">
              <strong style="color:var(--accent)">Teknologi:</strong> ${stack}
            </p>
          </div>
          ${linkButton}`,
        background: 'var(--surface)',
        color: 'var(--text)',
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#d1a86a',
        customClass: { popup: 'swal-neu' },
      });
    },

    downloadCv() {
      Swal.fire({
        title: 'CV belum terpasang',
        text: 'Ganti tombol ini dengan tautan file CV Anda sendiri untuk mengaktifkan unduhan.',
        icon: 'info',
        background: 'var(--surface)',
        color: 'var(--text)',
        confirmButtonText: 'Mengerti',
        confirmButtonColor: '#d1a86a',
        customClass: { popup: 'swal-neu' },
      });
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
          <p style="color:var(--text-muted);text-align:left;line-height:1.8;font-size:14px;">${content}</p>`,
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
          text: `Terima kasih, ${name.trim()}. Balasan akan dikirim ke ${email.trim()} dalam 1–2 hari kerja.`,
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