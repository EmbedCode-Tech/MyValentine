// 💌 Set Her Name Here
document.getElementById("name").innerText = "For My Beautiful Love 💕";

// ❤️ Floating Hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 300);

// 📅 Countdown
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// 💍 Popup
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

