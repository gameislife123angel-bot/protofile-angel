const revealElements = document.querySelectorAll(".reveal");



const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  { threshold: 0.2 }

);



revealElements.forEach((element) => observer.observe(element));



const yearEl = document.getElementById("year");

if (yearEl) {

  yearEl.textContent = new Date().getFullYear();

}



// Typing effect for roles

const roles = [

  "a Web Developer",

  "an App Developer",

  "an Electrical & Arduino Maker"

];



const typingRoleEl = document.getElementById("typing-role");



if (typingRoleEl) {

  let roleIndex = 0;

  let charIndex = 0;

  let isDeleting = false;



  const typeSpeed = 90;

  const eraseSpeed = 50;

  const pauseBetween = 900;



  function type() {

    const current = roles[roleIndex];



    if (!isDeleting) {

      typingRoleEl.textContent = current.slice(0, charIndex + 1);

      charIndex += 1;



      if (charIndex === current.length) {

        isDeleting = true;

        setTimeout(type, pauseBetween);

        return;

      }

    } else {

      typingRoleEl.textContent = current.slice(0, charIndex - 1);

      charIndex -= 1;



      if (charIndex === 0) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

      }

    }



    setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);

  }



  type();

}



const cards = document.querySelectorAll(

  ".card, .skill-card, .service-card, .project-card, .review-image-card, .testimonial-card"

);



cards.forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -6;

    const rotateY = ((x / rect.width) - 0.5) * 6;



    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

  });



  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});

