// Sample transaction data - normally fetched from server/database
const transactions = [
    { date: '2025-06-01', description: 'Salary Deposit by Sobur', type: 'deposit', amount: 3000, balance: 5000 },
    { date: '2025-05-02', description: 'Electricity Bill by Grace', type: 'payment', amount: -150, balance: 4850 },
    { date: '2025-04-04', description: 'Coffee shop', type: 'payment', amount: -5.5, balance: 4844.5 },
    { date: '2025-03-10', description: 'Transfer to Bolu', type: 'transfer', amount: -500, balance: 4344.5 },
    { date: '2025-03-05', description: 'Received from Michael', type: 'deposit', amount: 2000, balance: 4544.5 },
    { date: '2025-01-07', description: 'Groceries', type: 'payment', amount: -120.75, balance: 4423.75 },
    { date: '2024-12-08', description: 'ATM Withdrawal', type: 'withdrawal', amount: -100, balance: 4323.75 },
    { date: '2024-10-24', description: 'Something sha', type: 'payment', amount: -300, balance: 4454.11}
    // Add more for realism
];
  
  // Get DOM rchInput = document.getElementById('searchInput');
  const typeFilter = document.getElementById('typeFilter');
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  
  // Render function
  function renderTransactions(list) {
    tbody.innerHTML = '';
    if (list.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No transactions found.</td></tr>';
      return;
    }
    list.forEach(tx => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${tx.date}</td>
        <td>${tx.description}</td>
        <td>${capitalize(tx.type)}</td>
        <td style="color: ${tx.amount < 0 ? '#d9534f' : '#28a745'};">${formatAmount(tx.amount)}</td>
        <td>${formatAmount(tx.balance)}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function formatAmount(num) {
    return (num < 0 ? '-$' : '$') + Math.abs(num).toFixed(2);
  }
  
  // Filter logic
  function filterTransactions() {
    let filtered = transactions;
  
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(tx =>
        tx.description.toLowerCase().includes(searchTerm) ||
        tx.type.toLowerCase().includes(searchTerm)
      );
    }
  
    const type = typeFilter.value;
    if (type !== 'all') {
      filtered = filtered.filter(tx => tx.type === type);
    }
  
    const startDate = startDateInput.value;
    if (startDate) {
      filtered = filtered.filter(tx => tx.date >= startDate);
    }
  
    const endDate = endDateInput.value;
    if (endDate) {
      filtered = filtered.filter(tx => tx.date <= endDate);
    }
  
    renderTransactions(filtered);
  }
  
  // Attach event listeners
  searchInput.addEventListener('input', filterTransactions);
  typeFilter.addEventListener('change', filterTransactions);
  startDateInput.addEventListener('change', filterTransactions);
  endDateInput.addEventListener('change', filterTransactions);
  
  // Initial render
  renderTransactions(transactions);