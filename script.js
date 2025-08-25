// GSAP aur ScrollTrigger plugin ko sirf ek baar register karein
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {

    // === Event Listeners for Navbar ===
    var navbar = document.querySelector(".navbar");
    var close_menu = document.querySelector(".close_menu");
    var menu = document.querySelector(".menu_icon");
    const boxes = document.querySelectorAll('.box1');

    menu.addEventListener("click", () => {
        navbar.style.marginTop = "-60px";
    });
    close_menu.addEventListener("click", () => {
        navbar.style.marginTop = "-636px";
    });

    // === Mousemove Animation for Boxes ===
    boxes.forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            box.style.setProperty('--x', `${x}px`);
            box.style.setProperty('--y', `${y}px`);
            box.style.setProperty('--opacity', 1);
        });
        box.addEventListener('mouseleave', () => {
            box.style.setProperty('--opacity', 0);
        });
    });

    // === Typing Animation ===
    const textElement = document.getElementById('changing-text');
    const textsToType = ["Frontend developer", "Data Science learner", "AI Explorer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textsToType[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            textElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 50);
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(type, 500);
        }
    }
    if (textElement) {
        setTimeout(type, 500);
    }

    // === GSAP Page Load Animations (Navbar, Logo, Home) ===
    const menuItems = document.querySelectorAll(".navbar li");
    const logo = document.querySelector(".logo");
    const home = document.querySelector(".home");
    const tlMain = gsap.timeline();

    gsap.set(logo, { y: -50, opacity: 0 });
    tlMain.to(logo, { duration: 0.8, y: 0, opacity: 1, ease: "power2.out" });

    gsap.set(menuItems, { y: -50, opacity: 0 });
    tlMain.to(menuItems, { duration: 0.8, y: 0, opacity: 1, stagger: -0.15, ease: "power2.out" }, "-=0.5");

    gsap.set(home, { y: -50, opacity: 0 });
    tlMain.to(home, { duration: 0.8, y: 0, opacity: 1, ease: "power2.out" }, "-=0.5");

    // === GSAP Scroll Animations ===
    const aboutSection = document.querySelector(".about");
    const aboutImage = document.querySelector(".about_section_img");
    const aboutText = document.querySelector(".about_section_text");
    const professioncyBoxes = document.querySelectorAll(".proffesioncy_box");
    const lastLine = document.querySelector(".last_line"); // Sahi selector

    // About section animation
    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: "top center",
            toggleActions: "play none none none"
        }
    });
    tlAbout.from(aboutImage, { x: -100, opacity: 0, duration: 1 });
    tlAbout.from(aboutText, { x: 100, opacity: 0, duration: 1 }, "<");

    // Professioncy boxes animation (Separate Timeline)
    const tlBoxes = gsap.timeline({
        scrollTrigger: {
            trigger: professioncyBoxes[0],
            start: "top center",
            toggleActions: "play none none none"
        }
    });
    tlBoxes.from(professioncyBoxes[0], { x: 200, opacity: 0, duration: 1 });
    tlBoxes.from(professioncyBoxes[1], { y: 200, opacity: 0, duration: 1 }, "<");
    tlBoxes.from(professioncyBoxes[2], { x: -200, opacity: 0, duration: 1 }, "<");

    // Last Line animation (Separate Timeline for better control)
    if (lastLine) {
        gsap.from(lastLine, {
            x: -200,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: lastLine,
                start: "top center",
                toggleActions: "play none none none"
            }
        });
    }
});