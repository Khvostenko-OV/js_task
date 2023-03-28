const subMenus = Array.from(document.querySelectorAll('.menu_sub')),
      closeAll = () => subMenus.forEach(menu => menu.className = 'menu menu_sub');

for (const item of subMenus) {
    item.closest('.menu__item').getElementsByClassName('menu__link')[0].onclick = () => {
        if (item.className.includes('menu_active')) { 
            item.className = 'menu menu_sub';
        } else {
            closeAll();    
            item.className += ' menu_active';
        }
        return false;
    }
}
