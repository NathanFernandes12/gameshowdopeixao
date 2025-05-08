let currentDifficulty = null;
let currentQuestion = 0;
let money = 0;
const usedLifelines = {
  audience: false,
  phone: false,
  skip: false
};

function initializeGame() {
  // Load saved settings
  const savedSettings = localStorage.getItem('gameSettings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    currentDifficulty = settings.difficulty;
  } else {
    currentDifficulty = 'easy';
  }

  // Set difficulty badge
  const difficultyBadge = document.getElementById('difficulty-badge');
  difficultyBadge.textContent = currentDifficulty === 'easy' ? 'Fácil' :
                               currentDifficulty === 'medium' ? 'Médio' : 'Difícil';
  difficultyBadge.className = `difficulty-badge ${currentDifficulty}`;

  setupLifelines();
  updateQuestion();
}

function updateQuestion() {
  const question = questions[currentDifficulty][currentQuestion];
  document.getElementById('question-number').textContent = currentQuestion + 1;
  document.getElementById('question').textContent = question.question;
  document.getElementById('question-value').textContent = question.value;
  document.getElementById('current-money').textContent = money;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.innerHTML = `<span style="font-weight: bold; margin-right: 8px;">${['A', 'B', 'C', 'D'][index]}.</span> ${option}`;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentDifficulty][currentQuestion];
  
  if (selectedIndex === question.correct) {
    money = question.value;
    
    if (currentQuestion === questions[currentDifficulty].length - 1) {
      showResult(true);
    } else {
      currentQuestion++;
      updateQuestion();
    }
  } else {
    showResult(false);
  }
}

function showResult(won) {
  const container = document.getElementById('game-container');
  container.innerHTML = `
    <div class="result-screen ${won ? 'won' : 'lost'}">
      <h1>${won ? 'Parabéns!' : 'Game Over!'}</h1>
      <p>${won ? `Você ganhou R$ ${money}!` : `Você perdeu! Prêmio: R$ ${money}`}</p>
      <button class="play-again" onclick="window.location.href='index.html'">
        ${won ? 'Jogar Novamente' : 'Tentar Novamente'}
      </button>
    </div>
  `;
}

function useLifeline(type) {
  if (usedLifelines[type]) return;
  
  if (type === 'skip' && currentQuestion < questions[currentDifficulty].length - 1) {
    currentQuestion++;
    updateQuestion();
  } else if (type === 'audience' || type === 'phone') {
    const correct = questions[currentDifficulty][currentQuestion].correct;
    alert(`Dica: A resposta correta pode ser a ${['A', 'B', 'C', 'D'][correct]}`);
  }
  
  usedLifelines[type] = true;
  document.getElementById(type).disabled = true;
}

function setupLifelines() {
  document.getElementById('audience').onclick = () => useLifeline('audience');
  document.getElementById('phone').onclick = () => useLifeline('phone');
  document.getElementById('skip').onclick = () => useLifeline('skip');
}

// Initialize the game when the page loads
window.addEventListener('load', initializeGame);