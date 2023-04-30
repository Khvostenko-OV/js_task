const progress = document.getElementById('progress'),
      file = document.getElementById('file'),
      upload = document.forms.form,
      fileName = upload.querySelector('.input__wrapper-desc')
      xhr = new XMLHttpRequest();

file.addEventListener('change', () => { fileName.textContent = file.value; progress.value = 0 });

upload.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.upload.onprogress = (e) => { progress.value = e.total / e.loaded; console.log(e.loaded) }
    xhr.onloadend = () => {
        if (xhr.status == 201) { 
            alert(`Success!`)
        } else {
            alert(`Upload error - ${xhr.status}`)
        }
    }

    xhr.open('POST', upload.action);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(new FormData(upload));
})
