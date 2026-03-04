const questions = [
    {
        question: "Where did our story begin? ❤️",
        options: ["Random day", "Fate decided", "Best moment of my life ❤️"],
        answer: 2
    },
    {
        question: "Who is more dramatic? 😄",
        options: ["You", "Me", "Both of us ❤️"],
        answer: 2
    },
    {
        question: "What makes you special to me?",
        options: ["Your smile", "Your heart", "Everything about you ❤️"],
        answer: 2
    },
    {
        question: "What are you to me?",
        options: ["Girlfriend", "Best Friend", "My Future ❤️"],
        answer: 2
    }
];

let currentQuestion = 0;

const startBtn = document.getElementById("startBtn");
const quizDiv = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const memorySection = document.getElementById("memorySection");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bgMusic");

startBtn.onclick = () => {
    startBtn.classList.add("hidden");
    quizDiv.classList.remove("hidden");
    music.play();
    loadQuestion();
};

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            quizDiv.classList.add("hidden");
            memorySection.classList.remove("hidden");
            finalMessage.innerText = "Happy Birthday Ankita ❤️\nYou are my deepest feeling, my joy, my forever.\nI love you beyond words. 🎂💖";
        }
    } else {
        alert("Wrong answer 😜 Try again, Birthday Queen!");
    }
}