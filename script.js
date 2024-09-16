const questions = [
    {
        question: "O corinthians vai ser rebaixado?",
        answers: ["Não!", "Claro que não!", "Obviamente que não!", "Sim, sou burro"],
        correctAnswer: [0,1,2]
    },
    {
        question: "Qual foi o jogador estrangeiro que fez mais gol atuando pelo corinthians?",
        answers: ["Guerrero", "Tévez", "Romero", "Herrera"],
        correctAnswer: 2
    },
    {
        question: "Qual desses tem mais gol que o arrascaeta no Brasileirao",
        answers: ["Yuri Alberto","Rony", "Endrick","Messi"
        ],
        correctAnswer: 0
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Voçe acertou ${score} questoes de ${questions.length}`;
}

window.onload = loadQuestions;