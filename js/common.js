particlesJS.load('particles-bg', './bg/nasa.json', function() {
    console.log('NASA preset loaded successfully!');
});


window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="cyber-loader">
            <div class="loader-text">LOADING</div>
            <div class="progress-bar"></div>
        </div>
    `;
    document.body.appendChild(preloader);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});


function addGlitchEffect() {
    document.querySelectorAll('.cyber-section-title').forEach(title => {
        const originalText = title.textContent;
        
        title.addEventListener('mouseover', function() {
            let iterations = 0;
            const interval = setInterval(() => {
                title.textContent = originalText
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
                    })
                    .join('');
                
                iterations += 1/3;
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    title.textContent = originalText;
                }
            }, 30);
        });
    });
}



document.addEventListener('DOMContentLoaded', function() {
    addGlitchEffect();
});


const mobileMenuBtn = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

document.addEventListener('click', function(e) {
    if (navbarNav && navbarNav.classList.contains('show')) {
        if (!navbarNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navbarNav.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    
    document.querySelectorAll('.cyber-section').forEach(section => {
        section.classList.add('scroll-reveal');
    });


    document.querySelectorAll('.row').forEach(row => {
        const columns = row.querySelectorAll('.col-lg-6');
        columns.forEach((col, index) => {
            col.classList.add(index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right');
        });
    });

    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(element => {
        observer.observe(element);
    });


});

