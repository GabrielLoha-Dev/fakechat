document.getElementById("sendMessage").addEventListener("click", function () {
  const contactName =
    document.getElementById("contactName").value.trim() || "Contato";
  const messageInput = document.getElementById("messageInput").value.trim();
  const messageType = document.getElementById("messageType").value;
  const messageTime = document.getElementById("messageTime").value;
  const chatMessages = document.getElementById("chatMessages");

  // Atualiza o nome do contato no cabeçalho
  document.getElementById("contactNameHeader").textContent = contactName;

  if (messageInput === "") {
    alert("Por favor, digite uma mensagem.");
    return;
  }

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", messageType);

  const messageStatus = document.getElementById("messageStatus").value;
  let statusMsg = "";
  if (messageStatus == "send") {
    statusMsg = "bi bi-check-all";
  } else if (messageStatus == "sendvist") {
    statusMsg = "bi bi-check-all list";
  } else {
    statusMsg = "bi bi-check";
  }

  messageDiv.innerHTML = `
    <div class="message-content">
      <div class="text">${messageInput}</div>
      <div class="timecontainer">
        <div class="time">${messageTime}</div>
        <i class="${statusMsg}"></i>
      </div>
    </div>
  `;

  chatMessages.appendChild(messageDiv);
  document.getElementById("messageInput").value = "";
  document.getElementById("messageTime").value = "12:00"; // Reseta o horário para o padrão
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
