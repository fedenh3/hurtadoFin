document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto Nieve
    const snowContainer = document.getElementById("snow-container");
    const numFlakes = 50;

    for (let i = 0; i < numFlakes; i++) {
        let flake = document.createElement("div");
        flake.classList.add("snowflake");
        
        // Random properties
        let size = Math.random() * 5 + 2; // de 2px a 7px
        let leftPos = Math.random() * 100; // 0% a 100% de ancho
        let animDuration = Math.random() * 10 + 10; // de 10s a 20s
        let delay = Math.random() * 10; // 0 a 10s delay

        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.left = `${leftPos}vw`;
        flake.style.top = `-10px`;
        
        // Keyframes dinámicos
        flake.animate([
            { transform: `translateY(-10vh) translateX(0)`, opacity: 0.8 },
            { transform: `translateY(110vh) translateX(${Math.random() * 50 - 25}px)`, opacity: 0.1 }
        ], {
            duration: animDuration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: "linear"
        });

        snowContainer.appendChild(flake);
    }

    // 2. Observer para animaciones On-Scroll
    const faders = document.querySelectorAll('.fade-in, .fade-in-up');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Navbar scroll effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.85)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.8)';
            nav.style.padding = '0.8rem 2rem';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.6)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            nav.style.padding = '1rem 2rem';
        }
    });
});
