for (const dropdown of document.querySelectorAll('.dropdown')) {
    let dropdownValue = dropdown.querySelector('.dropdown__value'),
        dropdownList = dropdown.querySelector('.dropdown__list');

    dropdownValue.onclick = () => dropdownList.className = 'dropdown__list dropdown__list_active';
    for (const item of dropdownList.querySelectorAll('.dropdown__link')) {
        item.onclick = () => {
            dropdownValue.textContent = item.textContent;
            dropdownList.className = 'dropdown__list'
            return false;
        }
    }
}