document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trigger animation on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill, .project').forEach((element, index) => {
        if (element.getBoundingClientRect().top < window.innerHeight - 50) {
            element.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
        }
    });
});

@keyframes fadeInUp {
    0% {opacity: 0; transform: translateY(50px);}
    100% {opacity: 1; transform: translateY(0);}
}
function toggleMenu() {
    const drawer = document.getElementById('drawer');
    drawer.classList.toggle('open');
}