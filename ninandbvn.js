function showField(type) {
  // Hide both fields first
  document.getElementById('nin-field').style.display = 'none';
  document.getElementById('bvn-field').style.display = 'none';

  // Show only the selected field
  if (type === 'nin') {
    document.getElementById('nin-field').style.display = 'block';
  } else if (type === 'bvn') {
    document.getElementById('bvn-field').style.display = 'block';
  }
}