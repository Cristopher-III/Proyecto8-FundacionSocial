/* ==========================================
   PROYECTO 8 · FUNCIONALIDADES PRINCIPALES
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------ Theme Toggle ------ */
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('p8-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('p8-theme', next);
  });

  /* ------ Mobile Nav Toggle ------ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navMenu?.classList.remove('open');
    });
  });

  /* ------ Navbar Scroll Effect ------ */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);

    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  /* ------ Animated Counters ------ */
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    let current = 0;
    const increment = () => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = current;
      requestAnimationFrame(() => setTimeout(increment, 30));
    };
    increment();
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

  /* ------ Services Cards (render from data) ------ */
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid && typeof SITE_DATA !== 'undefined') {
    const icons = {
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
      heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
      food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
      music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
      activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    };

    SITE_DATA.services.forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="service-icon">${icons[s.icon] || icons.book}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      `;
      servicesGrid.appendChild(card);
    });
  }

  /* ------ Projects Cards (render from data) ------ */
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid && typeof SITE_DATA !== 'undefined' && SITE_DATA.projects) {
    const icons = {
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
      heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
      activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>'
    };

    SITE_DATA.projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="service-icon">${icons[p.icon] || icons.heart}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;
      projectsGrid.appendChild(card);
    });
  }

  /* ------ Blog Cards (render from data) ------ */
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid && typeof SITE_DATA !== 'undefined') {
    SITE_DATA.blog.forEach(post => {
      const colors = ['#1a365d', '#2b4f8c', '#e67e22', '#27ae60', '#8e44ad', '#c0392b'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <div class="blog-card-img">
          <svg viewBox="0 0 400 200"><rect width="400" height="200" fill="${color}" opacity="0.3"/><text x="200" y="110" text-anchor="middle" fill="var(--color-text-muted)" font-family="Inter, sans-serif" font-size="14">${post.category}</text></svg>
        </div>
        <div class="blog-card-body">
          <div class="blog-card-date">${post.date}</div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      `;
      blogGrid.appendChild(card);
    });
  }

  /* ------ Gallery (render from data) ------ */
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  if (galleryGrid && typeof SITE_DATA !== 'undefined') {
    SITE_DATA.gallery.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <svg viewBox="0 0 400 400"><rect width="400" height="400" fill="${item.color}" opacity="0.3"/><text x="200" y="185" text-anchor="middle" fill="var(--color-text-muted)" font-family="Inter, sans-serif" font-size="14">${item.label}</text></svg>
        <div class="gallery-overlay">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
      `;
      div.addEventListener('click', () => {
        const svg = div.querySelector('svg').outerHTML;
        lightboxImg.src = ''; // clear
        lightboxImg.alt = item.label;
        lightbox.classList.add('active');
      });
      galleryGrid.appendChild(div);
    });
  }

  /* Gallery Toggle */
  const galleryToggle = document.getElementById('galleryToggle');
  let galleryExpanded = false;
  galleryToggle?.addEventListener('click', () => {
    galleryExpanded = !galleryExpanded;
    galleryGrid.classList.toggle('collapsed', !galleryExpanded);
    galleryToggle.textContent = galleryExpanded ? 'Ver menos' : 'Ver más';
  });
  galleryGrid?.classList.add('collapsed');

  /* Lightbox close */
  document.querySelector('.lightbox-close')?.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });

  /* ------ Team Cards (render from data) ------ */
  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid && typeof SITE_DATA !== 'undefined') {
    const avatarColors = ['#1a365d', '#2b4f8c', '#e67e22', '#27ae60', '#8e44ad', '#c0392b', '#16a085', '#d35400'];
    SITE_DATA.team.forEach((member, i) => {
      const card = document.createElement('div');
      card.className = 'team-card';
      const initials = member.name.split(' ').map(n => n[0]).join('');
      card.innerHTML = `
        <div class="team-avatar">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${avatarColors[i % avatarColors.length]}" opacity="0.2"/><text x="50" y="56" text-anchor="middle" fill="var(--color-text-muted)" font-family="Inter, sans-serif" font-size="24" font-weight="600">${initials}</text></svg>
        </div>
        <h3>${member.name}</h3>
        <div class="team-role">${member.role}</div>
        <p>${member.desc}</p>
      `;
      teamGrid.appendChild(card);
    });
  }

  /* ------ Testimonials Carousel ------ */
  const carousel = document.getElementById('testimonialsCarousel');
  const dotsContainer = document.getElementById('carouselDots');
  let currentTestimonial = 0;

  if (carousel && typeof SITE_DATA !== 'undefined') {
    SITE_DATA.testimonials.forEach((t, i) => {
      const card = document.createElement('div');
      card.className = `testimonial-card${i === 0 ? ' active' : ''}`;
      card.innerHTML = `
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
        <blockquote>${t.quote}</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar">
            <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="var(--color-primary)" opacity="0.2"/><text x="24" y="28" text-anchor="middle" fill="var(--color-text-muted)" font-family="Inter, sans-serif" font-size="14" font-weight="600">${t.initials}</text></svg>
          </div>
          <div class="author-info">
            <strong>${t.author}</strong>
            <span>${t.role}</span>
          </div>
        </div>
      `;
      carousel.appendChild(card);

      const dot = document.createElement('button');
      dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
      dot.addEventListener('click', () => goToTestimonial(i));
      dotsContainer.appendChild(dot);
    });
  }

  function goToTestimonial(index) {
    const cards = carousel.querySelectorAll('.testimonial-card');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
  }

  document.getElementById('prevTestimonial')?.addEventListener('click', () => {
    const total = carousel.querySelectorAll('.testimonial-card').length;
    goToTestimonial((currentTestimonial - 1 + total) % total);
  });

  document.getElementById('nextTestimonial')?.addEventListener('click', () => {
    const total = carousel.querySelectorAll('.testimonial-card').length;
    goToTestimonial((currentTestimonial + 1) % total);
  });

  /* Auto-rotate carousel */
  let carouselInterval = setInterval(() => {
    const total = carousel?.querySelectorAll('.testimonial-card').length || 0;
    if (total) goToTestimonial((currentTestimonial + 1) % total);
  }, 5000);

  document.querySelector('.carousel-controls')?.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  document.querySelector('.carousel-controls')?.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(() => {
      const total = carousel?.querySelectorAll('.testimonial-card').length || 0;
      if (total) goToTestimonial((currentTestimonial + 1) % total);
    }, 5000);
  });

  /* ------ Contact Form ------ */
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const data = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value,
      interest: contactForm.querySelector('input[name="interest"]:checked')?.value || ''
    };

    // Firebase cloud function or Formspree fallback
    try {
      // Intenta enviar por Firebase (si está configurado)
      if (typeof db !== 'undefined' && db) {
        await db.collection('messages').add({
          ...data,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        showToast('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        contactForm.reset();
      } else {
        throw new Error('No Firebase');
      }
    } catch (err) {
      // Fallback: muestra mensaje en consola y alerta
      console.log('Contact form data:', data);
      showToast('¡Mensaje recibido! (Modo demo — configura Firebase para envío real)', 'info');
      contactForm.reset();
    }

    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
  });

  /* ------ Toast Notification ------ */
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    existing?.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* ------ Smooth Scroll for anchor links ------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ------ Instagram Feed Embed ------ */
  const igFeed = document.getElementById('igFeed');
  if (igFeed) {
    // Placeholder para feed embebido de Instagram
    // Cuando tengas el token/ID, reemplaza esto con el embed real
    igFeed.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;border-radius:8px;overflow:hidden">
        ${[1,2,3,4,5,6].map(i => `
          <div style="aspect-ratio:1;background:rgba(255,255,255,0.08);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,0.3)">IG</div>
        `).join('')}
      </div>
      <p style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:8px">@proyecto8</p>
    `;
  }

});
