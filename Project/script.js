function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'flex' : 'none';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    if (input.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = "👨‍💻: " + input.value;
        newMessage.style.padding = '5px';
        messages.appendChild(newMessage);
        input.value = '';
    }
}