// contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  const submitBtn = form.querySelector('button[type="submit"]');
  const messageBox = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  // Character count live update
  messageBox.addEventListener('input', () => {
    charCount.textContent = messageBox.value.length;
  });

  // Enable submit if all required fields are filled
  const checkFormValidity = () => {
    const allFilled = Array.from(inputs).every((field) => field.value.trim() !== '');
    submitBtn.disabled = !allFilled;
  };

  form.addEventListener('input', checkFormValidity);
  checkFormValidity();

  // Show toast and reset form on submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);

    form.reset();
    charCount.textContent = '0';
    submitBtn.disabled = true;
  });
});
