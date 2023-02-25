const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Função para enviar solicitações HTTP
async function sendMessage(message) {
	const response = await fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer yourkey'
		},
		body: JSON.stringify({
            model: "text-davinci-003",
			prompt: message,
			max_tokens: 4000,
			n: 1,
            temperature: 0,
			stop: ['\n']
		})
	});
	const data = await response.json();
	return data.choices[0].text.trim();
}

// Função para adicionar mensagem na tela
function addMessage(text, sender) {
	const messageDiv = document.createElement('div');
	messageDiv.classList.add('message');
	messageDiv.classList.add(sender);
	messageDiv.innerHTML = `<p>${text}</p>`;
	chatBody.appendChild(messageDiv);
	chatBody.scrollTop = chatBody.scrollHeight;
}

// Evento de clique no botão de enviar
sendBtn.addEventListener('click', async () => {
	const userMessage = userInput.value;
	addMessage(userMessage, 'user');
	userInput.value = '';

	const botMessage = await sendMessage(userMessage);
	addMessage(botMessage, 'bot');
});