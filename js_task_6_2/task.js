const subMenus = Array.from(document.querySelectorAll('.menu_sub')),
      closeAll = () => subMenus.forEach(menu => menu.className = 'menu menu_sub'),
      open = win => win.className += ' menu_active';

for (const item of subMenus) {
    item.closest('.menu__item').getElementsByClassName('menu__link')[0].onclick = () => {
        closeAll();    
        open(item);
        return false;
    }
}
