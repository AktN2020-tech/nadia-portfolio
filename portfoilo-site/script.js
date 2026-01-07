// 1. Smooth scroll for the 'Contact' page
// This moves the view down to the form when the "Send Enquiry" button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const enquiryBtn = document.querySelector(".btn");
  const contactFormArea = document.querySelector("#application-form");

  if (enquiryBtn && contactFormArea) {
    enquiryBtn.addEventListener("click", function () {
      contactFormArea.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// 2. Dropdown menu logic for the Navigation bar
// Controls the "Web Technologies" link under the "Contact" menu item
document.addEventListener("DOMContentLoaded", function () {
  const contactDropdown = document.querySelector(".dropdown");
  const contactDropBtn = document.querySelector(".dropbtn");

  if (contactDropdown && contactDropBtn) {
    contactDropBtn.addEventListener("click", function () {
      contactDropdown.classList.toggle("open");
    });

    // Closes the dropdown if you click anywhere else on the page
    document.addEventListener("click", function (e) {
      if (!contactDropdown.contains(e.target)) {
        contactDropdown.classList.remove("open");
      }
    });
  }
});

// 3. Contact Form Validation
// Checks that the user has filled in their details before "Send Enquiry" is pressed
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    const userName = contactForm.querySelector("#name");
    const userEmail = contactForm.querySelector("#email");
    const userMessage = contactForm.querySelector("#message");

    if (!userName.value.trim() || !userEmail.value.trim() || !userMessage.value.trim()) {
      e.preventDefault();
      alert("Please fill in your name, email, and message before sending your enquiry.");
    } else {
      alert("Thank you for your enquiry, Nadia will get back to you soon!");
    }
  });
});

// 4. Dark Mode Toggle
// Switches the website theme between light and dark modes
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.querySelector("#theme-toggle");
  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});


