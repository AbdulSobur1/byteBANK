document.querySelector('.theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? '' : 'dark');
  document.querySelector('.theme-toggle').textContent = dark ? '🌙' : '☀️';
});

async function loadDashboard() {
  try {
    const userRes = await fetch('https://bytebank-be.onrender.com/api/user/me', {
      credentials: 'include'
    });
    const user = await userRes.json();
    document.getElementById('user-name').textContent = user.name || user.email || "User";
    if (user.balance) {
      document.getElementById('user-balance').textContent = '₦' + user.balance.toLocaleString();
    }

    const txRes = await fetch('https://bytebank-be.onrender.com/api/tx', {
      credentials: 'include'
    });
    const txs = await txRes.json();
    const list = document.getElementById('tx-list');
    list.innerHTML = txs.length === 0
      ? '<li>No transactions found.</li>'
      : txs.map(t => `<li><span>${t.date}</span><span>${t.desc}</span><span>${t.amount}</span></li>`).join("");
  } catch (e) {
    document.getElementById('tx-list').innerHTML = '<li>Error loading data.</li>';
  }
}
loadDashboard();