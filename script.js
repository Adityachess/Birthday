setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
}, 3000);

const correctPassword = "ankita";

function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase();
    const wrongText = document.getElementById("wrongPassword");

    if (input === correctPassword) {
        document.getElementById("passwordSection").classList.add("hidden");
        document.getElementById("startBtn").classList.remove("hidden");
    } else {
        wrongText.innerHTML = "😢 Wrong password… Only Panda Queen allowed 🐼👑";
    }
}

const questions = [
    {
        question: "When did our story begin? ❤️",
        options: ["22 July 2024", "23 July 2024 ❤️", "24 July 2024", "25 July 2024"],
        answer: 1
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

let wrongMessage = document.createElement("div");
wrongMessage.className = "wrong";

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
    wrongMessage.innerText = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });

    optionsEl.appendChild(wrongMessage);
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    } else {
        wrongMessage.innerText = "😢 Aww nooo Panda Queen 🐼👑 Try again cutie 💕";
    }
}

function finishQuiz() {
    quizDiv.classList.add("hidden");
    memorySection.classList.remove("hidden");

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    typeMessage();
}

function typeMessage() {
    const message =
        "Happiest Birthday Ankita 👑💖✨\n\n" +
        "23 July 2024 — the day my world became pinker 🌸\n\n" +
        "You are my Panda Queen 🐼👑\n" +
        "My soft place.\n" +
        "My happy chaos.\n" +
        "My forever girl.\n\n" +
        "Stay cute.\n" +
        "Stay magical.\n" +
        "Stay mine. 💕💅✨";

    let i = 0;
    function typing() {
        if (i < message.length) {
            finalMessage.innerHTML += message.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();
}

/* Sparkle Cursor */
document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = "12px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
});