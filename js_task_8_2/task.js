const spans = Array.from(document.querySelectorAll('.rotator__case'));
let rotor = 0;
setInterval(() => {
    spans[rotor].className = 'rotator__case';
    rotor = (rotor + 1) % spans.length
    spans[rotor].className = 'rotator__case rotator__case_active';
}, 1000)
