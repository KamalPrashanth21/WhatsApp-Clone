document.addEventListener("DOMContentLoaded", function () {
    // Sending msgs
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const chatMessages = document.getElementById("chatMessages");

    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value;
        if (messageText === "") return;

        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", "sent");
        messageElement.innerText = messageText;

        chatMessages.appendChild(messageElement);
        messageInput.value="";    
    }
    //Diff chat items
    let chatItems = document.querySelectorAll(".list-group-item");


    chatItems.forEach(item => {
        item.addEventListener("click", function() {

        let chatName = this.querySelector("span").innerText;   
        let chatPic = this.querySelector("img").src;            

        document.querySelector(".custom-left-section .chat-title").innerHTML = `${chatName} <br><small class="status">online</small>`;
        document.querySelector(".custom-left-section img").src = chatPic;  
        chatMessages.innerHTML = '';
    });
});


});
