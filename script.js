/* 💖 Name Personalization */
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

nameInput.addEventListener("input", () => {
    nameDisplay.innerText = `For ${nameInput.value} 💕`;
});

/* 🎶 Music Control */
const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.play();
        musicBtn.innerText = "⏸ Pause";
    } else {
        music.pause();
        musicBtn.innerText = "🎶 Play";
    }
    isPlaying = !isPlaying;
}

/* ❤️ Floating Hearts */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);

/* 📅 Countdown */
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* ✍️ Typing Effect */
const text = `My love,
Every heartbeat of mine whispers your name.
You are my today, my tomorrow, and my forever.
I love you endlessly ❤️`;

let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}
typeText();

/* 💍 Popup */
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
