// Initialize Lucide Icons
lucide.createIcons();

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// EmailJS Authorization (Replace with your actual Public Key from EmailJS dashboard)
// emailjs.init("YOUR_PUBLIC_KEY"); // User needs to input this later

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');

    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        // Focus trap
        mobileMenuClose.focus();
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // --- Navigation Scroll Effect ---
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'text-black', 'shadow-md', 'py-3');
            navbar.classList.remove('py-4', 'text-white', 'mix-blend-difference');
        } else {
            navbar.classList.remove('bg-white', 'text-black', 'shadow-md', 'py-3');
            navbar.classList.add('py-4', 'text-white', 'mix-blend-difference');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // --- Floating Button Show/Hide ---
    const floatingBtn = document.getElementById('floatingBtn');
    if (floatingBtn) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    floatingBtn.classList.add('visible');
                } else {
                    floatingBtn.classList.remove('visible');
                }
            });
        }, { threshold: 0 });

        const hero = document.getElementById('hero');
        if (hero) {
            observer.observe(hero);
        }
    }

    // --- Store Gallery Slider ---
    const gallery = document.getElementById('storeGallery');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');

    if (gallery && prevBtn && nextBtn) {
        // Calculate scroll amount based on viewport
        const getScrollAmount = () => {
            const item = gallery.querySelector('div');
            if (item) {
                return item.offsetWidth + 16; // width + gap
            }
            return 300;
        };

        prevBtn.addEventListener('click', () => {
            gallery.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            gallery.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Show/hide navigation buttons based on scroll position
        const updateNavButtons = () => {
            const isAtStart = gallery.scrollLeft <= 0;
            const isAtEnd = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 10;

            prevBtn.style.opacity = isAtStart ? '0.3' : '1';
            nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
        };

        gallery.addEventListener('scroll', updateNavButtons, { passive: true });
        updateNavButtons();
    }

    // --- GSAP Animations ---
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Hero Section - Cinematic Entrance
        const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

        heroTimeline
            .to(".hero-tag", {
                opacity: 1,
                duration: 0.8,
                delay: 0.3
            })
            .to(".hero-line", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            }, "-=0.4")
            .to(".hero-tagline", {
                opacity: 1,
                duration: 0.8
            }, "-=0.6")
            .to(".hero-cta", {
                opacity: 1,
                duration: 0.8
            }, "-=0.4");

        // Highlights Cards (Staggered fade in)
        gsap.from(".highlight-card", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Dough Section Animation
        const doughSection = document.getElementById('dough');
        if (doughSection) {
            gsap.from("#dough img", {
                scrollTrigger: {
                    trigger: "#dough",
                    start: "top 80%",
                },
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out"
            });
        }

        // Menu Items
        gsap.from(".menu-item", {
            scrollTrigger: {
                trigger: "#menu",
                start: "top 75%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });

        // Store Cards
        gsap.from(".store-card", {
            scrollTrigger: {
                trigger: "#store",
                start: "top 75%",
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Franchise Stats Counter Animation
        gsap.from(".franchise-stat", {
            scrollTrigger: {
                trigger: "#franchise",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out"
        });
    } else {
        // Immediately show hero elements for reduced motion
        document.querySelectorAll('.hero-tag, .hero-line, .hero-tagline, .hero-cta, .hero-badge').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // Animate numbers in franchise section
    const animateCounter = (element, target, suffix = '') => {
        if (prefersReducedMotion) {
            element.textContent = target + suffix;
            return;
        }

        const obj = { value: 0 };
        gsap.to(obj, {
            value: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true
            },
            onUpdate: () => {
                if (suffix === '%' || suffix === '+') {
                    element.textContent = Math.round(obj.value) + suffix;
                } else if (target % 1 !== 0) {
                    element.textContent = obj.value.toFixed(1);
                } else {
                    element.textContent = Math.round(obj.value);
                }
            }
        });
    };

    // Initialize counters for franchise section
    const franchiseStats = document.querySelectorAll('.franchise-stat .font-display');
    franchiseStats.forEach((stat) => {
        const text = stat.textContent;
        const value = parseFloat(text);
        const suffix = text.includes('%') ? '%' : text.includes('+') ? '+' : '';
        if (!isNaN(value)) {
            stat.textContent = '0' + suffix;
            animateCounter(stat, value, suffix);
        }
    });

    // --- Form Handling ---
    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const btnText = document.getElementById('btnText');
            const originalText = btnText.innerText;

            // Disable button during submission
            btn.disabled = true;
            btnText.innerText = "전송 중...";

            const templateParams = {
                from_name: form.name.value,
                phone: form.phone.value,
                region: form.region.value,
                has_store: form.has_store.value,
                message: form.message.value,
                to_email: 'dkfjh1234@gmail.com'
            };

            // For real usage:
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            //    .then(() => { ... })
            //    .catch((error) => { ... });

            // Mock success for demo
            setTimeout(() => {
                alert(`문의가 접수되었습니다.\n담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.`);
                form.reset();
                btn.disabled = false;
                btnText.innerText = originalText;
            }, 1500);
        });

        // Phone number formatting
        const phoneInput = form.querySelector('input[name="phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length > 3 && value.length <= 7) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else if (value.length > 7) {
                    value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
                }
                e.target.value = value;
            });
        }
    }

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // --- Lazy load images with IntersectionObserver ---
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // --- Video optimization ---
    const heroVideo = document.querySelector('#hero video');
    if (heroVideo) {
        // Pause video when not visible
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(() => {});
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.25 });

        videoObserver.observe(heroVideo);

        // Reduce quality on slow connections
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                heroVideo.pause();
                heroVideo.poster && (heroVideo.style.display = 'none');
            }
        }
    }

    // Re-initialize Lucide icons after page load
    setTimeout(() => {
        lucide.createIcons();
    }, 100);

});

// --- Service Worker Registration (Optional - for PWA) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}
