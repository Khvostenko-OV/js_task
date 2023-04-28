const progress = document.getElementById('progress'),
      file = document.getElementById('file'),
      upload = document.forms.form,
      fileName = upload.querySelector('.input__wrapper-desc')
      xhr = new XMLHttpRequest();

file.addEventListener('change', () => { fileName.textContent = file.value; progress.value = 0 });

upload.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.upload.onprogress = (e) => { progress.value = e.total / e.loaded }
    xhr.onloadend = () => {
        if (xhr.status == 201) { 
            alert(`Success!`)
        } else {
            alert(`Upload error - ${xhr.status}`)
        }
    }

// Это не работает. Статус 0
// Дает ошибку Access to XMLHttpRequest at ‘file:///C:/form/’ from origin ‘null’ has been blocked by CORS policy
//    const formData = new FormData(upload)
//    xhr.open('POST', '/form/');
//    xhr.send(formData);

// Это работает нормально. Статус 201
    xhr.open('POST', upload.action);
    xhr.send(file.files[0]);
})
