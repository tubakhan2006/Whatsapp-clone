const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBox = document.querySelector('.chat-box');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.innerHTML = `<p>${messageText}</p><span class="time">${getCurrentTime()}</span>`;

    // Append message to chat box
    chatBox.appendChild(messageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    messageInput.value = '';
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours = 0, set to 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
}
