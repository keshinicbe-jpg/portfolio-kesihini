
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {

    observer.observe(element);

});


// CONTACT FORM - OPEN GMAIL COMPOSE

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all the fields.");

        return;

    }


    const recipient = "keshini.cbe@gmail.com";

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(recipient) +
        "&su=" + emailSubject +
        "&body=" + emailBody;


    window.open(gmailURL, "_blank", "noopener,noreferrer");

    document.getElementById("formNote").textContent =
        "Gmail opened. Please review your message and click Send.";

});
