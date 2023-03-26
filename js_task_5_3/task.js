const dead = document.getElementById('dead'),
      lost = document.getElementById('lost');
function finish(text) {
    alert(text);
    lost.textContent = 0;
    dead.textContent = 0;
}

for (let i=1; i<10; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = () => {
        if (hole.className == 'hole'){
            lost.textContent = Number(lost.textContent) + 1
            if (Number(lost.textContent) == 5) {
                finish('Вы проиграли :(');
            }
        } else {
            dead.textContent = Number(dead.textContent) + 1
            if (Number(dead.textContent) == 10) {
                finish('Поздравляю! Вы выиграли!');
            }
        }
    }
}
