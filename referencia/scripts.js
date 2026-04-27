// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.btn-login'); // el botón "INICIA SESIÓN"
  const overlay = document.querySelector('.login-overlay');
  const closeBtn = document.querySelector('.login-close');

  const open = () => document.body.classList.add('login-open');
  const close = () => document.body.classList.remove('login-open');

  openBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  });

  closeBtn?.addEventListener('click', close);

  overlay?.addEventListener('click', (e) => {
    const sheet = document.querySelector('.login-sheet');
    if (sheet && !sheet.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
});
