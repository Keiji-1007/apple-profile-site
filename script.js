const lastUpdated = document.getElementById('last-updated');

if (lastUpdated) {
  const now = new Date();
  const formatted = now.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  lastUpdated.textContent = `更新日: ${formatted}`;
}
