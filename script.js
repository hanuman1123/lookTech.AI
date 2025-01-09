// Get elements for chatbot icon, chatbox, open button, and close button
const openChatButton = document.getElementById("openChatButton");
const chatbox = document.getElementById("chatbox");
const closeChatbox = document.getElementById("closeChatbox");
const messagesDiv = document.getElementById("messages");

// Open the chatbox when the "Chat with Us!" button is clicked
openChatButton.onclick = function() {
    chatbox.style.display = "flex";

    // Display the initial message from the bot
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerText = "How can I help you today?";
    messagesDiv.appendChild(botMessage);

    // Scroll to the bottom of the messages
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Close the chatbox when the close button is clicked
closeChatbox.onclick = function() {
    chatbox.style.display = "none";
}

// Handle sending a message (basic setup)
const sendMessageButton = document.getElementById("sendMessage");
const userMessageInput = document.getElementById("userMessage");

sendMessageButton.onclick = function() {
    const userMessage = userMessageInput.value.trim();
    if (userMessage) {
        // Add user message to chatbox
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("user-message");
        userMessageElement.innerText = userMessage;
        messagesDiv.appendChild(userMessageElement);

        // Scroll to the bottom of the messages
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear the input field
        userMessageInput.value = "";

        // Optionally, you can add a bot response after a delay
        setTimeout(function() {
            const botReply = document.createElement("div");
            botReply.classList.add("bot-message");
            botReply.innerText = "Thank you for your message! How can I assist you further?";
            messagesDiv.appendChild(botReply);

            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
    }
}

// Get the modal and the button that opens it
const modal = document.getElementById("signupModal");
const btn = document.querySelector(".cta-button");  // Sign Up / Login button
const closeBtn = document.getElementById("closeModal");

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the user clicks the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
