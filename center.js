function filterFAQs() {
    let input = document.getElementById('faqSearch');
    let filter = input.value.toUpperCase();
    let faqList = document.getElementById('faqList');
    let faqItems = faqList.getElementsByClassName('faq-item');

    for (let i = 0; i < faqItems.length; i++) {
        let question = faqItems[i].getElementsByClassName('question')[0];
        if (question.innerHTML.toUpperCase().indexOf(filter) > -1) {
            faqItems[i].style.display = "";
        } else {
            faqItems[i].style.display = "none";
        }
    }
}

function sendMessage() {
    let input = document.getElementById('userInput');
    let message = input.value;
    if (message.trim() == '') return;
    displayMessage(message, 'user');

    let response = message.includes('안녕') ? '안녕하세요! 무엇을 도와드릴까요?' : '질문에 대한 답변을 준비중입니다.';
    setTimeout(() => displayMessage(response, 'bot'), 1000);

    input.value = '';
}

function displayMessage(text, sender) {
    let chatHistory = document.getElementById('chatHistory');
    let messageElement = document.createElement('div');
    messageElement.className = sender;
    messageElement.textContent = text;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight; 
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', () => {
    displayMessage('안녕하세요! 저는 SkyWay 챗봇입니다. 무엇을 도와드릴까요?', 'bot');
});
