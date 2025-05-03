

const roles = ["Frontend Developer", "Data Science Learner", "AI Explorer"];
let index = 0;
function changeText() {
  document.getElementById("changing-text").textContent = roles[index];
  index = (index + 1) % roles.length;
}

setInterval(changeText, 2300); // Change text every 2.3 seconds
let menuicon = document.getElementById(`menu-icon`);
let navbar = document.querySelector(`.navbar`);
menuicon.onclick = () => {
    menuicon.classList.toggle(`fa-xmark`);
    navbar.classList.toggle(`active`);

};
window.onscroll = () => {
    
    menuicon.classList.remove(`fa-xmark`);
    navbar.classList.remove(`active`);


    document.getElementById(`header`);
    header.classList.toggle(`sticky`, window.scrollY > 100);  
};



ScrollReveal({ 
    // reset: true,
    distance:`80px`,
    duration:2000,
    dealy:200
 });

 ScrollReveal().reveal('.home-content, .start', { origin: `top` });
 ScrollReveal().reveal('.home-img, .services-contaner,  .portfolio-box,  .about-content', { origin: `bottom` });
 ScrollReveal().reveal('.about-img,  .home-content h1,  .about-content p ', { origin: `bottom` });


 


