const items = document.getElementById('items'),
      loader = document.getElementById('loader'),
      xhr = new XMLHttpRequest();

xhr.onload = () => {
    loader.className = 'loader';
    if (xhr.status == 200) {
        const resp = JSON.parse(xhr.responseText);
        for (let val of Object.values(resp.response.Valute)) {
            items.innerHTML += 
                `<div class="item">
                    <div class="item__code">${val.CharCode}</div>
                    <div class="item__value">${val.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>`;
        }
    } else { alert(`Error - ${xhr.status} ${xhr.statusText}`) }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
