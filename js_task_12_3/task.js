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
    xhr.open('POST', signin.action);
    xhr.responseType = 'json';
    xhr.send(new FormData(signin));
    signin.reset()

    xhr.onload = () => {
        if (xhr.status == 201) {
            if (xhr.response.success) {
                localStorage.setItem('signin', xhr.response.user_id);
                welcome(xhr.response.user_id);
            } else {
                    alert('Неверный логин/пароль');
            }
        } else {
            alert(`Ошибка - ${xhr.status} ${xhr.response.error} - ${xhr.response.message}`);
        }
    }
})

welcome(localStorage.getItem('signin'));
