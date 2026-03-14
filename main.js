/* ===== NAVIGATION & SPA ===== */
// Services checkbox toggle on audit page
document.querySelectorAll('#auditServices .sc-check').forEach(sc => {
  sc.addEventListener('click', () => {
    sc.classList.toggle('on');
    sc.querySelector('input').checked = sc.classList.contains('on');
  });
});

// Delivery radio toggle
document.querySelectorAll('[name="delivery"]').forEach(r => {
  r.addEventListener('change', () => {
    document.getElementById('postalBlock').style.display = r.value === 'postal' ? 'block' : 'none';
    document.querySelectorAll('#delivEmail,#delivPost').forEach(l => l.classList.remove('on'));
    r.closest('label').classList.add('on');
  });
});

// Form submit
function submitAudit(e) {
  e.preventDefault();
  const rgpd = document.getElementById('rgpdCheck');
  if (!rgpd.checked) {
    rgpd.style.outline = '2px solid #ef4444';
    setTimeout(() => rgpd.style.outline = '', 2000);
    return;
  }
  document.getElementById('auditForm').style.display = 'none';
  document.getElementById('auditSuccess').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== AUDIT FORM ===== */
function submitLM(e) {
  e.preventDefault();
  const cb = document.getElementById('lmRgpd');
  if (!cb.checked) { cb.style.outline='2px solid #ef4444'; setTimeout(()=>cb.style.outline='',2000); return; }
  document.querySelector('#lmFormBox form').style.display = 'none';
  document.getElementById('lmSuccess').style.display = 'block';
  // TODO: ici, déclencher le téléchargement du fichier quand il sera disponible
  // window.open('URL_DU_FICHIER', '_blank');
}

/* ===== CONTACT FORM ===== */
            <div class="team-av-name">Nathan Bouard</div>
            <div class="team-av-role">Président – DIGIXPERTE</div>
          </div>
        </div>
        <p style="font-size:13px;color:var(--gray);margin-top:14px;line-height:1.65">Expert en marketing digital depuis plus de 5 ans, Nathan supervise personnellement chaque nouveau projet pour garantir la meilleure stratégie.</p>
      </div>

      <!-- Hours -->
      <div class="csb-card">
        <h3><i data-lucide="clock" style="width:16px;height:16px;stroke:var(--blue);fill:none"></i> Horaires</h3>
        <div class="hours-row">
          <div class="hour-item today"><span>Lundi – Vendredi</span><span>9h – 18h ✓</span></div>
          <div class="hour-item"><span>Samedi</span><span>10h – 13h</span></div>
          <div class="hour-item"><span>Dimanche</span><span>Fermé</span></div>
        </div>
        <div style="margin-top:14px;background:rgba(5,150,105,.1);border-radius:8px;padding:10px 14px;font-size:12px;color:#059669;font-weight:600;display:flex;align-items:center;gap:6px">
          <i data-lucide="circle" style="width:8px;height:8px;stroke:#059669;fill:#059669"></i>
          Disponible — réponse sous 24h ouvrées
        </div>
      </div>

      <!-- Mini FAQ -->
      <div class="csb-card">
        <h3><i data-lucide="help-circle" style="width:16px;height:16px;stroke:var(--blue);fill:none"></i> Questions rapides</h3>
        <div class="faq-mini">
          <div class="fmi open">
            <div class="fmq" onclick="this.parentElement.classList.toggle('open')">
              Combien coûte un premier échange ?
              <span class="fmico"><i data-lucide="plus" style="width:15px;height:15px;stroke:currentColor;fill:none"></i></span>
            </div>
            <div class="fma">Le premier appel de découverte est 100% gratuit et sans engagement. Nous estimons ensemble vos besoins avant toute proposition commerciale.</div>
          </div>
          <div class="fmi">
            <div class="fmq" onclick="this.parentElement.classList.toggle('open')">
              Travaillez-vous hors Montpellier ?
              <span class="fmico"><i data-lucide="plus" style="width:15px;height:15px;stroke:currentColor;fill:none"></i></span>
            </div>
            <div class="fma">Oui, nous accompagnons des clients partout en France. Toutes nos prestations peuvent être gérées à distance avec des points réguliers en visio.</div>
          </div>
          <div class="fmi">
            <div class="fmq" onclick="this.parentElement.classList.toggle('open')">
              Quel délai pour démarrer un projet ?
              <span class="fmico"><i data-lucide="plus" style="width:15px;height:15px;stroke:currentColor;fill:none"></i></span>
            </div>
            <div class="fma">En général 1 à 2 semaines après validation du devis. Pour les urgences, nous pouvons mobiliser notre équipe en 48h.</div>
          </div>
        </div>
      </div>

      <!-- Audit CTA -->
      <div style="background:linear-gradient(135deg,var(--dark),#1a1060);border-radius:18px;padding:26px;text-align:center">
        <i data-lucide="gift" style="width:32px;height:32px;stroke:#a5b4fc;fill:none;stroke-width:1.3;margin-bottom:12px"></i>
        <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:8px">Audit digital gratuit</div>
        <div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:18px;line-height:1.6">Obtenez une analyse complète de votre présence en ligne en 24h.</div>
        <button class="btn btn-pill" onclick="showPage('audit')" style="width:100%;justify-content:center">
          Demander mon audit
          <span class="bi"><i data-lucide="arrow-up-right" style="width:15px;height:15px;stroke:currentColor;fill:none"></i></span>
        </button>
      </div>

    </div><!-- /sidebar -->

  </div>
</div>

<div style="text-align:center;padding:0 0 40px;background:#fff">
  <button class="btn-link" onclick="showPage('home')" style="color:var(--gray)">
    <i data-lucide="arrow-left" style="width:14px;height:14px;stroke:currentColor;fill:none;vertical-align:middle;margin-right:4px"></i>
    Retour à l'accueil
  </button>
</div>

/* ===== MAIN APP (Lightning, Simulator, FAQ, etc.) ===== */
// ===== SPA ROUTING =====
function showPage(id) {
  setTimeout(() => { if (typeof lucide !== "undefined") lucide.createIcons(); }, 60);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function scrollTo(hash) {
  setTimeout(() => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ===== COOKIES =====
function acceptCookies() {
  localStorage.setItem('dxp_ck', '1');
  document.getElementById('cookieBanner').style.display = 'none';
}
function refuseCookies() {
  localStorage.setItem('dxp_ck', '0');
  document.getElementById('cookieBanner').style.display = 'none';
}
window.addEventListener('load', () => {
  if (!localStorage.getItem('dxp_ck')) {
    setTimeout(() => { document.getElementById('cookieBanner').style.display = 'flex'; }, 1200);
  }
});

// ===== FAQ =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.fi').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== STEPS =====
function activateStep(el) {
  document.querySelectorAll('.step-item').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

// ===== COUNTER ANIMATION =====
const counted = new Set();
const cObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !counted.has(e.target)) {
      counted.add(e.target);
      const t = parseInt(e.target.dataset.target);
      let s = 0;
      const step = t / 60;
      const timer = setInterval(() => {
        s = Math.min(s + step, t);
        e.target.textContent = Math.floor(s);
        if (s >= t) { e.target.textContent = t; clearInterval(timer); }
      }, 25);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => cObs.observe(el));

// ===== SIMULATOR =====
function calcSim() {
  const svc = document.getElementById('simService').value;
  const type = document.getElementById('simType')?.value || 'vitrine';
  const pages = parseInt(document.getElementById('simPages')?.value || 5);

  let base = 0;
  if (svc === 'site') { base = type === 'ecom' ? 3500 : 1500; base += (pages - 1) * 200; }
  else if (svc === 'seo') base = 800;
  else if (svc === 'sea') base = 600;
  else if (svc === 'meta') base = 500;
  else if (svc === 'cm') base = 700;
  else if (svc === 'branding') base = 1200;
  else if (svc === 'pack') base = 4500 + (pages - 1) * 200;

  let extras = 0;
  document.querySelectorAll('.sc').forEach(sc => {
    if (sc.querySelector('input').checked) extras += parseInt(sc.dataset.price || 0);
  });

  const total = base + extras;
  const fmt = n => n.toLocaleString('fr-FR');
  document.getElementById('simPrice').textContent = fmt(total);
  document.getElementById('simRange').textContent = `Fourchette : ${fmt(Math.round(total * .85))} € – ${fmt(Math.round(total * 1.2))} €`;

  const hasSite = ['site', 'pack'].includes(svc);
  document.getElementById('simTypeRow').style.display = hasSite ? 'block' : 'none';
  document.getElementById('simPagesRow').style.display = hasSite ? 'block' : 'none';
}


// Sim check toggle
document.querySelectorAll('.sc').forEach(sc => {
  sc.addEventListener('click', () => {
    sc.classList.toggle('on');
    const cb = sc.querySelector('input');
    cb.checked = !cb.checked;
    calcSim();
  });
});
document.getElementById('simService')?.addEventListener('change', calcSim);
document.getElementById('simType')?.addEventListener('change', calcSim);
setTimeout(calcSim, 300);

// ===== SCROLL REVEAL =====
const rObs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.08 });
document.querySelectorAll('.scard,.ccase,.tcard,.bcard,.step-item').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  rObs.observe(el);
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const n = document.getElementById('navbar');
  if (n) n.style.background = scrollY > 50 ? 'rgba(13,15,31,.97)' : 'rgba(13,15,31,.88)';
});

// ===== ZAP INTERACTIVE LIGHTNING =====
(function() {
  const box    = document.getElementById('zapBox');
  const bolt   = document.getElementById('zapBolt');
  const glow   = document.getElementById('zapGlow');
  const canvas = document.getElementById('lightning-canvas');
  const ring1  = document.getElementById('zapRing1');
  const ring2  = document.getElementById('zapRing2');
  const ring3  = document.getElementById('zapRing3');
  if (!box || !bolt || !canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, mx = 0, my = 0, inside = false;
  let boltX = 0, boltY = 0; // smoothed bolt position
  let particles = [];
  let raf;

  function resize() {
    W = canvas.width  = box.offsetWidth;
    H = canvas.height = box.offsetHeight;
  }
  resize();
  new ResizeObserver(resize).observe(box);

  // ---- Particles ----
  function spawnParticles(x, y) {
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 2.5;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.025 + Math.random() * 0.04,
        size: 1.5 + Math.random() * 3,
        hue: 220 + Math.random() * 60
      });
    }
  }

  // ---- Main render loop ----
  function loop() {
    raf = requestAnimationFrame(loop);
    ctx.clearRect(0, 0, W, H);

    if (inside) {
      // smooth lerp bolt toward cursor
      boltX += (mx - boltX) * 0.12;
      boltY += (my - boltY) * 0.12;

      // soft radial glow following cursor
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 180);
      grad.addColorStop(0, 'rgba(129,140,248,0.18)');
      grad.addColorStop(0.5, 'rgba(99,102,241,0.08)');
      grad.addColorStop(1, 'rgba(99,102,241,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // spawn glitter particles near cursor
      if (Math.random() < 0.35) spawnParticles(mx + (Math.random()-.5)*28, my + (Math.random()-.5)*28);
    } else {
      // idle: fade particles out faster
      particles.forEach(p => { p.life -= p.decay; });
    }

    // draw & age particles
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.92; p.vy *= 0.92;
      p.life -= p.decay;
      const r = p.size * p.life;
      if (r <= 0) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI*2);
      ctx.fillStyle = `hsla(${p.hue},85%,80%,${p.life * 0.7})`;
      ctx.shadowColor = `hsl(${p.hue},80%,75%)`;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  // ---- Ring pulse animation ----
  let ringT = 0;
  function animateRings() {
    requestAnimationFrame(animateRings);
    ringT += 0.025;
    const baseOpacity = inside ? 0.55 : 0.2;
    const baseScale   = inside ? 1.08 : 1;
    [ring1, ring2, ring3].forEach((r, i) => {
      const phase = ringT + i * 0.9;
      const s = baseScale + Math.sin(phase) * 0.06;
      const o = baseOpacity + Math.sin(phase + 1) * 0.12;
      r.style.transform = `translate(-50%,-50%) scale(${s})`;
      r.style.opacity   = Math.max(0, o);
    });
  }
  animateRings();

  // ---- Mouse events ----
  box.addEventListener('mouseenter', () => {
    inside = true;
    glow.style.opacity = '1';
    // init bolt position at center
    const r = box.getBoundingClientRect();
    boltX = r.width / 2;
    boltY = r.height / 2;
  });

  box.addEventListener('mouseleave', () => {
    inside = false;
    glow.style.opacity = '0';
    // animate bolt back to center
    bolt.style.transform = 'translate(-50%,-50%)';
  });

  box.addEventListener('mousemove', e => {
    const r = box.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;

    // glow orb follows cursor instantly
    glow.style.left = mx + 'px';
    glow.style.top  = my + 'px';

    // bolt follows cursor with offset (max ±60px from center)
    const cx = r.width  / 2;
    const cy = r.height / 2;
    const dx = (mx - cx) * 0.45;
    const dy = (my - cy) * 0.38;
    const maxD = 80;
    const len  = Math.sqrt(dx*dx + dy*dy);
    const clampedDx = len > maxD ? dx/len*maxD : dx;
    const clampedDy = len > maxD ? dy/len*maxD : dy;

    // tilt bolt toward cursor
    const tilt = (mx - cx) / cx * 14;
    bolt.style.transform = `translate(calc(-50% + ${clampedDx}px), calc(-50% + ${clampedDy}px)) rotate(${tilt}deg) scale(1.1)`;
    bolt.style.filter = `drop-shadow(0 0 28px rgba(129,140,248,.85)) drop-shadow(0 0 56px rgba(167,139,250,.45))`;
  });

  // start loop
  loop();
})();

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
if (typeof lucide !== 'undefined') lucide.createIcons();
