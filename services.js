document.addEventListener('DOMContentLoaded', () => {
    // Modal open/close logic
    const openModalBtn = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal');
  
    if (openModalBtn && modal && closeModalBtn) {
      openModalBtn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.querySelector('.modal-content').focus();
      });
  
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        openModalBtn.focus();
      });
  
      // Close modal on clicking outside modal-content
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
          openModalBtn.focus();
        }
      });
  
      // Close modal on pressing Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
          modal.classList.remove('show');
          openModalBtn.focus();
        }
      });
    }
  
    // Toggle service details
    const toggleButtons = document.querySelectorAll('.toggle-details');
  
    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        if (details) {
          const isShown = details.classList.toggle('show');
          btn.textContent = isShown ? 'Hide Details ▲' : 'Show Details ▼';
        }
      });
    });
  });