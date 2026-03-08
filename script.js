setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    createFloatingHearts(); // Add floating hearts
}, 3000);

// Create floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartEmojis = ['💖', '💕', '💗', '💓', '💘', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 800);
}

const correctPassword = "ankita";

function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase();
    const wrongText = document.getElementById("wrongPassword");

    if (input === correctPassword) {
        document.getElementById("passwordSection").classList.add("hidden");
        document.getElementById("startBtn").classList.remove("hidden");
    } else {
        wrongText.innerHTML = "😢 Wrong password… Try again! 💕";
    }
}

const questions = [
    {
        question: "When did our story begin?",
        options: ["22 July 2024", "23 July 2024", "24 July 2024", "25 July 2024"],
        answer: 1
    },
    {
        question: "Who is more dramatic?",
        options: ["You", "Me", "Both of us"],
        answer: 2
    },
    {
        question: "What makes you special to me?",
        options: ["Your smile", "Your heart", "Everything about you"],
        answer: 2
    },
    {
        question: "What are you to me?",
        options: ["Girlfriend", "Best Friend", "My Future"],
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
        wrongMessage.innerText = "😢 Oops, try again cutie! 💕";        const correctIndex = questions[currentQuestion].answer;
        const buttons = optionsEl.querySelectorAll('button');
        buttons[correctIndex].classList.add('highlight-correct');    }
}

function finishQuiz() {
    quizDiv.classList.add("hidden");
    document.getElementById("birthdayCard").classList.remove("hidden");

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
        "My soft place.\n" +
        "My happy chaos.\n" +
        "My forever girl.\n\n" +
        "Stay cute.\n" +
        "Stay magical.\n" +
        "Stay mine. 💕💅✨";

    let i = 0;
    function typing() {
        if (i < message.length) {
            document.getElementById("birthdayMessage").innerHTML += message.charAt(i);
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

const continueBtn = document.getElementById("continueBtn");
const loveLetterBtn = document.getElementById("loveLetterBtn");
const backToMemoriesBtn = document.getElementById("backToMemories");

continueBtn.onclick = () => {
    document.getElementById("birthdayCard").classList.add("hidden");
    memorySection.classList.remove("hidden");
};

loveLetterBtn.onclick = () => {
    document.getElementById("birthdayCard").classList.add("hidden");
    document.getElementById("loveLetter").classList.remove("hidden");
};

backToMemoriesBtn.onclick = () => {
    document.getElementById("loveLetter").classList.add("hidden");
    memorySection.classList.remove("hidden");
};

// Virtual Gift functionality
const giftBtn = document.getElementById("giftBtn");
const giftReveal = document.getElementById("giftReveal");

giftBtn.onclick = () => {
    giftBtn.classList.add("hidden");
    giftReveal.classList.remove("hidden");

    // Enhanced confetti for gift reveal
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.8 },
        colors: ['#ff4e50', '#feca57', '#ff9ff3', '#54a0ff'],
        shapes: ['circle', 'square']
    });

    // Add a romantic message animation
    setTimeout(() => {
        const giftTitle = document.querySelector("#giftReveal h3");
        giftTitle.style.animation = "textGlow 2s infinite alternate";
    }, 500);
};

// Final surprise functionality
const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
const finalSurprise = document.getElementById("finalSurprise");

finalSurpriseBtn.onclick = () => {
    giftReveal.classList.add("hidden");
    finalSurprise.classList.remove("hidden");

    // Extra special confetti for the final surprise
    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#ff4e50', '#feca57', '#ff9ff3', '#54a0ff']
    });

    // Create a special heart rain effect
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    spread: 360,
                    origin: {
                        x: Math.random(),
                        y: Math.random() - 0.2
                    },
                    shapes: ['heart'],
                    colors: ['#ff4e50', '#ff9ff3']
                });
            }, i * 100);
        }
    }, 1000);

    // Type out the final message
    typeFinalMessage();
}

function typeFinalMessage() {
    const finalText = document.querySelector("#finalSurprise .surprise-content p:nth-child(3)");
    const text = "Happy Birthday to my Queen, my love, my everything! 🎂👑💖";
    let i = 0;

    finalText.textContent = "";

    function typeWriter() {
        if (i < text.length) {
            finalText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}

// Create floating sparkles
function createSparkles() {
    const sparklesContainer = document.getElementById('sparklesContainer');
    const sparkleEmojis = ['✨', '⭐', '🌟', '💫'];

    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 8 + 's';
        sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 8000);
    }, 2000);
}

// Initialize sparkles when page loads
createSparkles();

// Custom Heart Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-heart';
    cursor.innerHTML = '💖';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Create heart trail effect
    let trailCount = 0;
    document.addEventListener('mousemove', function(e) {
        if (trailCount % 5 === 0) { // Create trail every 5th move
            const trail = document.createElement('div');
            trail.className = 'cursor-heart trail';
            trail.innerHTML = '💕';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);

            setTimeout(() => {
                trail.remove();
            }, 1000);
        }
        trailCount++;
    });
});

// Music Control
const musicBtn = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Play Music 🎵';
        musicBtn.classList.remove('playing');
        musicStatus.textContent = 'Music paused 💔';
    } else {
        bgMusic.play().then(() => {
            musicBtn.textContent = '⏸️ Pause Music ⏸️';
            musicBtn.classList.add('playing');
            musicStatus.textContent = 'Playing romantic music 💕';
            musicStatus.classList.add('show');
            setTimeout(() => musicStatus.classList.remove('show'), 3000);
        }).catch(e => {
            musicStatus.textContent = 'Click anywhere first to enable music 🎵';
            musicStatus.classList.add('show');
            setTimeout(() => musicStatus.classList.remove('show'), 5000);
        });
    }
    isPlaying = !isPlaying;
});

// View switching functionality
const slideshowBtn = document.getElementById("slideshowBtn");
const collageBtn = document.getElementById("collageBtn");
const slideshowContainer = document.querySelector(".slideshow-container");
const photoCollage = document.getElementById("photoCollage");
const showGiftBtn = document.getElementById("showGiftBtn");

slideshowBtn.addEventListener('click', function() {
    slideshowBtn.classList.add('active');
    collageBtn.classList.remove('active');
    slideshowContainer.classList.remove('hidden');
    photoCollage.classList.add('hidden');
    isSlideshowMode = true;

    // Hide complete button until last slide is viewed
    showGiftBtn.style.display = "none";
    showGiftBtn.classList.remove("animate-in");

    // Check if last slide has been viewed already
    checkAllSlidesViewed();
});

collageBtn.addEventListener('click', function() {
    collageBtn.classList.add('active');
    slideshowBtn.classList.remove('active');
    slideshowContainer.classList.add('hidden');
    photoCollage.classList.remove('hidden');
    isSlideshowMode = false;

    // In collage mode, show complete button immediately since all photos are visible
    showGiftBtn.style.display = "inline-block";
    showGiftBtn.classList.add("animate-in");
});

// Memory completion and gift reveal
const giftSection = document.getElementById("giftSection");

showGiftBtn.addEventListener('click', function() {
    showGiftBtn.style.display = 'none';
    giftSection.classList.remove('hidden');

    // Trigger celebratory confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff9ff3', '#54a0ff', '#feca57']
    });
});

// Initialize slideshow mode
isSlideshowMode = true;

// Slideshow variables
let slideIndex = 1;
let viewedSlides = new Set();

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].classList.add("active");

    // Track viewed slides only in slideshow mode
    if (isSlideshowMode) {
        viewedSlides.add(slideIndex);
        checkAllSlidesViewed();
    }

    // If we're on the last slide in slideshow mode, show gift button immediately
    if (isSlideshowMode && slideIndex === 15) {
        setTimeout(() => {
            document.getElementById("showGiftBtn").style.display = "inline-block";
            document.getElementById("showGiftBtn").classList.add("animate-in");
        }, 2000); // Show after 2 seconds on the last slide
    }
}

function checkAllSlidesViewed() {
    if (viewedSlides.has(15) && isSlideshowMode) {  // Show if last slide has been viewed
        // Last slide viewed, show the complete button
        document.getElementById("showGiftBtn").style.display = "inline-block";
        document.getElementById("showGiftBtn").classList.add("animate-in");
    }
}

showSlide(slideIndex);