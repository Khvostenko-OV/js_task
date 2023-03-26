const count = document.getElementById('timer');
let timerId = setInterval( () => 
    { 
        if (Number(count.textContent)) {
            count.textContent -= 1;
        } else {
            clearInterval(timerId);
            const down = document.getElementById('download');
            down.href = 'data.dat';
            alert(`Вы победили в конкурсе! Скачать файл ${down.href} ?`);
            down.click();
        }
    }, 1000);