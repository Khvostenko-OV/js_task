for (const tabMenu of document.querySelectorAll('.tabs')) {
    let tabs = Array.from(tabMenu.querySelectorAll('.tab')),
        contents = Array.from(tabMenu.querySelectorAll('.tab__content'));

    tabs.forEach((tab, index) => {
        tab.onclick = () => {
            tabs.forEach(t => t.className = 'tab');
            contents.forEach(c => c.className = 'tab__content');
            tab.className += ' tab_active';
            contents[index].className += ' tab__content_active';
        }
    })
}