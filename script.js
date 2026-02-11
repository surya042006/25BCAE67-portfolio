// ===============================
// TYPING EFFECT
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    const text = "BCA Student | Aspiring Developer";
    const headerText = document.querySelector("header p");
    let i = 0;

    headerText.innerHTML = "";

    function typing() {
        if (i < text.length) {
            headerText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 60);
        }
    }

    typing();
});


// ===============================
// FADE IN PANELS ON SCROLL
// ===============================

const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

panels.forEach(panel => {
    panel.style.opacity = "0";
    panel.style.transform = "translateY(40px)";
    panel.style.transition = "all 0.6s ease";
    observer.observe(panel);
});


// ===============================
// OPTIONAL: HOVER SOUND EFFECT
// ===============================

const hoverSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
