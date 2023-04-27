const tips = Array.from(document.querySelectorAll('.has-tooltip'));

tips.forEach(tip => { 
    tip.insertAdjacentHTML('afterend', `<div class="tooltip">${tip.title}</div>`);
});

const popups = Array.from(document.querySelectorAll('div.tooltip'));

let currenTip = 0;
document.addEventListener('scroll', () => { popups[currenTip].className = 'tooltip' });

tips.forEach( (tip, index) => { 
    tip.onclick = () => {
        if (currenTip != index || popups[currenTip].className == 'tooltip') {
            popups[currenTip].className = 'tooltip';
            currenTip = index;
            const rect = tip.getBoundingClientRect();
            if (rect.bottom < window.innerHeight - 28) {
                popups[currenTip].style.top = `${rect.bottom}px`; 
            } else {
                popups[currenTip].style.top = `${rect.top - 28}px`;
            }
            popups[currenTip].style.left = `${rect.left}px`;
            popups[currenTip].className = 'tooltip tooltip_active';
        } else if (currenTip == index) {
            popups[currenTip].className = 'tooltip';
        }
        return false;
    }
})