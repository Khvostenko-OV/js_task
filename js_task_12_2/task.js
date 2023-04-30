const modal = document.getElementById('subscribe-modal');
const close = modal.querySelector('.modal__close_times');

close.onclick = () => {
    modal.className = 'modal';
    document.cookie = 'modalClose=true';
}

const cookie = document.cookie.split('; ');
if (!cookie.find(item => item.startsWith('modalClose='))) { modal.className = 'modal modal_active'; }