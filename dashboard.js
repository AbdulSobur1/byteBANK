document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more');
    const transactionsTableBody = document.querySelector('.recent-transactions tbody');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
  
    // ----- Dark Mode Toggle -----
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      themeToggleBtn.textContent = '☀️';
    } else {
      themeToggleBtn.textContent = '🌙';
    }
  
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  
    // ----- Load More Transactions -----
    const moreTransactions = [
      { date: '2025-05-18', description: 'Grocery Store', amount: -75.32, balance: 2116.35 },
      { date: '2025-05-15', description: 'Gym Membership', amount: -45.00, balance: 2191.67 },
      { date: '2025-05-10', description: 'Tax Refund', amount: +500.00, balance: 2236.67 },
    ];
  
    function formatCurrency(value) {
      return (value < 0 ? '-$' : '+$') + Math.abs(value).toFixed(2);
    }
  
    function addTransactions(transactions) {
      transactions.forEach(({ date, description, amount, balance }) => {
        const tr = document.createElement('tr');
  
        const dateTd = document.createElement('td');
        dateTd.textContent = date;
  
        const descTd = document.createElement('td');
        descTd.textContent = description;
  
        const amountTd = document.createElement('td');
        amountTd.textContent = formatCurrency(amount);
        amountTd.classList.add(amount < 0 ? 'debit' : 'credit');
  
        const balanceTd = document.createElement('td');
        balanceTd.textContent = `$${balance.toFixed(2)}`;
  
        tr.append(dateTd, descTd, amountTd, balanceTd);
        transactionsTableBody.appendChild(tr);
      });
    }
  
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        addTransactions(moreTransactions);
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'No more transactions';
      });
    }
  
    // ----- Quick Actions -----
    const transferBtn = document.getElementById('transfer-btn');
    const payBillsBtn = document.getElementById('pay-bills-btn');
    const downloadStatementBtn = document.getElementById('download-statement-btn');
    const contactSupportBtn = document.getElementById('contact-support-btn');
  
    transferBtn?.addEventListener('click', () => {
      alert('Transfer Money feature coming soon!');
    });
  
    payBillsBtn?.addEventListener('click', () => {
      alert('Pay Bills feature coming soon!');
    });
  
    downloadStatementBtn?.addEventListener('click', () => {
      alert('Downloading statement...');
      // Here you could trigger file download logic
    });
  
    contactSupportBtn?.addEventListener('click', () => {
      alert('Redirecting to Support page...');
      window.location.href = 'support.html'; // adjust as needed
    });
  });