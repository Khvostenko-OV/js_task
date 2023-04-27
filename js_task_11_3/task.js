const progress = document.getElementById('progress'),
      file = document.getElementById('file'),
      upload = document.forms.form,
      fileName = upload.querySelector('.input__wrapper-desc')
      xhr = new XMLHttpRequest();

file.addEventListener('change', () => fileName.textContent = file.value);

upload.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.upload.onprogress = (e) => { progress.value = e.total / e.loaded };
    xhr.onloadend = () => {
        if (xhr.status >= 400) { 
            alert(`Upload error - ${xhr.status}`)
        } else {
            alert('Success!')
        }
    }

    xhr.open('POST', upload.action);
    xhr.send(file.files[0]);
})
