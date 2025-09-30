const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxTebp3UwDpDpntdtlGUwKF_EwpRcujm1A-MKweTyfIjetOEqrueMzvl7n41FQAc5v/exec";

document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initPortfolio();
  initForms();
});

function setFooterYear() {
  const year = new Date().getFullYear();
  ['year', 'year2', 'year3', 'year4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });
}

function initPortfolio() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const items = Array.from(gallery.querySelectorAll('.video-card'));
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('modalPlayer');
  const closeBtn = document.querySelector('.modal-close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const videoId = item.dataset.video;
      openModalWithVideo(videoId);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function openModalWithVideo(videoId) {
    if (!videoId) return;
    modalPlayer.innerHTML = `
      <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>`;
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modalPlayer.innerHTML = '';
  }
}

function initForms() {
  const emailForm = document.getElementById('emailForm');
  const contactForm = document.getElementById('contactForm');

  if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = emailForm.email.value.trim();
      const msgEl = document.getElementById('emailFormMsg');
      if (!validateEmail(email)) {
        msgEl.textContent = 'Please enter a valid email address.';
        return;
      }
      msgEl.textContent = 'Saving...';
      try {
        await postToGoogle({ formType: 'email', email });
        msgEl.textContent = 'Thanks — you are subscribed!';
        emailForm.reset();
      } catch (err) {
        console.error(err);
        msgEl.textContent = 'Oops — subscription failed. Please try again.';
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const payload = { formType: 'contact' };
      formData.forEach((v, k) => payload[k] = v);
      const msgEl = document.getElementById('contactFormMsg');
      msgEl.textContent = 'Sending...';
      try {
        await postToGoogle(payload);
        msgEl.textContent = 'Message sent — we’ll get back to you soon.';
        contactForm.reset();
      } catch (err) {
        console.error(err);
        msgEl.textContent = 'Submission failed. Please try again later.';
      }
    });
  }
}

async function postToGoogle(payload) {
  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error('Network error. Status: ' + res.status);
  }

  const data = await res.json();
  if (data.status !== 'success') {
    throw new Error('Server responded with error: ' + (data.message || 'Unknown error'));
  }

  return data;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
