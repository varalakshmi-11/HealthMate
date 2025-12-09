const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot reply
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    const userText = message.toLowerCase();

    if (userText.includes("cold")) {
      botMsg.textContent =
        "❄️ *Common Cold*\n" +
        "Awareness: A viral infection causing sneezing, runny nose, sore throat.\n" +
        "Prevention: Wash hands often, avoid close contact with sick people.\n" +
        "Medical Help: Usually self-limiting. See a doctor if symptoms last more than 10 days.";
    } 
    else if (userText.includes("fever")) {
      botMsg.textContent =
        "🌡️ *Fever*\n" +
        "Awareness: A temporary rise in body temperature, often due to infection.\n" +
        "Prevention: Stay hydrated, maintain hygiene, get vaccinated.\n" +
        "Medical Help: Seek medical care if fever >102°F, or persists for 3+ days.";
    } 
    else if (userText.includes("malaria")) {
      botMsg.textContent =
        "🦟 *Malaria*\n" +
        "Awareness: A mosquito-borne disease causing chills, fever, sweating.\n" +
        "Prevention: Use mosquito nets, repellents, avoid stagnant water.\n" +
        "Medical Help: Immediate consultation and blood test required. Antimalarial drugs prescribed by doctor.";
    } 
    else if (userText.includes("covid")) {
      botMsg.textContent =
        "😷 *COVID-19*\n" +
        "Awareness: A viral disease affecting the respiratory system.\n" +
        "Prevention: Wear masks, sanitize hands, maintain social distancing.\n" +
        "Medical Help: Isolate if positive. Seek hospital care if difficulty breathing.";
    } 
    else if (userText.includes("diabetes")) {
      botMsg.textContent =
        "🍬 *Diabetes*\n" +
        "Awareness: A chronic condition where blood sugar levels remain high.\n" +
        "Prevention: Healthy diet, regular exercise, avoid excessive sugar intake.\n" +
        "Medical Help: Requires regular monitoring, insulin or oral medicines as prescribed.";
    } 
    else {
      botMsg.textContent = 
        "🤔 I don’t have an exact answer for that.\n" +
        "But I can share awareness on *Cold, Fever, Malaria, COVID-19, or Diabetes*.\n" +
        "Please ask me about these.";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  userInput.value = '';
}
