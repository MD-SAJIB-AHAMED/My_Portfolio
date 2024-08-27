document.addEventListener('DOMContentLoaded', function () {
    // Typing Effect
    const heroText = document.querySelector('.hero h1');
    const textArray = ["Welcome to My Developer Portfolio", "Exploring the intersection of code and creativity.", "Building the future with code."];
    let textIndex = 0;
    let charIndex = 0;

const hours = new Date().getHours();
    if (hours < 12) {
        hero.textContent = 'Good Morning, Welcome to My Portfolio';
    } else if (hours < 18) {
        hero.textContent = 'Good Afternoon, Welcome to My Portfolio';
    } else {
        hero.textContent = 'Good Evening, Welcome to My Portfolio';
    }

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            heroText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            heroText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500);
        }
    }

    setTimeout(typeText, 500);

    // Smooth Scroll
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});