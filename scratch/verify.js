const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

console.log('\n=== SECTION IDs di index.html ===');
['beranda', 'tentang', 'keahlian', 'layanan', 'proyek', 'pengalaman', 'testimoni', 'blog', 'kontak'].forEach(s => {
  if (html.includes(`id="${s}"`)) {
    console.log(`  ✓ #${s}`);
  } else {
    console.error(`  ✗ MISSING: #${s}`);
  }
});

console.log('\n=== Alpine.data() di app.js ===');
['siteShell', 'projectSection', 'reveal', 'skillRing', 'projectModal', 'blogModal', 'contactForm'].forEach(c => {
  if (js.includes(`Alpine.data('${c}'`)) {
    console.log(`  ✓ ${c}`);
  } else {
    console.error(`  ✗ MISSING: ${c}`);
  }
});

console.log('\n=== x-data di HTML cocok dg app.js ===');
['siteShell', 'projectSection', 'contactForm', 'projectModal', 'blogModal', 'skillRing', 'reveal'].forEach(d => {
  if (html.includes(`x-data="${d}"`) || html.includes(`x-data="${d}`)) {
    console.log(`  ✓ x-data="${d}"`);
  } else {
    console.log(`  ~ x-data="${d}"`);
  }
});

console.log('\n=== CSS Classes di style.css ===');
['neu-flat', 'neu-flat-sm', 'neu-convex', 'neu-inset', 'neu-card', 'neu-tab',
  'btn-primary', 'btn-ghost', 'reveal', 'service-card', 'testimonial-card', 'blog-card',
  'status-dot', 'timeline-line', 'focus-ring'].forEach(cl => {
    if (css.includes(`.${cl}`)) {
      console.log(`  ✓ .${cl}`);
    } else {
      console.error(`  ✗ MISSING: .${cl}`);
    }
  });

console.log('\n=== Ukuran File ===');
['index.html', 'style.css', 'app.js'].forEach(f => {
  const bytes = fs.statSync(f).size;
  console.log(`  ${f}: ${Math.round(bytes / 1024 * 10) / 10} KB`);
});
console.log('');

