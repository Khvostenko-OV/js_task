const count = document.getElementById('clicker__counter'),
      cookie = document.getElementById('cookie');
cookie.onclick = () => {
    count.textContent = Number(count.textContent) + 1;
    cookie.width = Number(cookie.width) + ((Number(count.textContent) % 2) * 2 - 1) * 50;
}