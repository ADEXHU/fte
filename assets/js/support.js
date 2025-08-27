let autoResponseSent = false; // Flag to track if the auto-response has been sent

// Open the chat window
function openChat() {
  document.querySelector('.chat-window').style.display = 'block';
  document.querySelector('.floating-chat-btn').style.display = 'none'; // Hide the floating button
}

// Send a message
function sendMessage() {
  const messageInput = document.getElementById('chat-input');
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    const messageContainer = document.getElementById('messages');
    
    // Create a new message element
    const messageElement = document.createElement('p');
    messageElement.textContent = `You: ${messageText}`;
    messageContainer.appendChild(messageElement);

    // Scroll to the bottom of the messages
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Clear the input field
    messageInput.value = "";

    // Send auto-response after the first message
    if (!autoResponseSent) {
      const autoMessage = document.createElement('p');
      autoMessage.textContent = `Support: Thank you for reaching out. How can I assist you today?`;
      messageContainer.appendChild(autoMessage);

      // Scroll to the bottom of the messages
      messageContainer.scrollTop = messageContainer.scrollHeight;

      autoResponseSent = true; // Set the flag to true to stop further auto-responses
    }
  }
}

// Handle Image Upload
function uploadImage() {
  const file = document.getElementById('image-upload').files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const messageContainer = document.getElementById('messages');
      const imageElement = document.createElement('img');
      imageElement.src = event.target.result;
      messageContainer.appendChild(imageElement);

      // Scroll to the bottom of the messages
      messageContainer.scrollTop = messageContainer.scrollHeight;
    };

    reader.readAsDataURL(file);
  }
}
