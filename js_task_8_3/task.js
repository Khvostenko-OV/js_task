const sizes = Array.from(document.querySelectorAll('.font-size')),
      classes = ['font-size font-size_small', 'font-size', 'font-size font-size_big'],
      book = document.getElementById('book');
let currSize = 1;

sizes.forEach((size, index) => {
    size.onclick = () => {
        sizes[currSize].className = classes[currSize];
        currSize = index;
        size.className += ' font-size_active';
        attr = size.getAttribute('data-size');
        if (attr == 'big') {
            book.className = 'book book_fs-big'
        } else if (attr == 'small') {
            book.className = 'book book_fs-small'
        } else {
            book.className = 'book'
        }
        return false
    }
})