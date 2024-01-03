const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const toggleIcon = document.getElementById("nav-toggle");

// SHOW AND HIDE MENU LIST
if (toggleIcon) {
  toggleIcon.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//REMOVE MENU LIST WHEN A LINK IS CLICKED
const removeMenu = () => {
  navMenu.classList.remove("show-menu");
};
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", removeMenu));

//CHANGE HEADER BACKGROUND COLOR
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 20
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

//CALCULATE BMI
const calculateForm = document.getElementById("calculate-form");
const calculateHeight = document.getElementById("calculate-cm");
const calculateWeight = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (e) => {
  e.preventDefault();

  if (calculateWeight.value == "" || calculateHeight.value == "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");
    calculateMessage.textContent = "Please enter your height and weight 👨‍💻";
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateHeight.value / 100;
    const kg = calculateWeight.value;
    const bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.add("color-brown");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
    } else if (18.5 <= bmi && bmi <= 24.9) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😎`;
    } else if (25 <= bmi && bmi <= 29.9) {
      calculateMessage.classList.add("color-blue");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
    } else if (30 <= bmi && bmi <= 39.9) {
      calculateMessage.classList.add("color-orange");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Obese 😔`;
    } else if (bmi >= 40) {
      calculateMessage.classList.add("color-red");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Extremely Obese 😔`;
    }

    calculateWeight.value = "";
    calculateHeight.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 6000);
  }
};

calculateForm.addEventListener("submit", calculateBMI);

//EMAIL
const contactForm = document.getElementById("contact-form");
const contactUser = document.getElementById("contact-user");
const contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  if (contactUser.value == "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Please enter your email";
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    /*service-id, template-id, templateparams, public-key*/
    emailjs
      .sendForm(
        "service_bc9d3rb",
        "template_70lkewc",
        "#contact-form",
        "E9qFDzMbXK4GGzhZh"
      )
      .then(
        () => {
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Registered successfully";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          alert("OOPS! Something has failed", error);
        }
      );
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

//SCROLL SECTION ACTIVE LINKS
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

//SCROLL UP
const scrollUp = () => {
  const scrollButton = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollButton.classList.add("show-scroll")
    : scrollButton.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

//SCROLL REVEAL ANIMATION
const fromTop = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
fromTop.reveal(
  ".home-text-block, .footer-container, .footer-group, .footer-copy"
);
fromTop.reveal(".home-image", {
  origin: "bottom",
  delay: 400,
});
fromTop.reveal(
  `.logo-image, .features-card, .pricing-card, .testimonial-card`,
  {
    interval: 100,
    mobile: false,
  }
);
fromTop.reveal(".choose-img, .calculate-content, .about-content", {
  origin: "left",
  mobile: false,
});
fromTop.reveal(".choose-content, .calculate-img, .about-image-block", {
  origin: "right",
  mobile: false,
});
