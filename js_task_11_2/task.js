const poll = document.querySelector('div.poll'),
      xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const resp = JSON.parse(xhr.responseText).data;

        poll.innerHTML += 
            `<div class="poll__title" id="poll__title">
                ${resp.title}
            </div>`;
        resp.answers.forEach(item => {
            poll.innerHTML += `<button class="poll__answer">${item}</button> `;
        })
        for (button of poll.querySelectorAll('.poll__answer')) {
            button.onclick = () => { alert('Спасибо! Ваш голос учтён!') }
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();