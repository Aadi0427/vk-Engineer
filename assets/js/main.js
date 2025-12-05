
(function () {
    "use strict";

    // Spinner
    const spinner = () => {
        setTimeout(() => {
            const spinnerEl = document.getElementById('spinner');
            if (spinnerEl) {
                spinnerEl.classList.remove('show');
            }
        }, 1);
    };
    spinner();

   


    
    const navbar = document.querySelector('.sticky-top');
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            if (navbar) {
                navbar.classList.add('shadow-sm');
                navbar.style.top = '0px';
            }
            if (backToTop) backToTop.style.display = 'block';
        } else {
            if (navbar) {
                navbar.classList.remove('shadow-sm');
                navbar.style.top = '-100px';
            }
            if (backToTop) backToTop.style.display = 'none';
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Modal Video
    let videoSrc;
    document.querySelectorAll('.btn-play').forEach(btn => {
        btn.addEventListener('click', () => {
            videoSrc = btn.getAttribute('data-src');
        });
    });

    const videoModal = document.getElementById('videoModal');
    const video = document.getElementById('video');

    if (videoModal && video) {
        videoModal.addEventListener('shown.bs.modal', () => {
            video.setAttribute('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
        });
        videoModal.addEventListener('hide.bs.modal', () => {
            video.setAttribute('src', videoSrc);
        });
    }

    

    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.innerText;
            let count = 0;
            const step = target / (2000 / 10); // total time / delay
            const increment = () => {
                count += step;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(increment, 10);
                } else {
                    counter.innerText = target;
                }
            };
            increment();
        };
        updateCounter();
    });

    const projectCarousel = document.querySelector('.project-carousel');
    if (projectCarousel) {
        tns({
            container: '.project-carousel',
            items: 3,
            slideBy: 'page',
            autoplay: true,
            autoplayTimeout: 1000,
            speed: 1000,
            loop: true,
            center: true,
            nav: false,
            controls: true,
            controlsText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: {
                0: { items: 2 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
                1200: { items: 5 }
            }
        });
    }

    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        tns({
            container: '.testimonial-carousel',
            items: 2,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 2000,
            speed: 800,
            loop: true,
            center: true,
            nav: false,
            controls: true,
            controlsText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 }
            }
        });
    }

})();
