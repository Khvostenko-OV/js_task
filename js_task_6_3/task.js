const slides = Array.from(document.querySelectorAll('.slider__item')),
      dots = Array.from(document.querySelectorAll('.slider__dot'));
let active = 0;

function show(num) {
    slides[active].className = 'slider__item';
    dots[active].className = 'slider__dot';
    active = num;
    slides[active].className = 'slider__item slider__item_active';
    dots[active].className = 'slider__dot slider__dot_active';
}

document.querySelector('.slider__arrow_prev').onclick = () => show((active + slides.length - 1) % slides.length) 
document.querySelector('.slider__arrow_next').onclick = () => show((active + 1) % slides.length)
dots.forEach((dot, index) => dot.onclick = () => show(index))

