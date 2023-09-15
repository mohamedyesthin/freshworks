// app.js
let client;

async function init() {
  client = await app.initialized();
}

init();

document.addEventListener("DOMContentLoaded", () => {
  const sendMessageButton = document.querySelector("fw-button");
  const messageInput = document.querySelector("fw-input");
  const conversationContainer = document.querySelector(".fw-flex-column");

  sendMessageButton.addEventListener("click", async () => {
    const userMessage = messageInput.value;
    appendMessage(conversationContainer, userMessage, "user");

    // Process the user message and generate a response
    const responseMessage = await processUserMessage(userMessage);
    appendMessage(conversationContainer, responseMessage, "response");
  });
});

function appendMessage(container, message, messageType) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(messageType);
  messageElement.textContent = message;
  container.appendChild(messageElement);
}

async function processUserMessage(message) {
  console.log(message)
  // Add your logic to process the user message and generate a response
  // You can use FDK request method if needed

  // Example response
  return "This is an example response";
}



