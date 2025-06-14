// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDark.matches)) {
  document.body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Services page interactivity
const detailToggles = document.querySelectorAll('.service-card');

detailToggles.forEach(card => {
  const details = card.querySelector('.service-details');
  const applyBtn = card.querySelector('.apply-btn');
  if (details) {
    card.addEventListener('click', () => {
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
  }
  if (applyBtn) {
    applyBtn.addEventListener('click', e => {
      e.stopPropagation();
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content p');
      modalContent.textContent = `You are applying for: ${card.querySelector('h3').innerText}`;
      modal.style.display = 'flex';
    });
  }
});

// Modal close logic
const modal = document.querySelector('.modal');
if (modal) {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
      modal.style.display = 'none';
    }
  });
}

// Optional: Filter buttons logic
const filterButtons = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    document.querySelectorAll('.service-card').forEach(card => {
      const match = card.getAttribute('data-category') === category || category === 'all';
      card.style.display = match ? 'block' : 'none';
    });
  });
});
