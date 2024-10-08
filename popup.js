document.addEventListener('DOMContentLoaded', function() {
    const searchTerm = document.getElementById('searchterm');
    const submitButton = document.getElementById('submit');
    const results = document.getElementById('results');

    MathJax = {
        tex: {
            inlineMath: [['\$$', '\$$'], ['$', '$']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        startup: {
            typeset: false
        }
    };


    // Particle animation
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);

        const animation = particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            delay: Math.random() * 200
        });

        animation.onfinish = () => particle.remove();
    }

    document.body.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            createParticle(e.clientX, e.clientY);
        }
    });
});