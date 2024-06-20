'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}



//medal script

document.addEventListener('DOMContentLoaded', function() {
  // Check if the user has already selected gender
  if (!localStorage.getItem('userGender')) {
      // Show the popup if user's gender is not set
      var genderPopup = document.getElementById('genderPopup');
      genderPopup.style.display = 'flex';

      // Handle form submission
      document.getElementById('genderForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission

          let gender = document.querySelector('input[name="gender"]:checked').value;

          // Store the response using Adobe Target
          adobe.target.trackEvent({
              "mbox": "gender-selection",
              "params": {
                  "profile.gender": gender
              }
          });

          // Hide the popup
          genderPopup.style.display = 'none';

          // Store gender in localStorage
          localStorage.setItem('userGender', gender);
      });
  } else {
      // If gender is already set, hide the popup
      var genderPopup = document.getElementById('genderPopup');
      genderPopup.style.display = 'none';
  }
});
