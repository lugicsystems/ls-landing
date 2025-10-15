"""// Configuración: reemplazar con tu número real y mensaje
const WHATSAPP_PHONE = '5493512548711'; // TODO: poner número real sin + ni guiones
const WHATSAPP_MSG = 'Hola! Vengo desde la web de Lugic Systems. Quiero info sobre SFC y una demo.';
const YOUTUBE_ID = 'VIDEO_ID'; // Reemplazar por el ID del video

// Utilidades
function buildWaLink(extra='') {
  const base = 'https://wa.me/' + WHATSAPP_PHONE;
  const text = encodeURIComponent(WHATSAPP_MSG + (extra ? '\\n\\n' + extra : ''));
  return base + '?text=' + text;
}

function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const business = document.getElementById('business').value.trim();
  const message = document.getElementById('message').value.trim();
  const extra = `Soy ${name} (${business}). ${message}`;
  const url = buildWaLink(extra);
  window.open(url, '_blank', 'noopener');
  return false;
}

(function init() {
  // WhatsApp CTAs
  const cta = document.getElementById('cta-whatsapp');
  const demo = document.getElementById('demo-whatsapp');
  if (cta) cta.href = buildWaLink('Quiero una asesoría rápida.');
  if (demo) demo.href = buildWaLink('Quiero agendar una demo.');

  // Año footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menu móvil
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });

  // YouTube embed por ID (opcional)
  const yt = document.getElementById('yt-embed');
  if (yt && YOUTUBE_ID && YOUTUBE_ID !== 'VIDEO_ID') {
    yt.src = 'https://www.youtube.com/embed/' + YOUTUBE_ID;
  }
})();"""