const quizData = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: [
        "Java",
        "CSS",
        "Python",
        "C++"
    ],
    answer: "CSS"
},
{
    question: "Which language is used for web interactivity?",
    options: [
        "JavaScript",
        "C",
        "Java",
        "SQL"
    ],
    answer: "JavaScript"
},
{
    question: "Which company developed Java?",
    options: [
        "Google",
        "Microsoft",
        "Sun Microsystems",
        "Apple"
    ],
    answer: "Sun Microsystems"
},
{
    question: "Which tag creates a hyperlink in HTML?",
    options: [
        "<a>",
        "<img>",
        "<div>",
        "<p>"
    ],
    answer: "<a>"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

document.getElementById("total").innerText =
quizData.length;

function loadQuestion() {

    const currentQuiz =
    quizData[currentQuestion];

    questionEl.innerText =
    currentQuiz.question;

    document.getElementById("current").innerText =
    currentQuestion + 1;

    optionsEl.innerHTML = "";

    currentQuiz.options.forEach(option => {

        const button =
        document.createElement("button");

        button.innerText = option;

        button.classList.add("option");

        button.onclick = () =>
        selectAnswer(button, option);

        optionsEl.appendChild(button);

    });
}

function selectAnswer(button, selectedAnswer) {

    const correctAnswer =
    quizData[currentQuestion].answer;

    const buttons =
    document.querySelectorAll(".option");

    buttons.forEach(btn => {

        btn.disabled = true;

        if(btn.innerText === correctAnswer){
            btn.style.backgroundColor = "green";
        }
        else{
            btn.style.backgroundColor = "red";
        }

    });

    if(selectedAnswer === correctAnswer){
        score++;
    }
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    } else {

        document
        .getElementById("quiz-container")
        .classList.add("hidden");

        document
        .getElementById("result")
        .classList.remove("hidden");

        document
        .getElementById("score")
        .innerText =
        `${score} / ${quizData.length}`;
    }
});

function restartQuiz(){

    currentQuestion = 0;
    score = 0;

    document
    .getElementById("result")
    .classList.add("hidden");

    document
    .getElementById("quiz-container")
    .classList.remove("hidden");

    loadQuestion();
}

loadQuestion();
