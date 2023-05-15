const input = document.getElementById('editor');
const clean = document.getElementById('clean');
input.value = localStorage.getItem('input');
input.addEventListener('keydown', () => localStorage.setItem('input', input.value));
clean.onclick = () => { input.value = ''; localStorage.removeItem('input'); }