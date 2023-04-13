const blocks = document.querySelectorAll('.reveal'),
      isVisible = (el) => {
        const {top, bottom} = el.getBoundingClientRect()
        if (bottom < 0 || top > window.innerHeight) return false;
        return true;
      }

window.addEventListener('scroll', () => {
    for (block of blocks) {
        if (isVisible(block)) {
            block.className = "reveal reveal_active"
        } else {
            block.className = "reveal"
        }
    }
});