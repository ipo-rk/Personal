// =========================================================
// PORTOFOLIO — komponen Alpine.js & integrasi SweetAlert2
// =========================================================

document.addEventListener('alpine:init', () => {

  // ---- Layout global: nav mobile, back-to-top, scrollspy ----
  Alpine.data('siteShell', () => ({
    mobileOpen: false,
    scrolled: false,
    showTop: false,
    activeSection: 'beranda',

    init() {
      // Throttle via requestAnimationFrame agar scroll tetap mulus di perangkat mobile.
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          this.scrolled = window.scrollY > 12;
          this.showTop = window.scrollY > 480;
          this.updateActiveSection();
          ticking = false;
        });
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });

      // Cursor glow ambient (desktop saja)
      const glow = document.getElementById('cursor-glow');
      if (glow && window.matchMedia('(hover: hover)').matches) {
        window.addEventListener('mousemove', (e) => {
          glow.style.left = e.clientX + 'px';
          glow.style.top = e.clientY + 'px';
        });
      }
    },

    updateActiveSection() {
      const sections = ['beranda', 'tentang', 'keahlian', 'proyek', 'pengalaman', 'kontak'];
      for (const id of sections) {
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

  // ---- Reveal on scroll (generik, dipakai untuk judul seksi) ----
  Alpine.data('reveal', () => ({
    visible: false,
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
        { threshold: 0.2 }
      );
      obs.observe(this.$el);
    },
  }));

  // ---- Cincin progres skill, animasi saat masuk viewport ----
  Alpine.data('skillRing', (percent) => ({
    percent,
    animated: false,
    init() {
      const circle = this.$refs.bar;
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
        { threshold: 0.4 }
      );
      obs.observe(this.$el);
    },
  }));

  // ---- Modal detail proyek via SweetAlert2 ----
  Alpine.data('projectModal', () => ({
    open(title, desc, stack, year) {
      Swal.fire({
        title,
        html: `<p style="color:#b7bdca;text-align:left;line-height:1.6;margin-bottom:10px">${desc}</p>
               <p style="text-align:left;font-size:13px;color:#8890a3">Tahun: ${year}</p>
               <p style="text-align:left;font-size:13px;color:#8890a3">Teknologi: ${stack}</p>`,
        background: '#1e222c',
        color: '#e9e8e4',
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
        background: '#1e222c',
        color: '#e9e8e4',
        confirmButtonText: 'Mengerti',
        confirmButtonColor: '#d1a86a',
      });
    },
  }));

  // ---- Form kontak ----
  Alpine.data('contactForm', () => ({
    form: { name: '', email: '', message: '' },
    sending: false,

    submit() {
      if (!this.form.name || !this.form.email || !this.form.message) {
        Swal.fire({
          title: 'Formulir belum lengkap',
          text: 'Isi nama, email, dan pesan sebelum mengirim.',
          icon: 'warning',
          background: '#1e222c',
          color: '#e9e8e4',
          confirmButtonColor: '#d1a86a',
        });
        return;
      }

      this.sending = true;
      // Simulasi pengiriman — ganti dengan pemanggilan API/email service asli.
      setTimeout(() => {
        this.sending = false;
        Swal.fire({
          title: 'Pesan terkirim',
          text: `Terima kasih, ${this.form.name}. Balasan akan dikirim ke ${this.form.email}.`,
          icon: 'success',
          background: '#1e222c',
          color: '#e9e8e4',
          confirmButtonText: 'Sip',
          confirmButtonColor: '#d1a86a',
        });
        this.form = { name: '', email: '', message: '' };
      }, 900);
    },
  }));
});
