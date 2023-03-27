const open = win => win.className += ' modal_active',
      close = win => win.className = 'modal', 
      mainWin = document.getElementById('modal_main'),
      successWin = document.getElementById('modal_success'),
      closeBtnList = Array.from(document.querySelectorAll('.modal__close_times'));

document.querySelector('.show-success').onclick = () => { close(mainWin); open(successWin); }
document.querySelector('.btn_success').onclick = () => { close(successWin); open(mainWin); }
closeBtnList.forEach((btn) => { btn.onclick = () => close(btn.closest('.modal')) });
open(mainWin);
