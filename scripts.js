const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

function receiveMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message self";
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate receiving a response
    setTimeout(() => {
      receiveMessage("This is a simulated response.");
    }, 1000);
  }
});

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});
