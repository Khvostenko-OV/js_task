const interests = document.querySelector('.interests_main');

for (let ul of interests.querySelectorAll('ul.interests')) {
    let parentLi = ul.closest('li');
    if (parentLi) {
        let mainCheckbox = parentLi.querySelector('.interest__check');
        mainCheckbox.addEventListener('change', () => {
            let myUl = mainCheckbox.closest('li').querySelector('ul');
            for (let checkbox of myUl.querySelectorAll('.interest__check')) {
                checkbox.checked = mainCheckbox.checked
            }
        })
    }
}