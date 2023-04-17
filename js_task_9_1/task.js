const chatButton = document.querySelector('.chat-widget__side'),
      chatWidget = document.querySelector('.chat-widget'),
      chatInput = document.getElementById('chat-widget__input'),
      messages = document.querySelector( '.chat-widget__messages' ),
      botMessages  = ['Пока', 'Давай, до свиданья', 'Чё?', 'А ничо', 'Бла-бла-бла', 'Красаучег!!!'];

chatButton.addEventListener('click', () => {chatWidget.className = 'chat-widget chat-widget_active'});
chatInput.addEventListener('change', () => {
    if (chatInput.value) {
        let date = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date.getDate()}:${date.getMonth() + 1}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
        `;
        chatInput.value = '';
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${date.getDate()}:${date.getMonth() + 1}</div>
                <div class="message__text">${botMessages[Math.floor(Math.random() * botMessages.length)]}</div>
            </div>
        `;
        messages.scrollIntoView(false);
    }
})
