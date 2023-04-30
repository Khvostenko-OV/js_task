const signin = document.forms.signin__form;
const userId = document.getElementById('user_id');
function welcome(id) {
    if (id) {
        signin.className = 'signin';
        userId.textContent = id;
        document.getElementById('welcome').className = 'signin signin_active';
    }
}

signin.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', signin.action, false);
    xhr.send(new FormData(signin));
    for (item of signin.querySelectorAll('input')) { item.value = '' }
    if (xhr.status == 201) {
        resp = JSON.parse(xhr.responseText);
        if (resp.success) {
            welcome(resp.user_id);
            localStorage.setItem('signin', resp.user_id);
        } else {
            alert('Неверный логин/пароль');
        }
    } else { 
        alert(`Ошибка - ${xhr.status} ` + xhr.responseText);
    }
})

welcome(localStorage.getItem('signin'));
