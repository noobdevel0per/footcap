'use strict';

/**
 * Display the gender selection modal on page load
 */
window.onload = function() {
  document.getElementById('genderModal').style.display = 'block';
};



/**
 * Navbar toggle
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
 * Header & go top btn active on page scroll
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

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}


/**
 * Handle gender selection
 */
function selectGender(gender) {
  // Store the selected gender in localStorage
  localStorage.setItem('selectedGender', gender);

  // Call pageParams to set the custom parameter
  adobe.target.pageParams({
    gender: gender
  });

  // After setting the parameter, fetch an offer using getOffer()
  adobe.target.getOffer({
    mbox: 'target-global-mbox',  // Replace with your mbox name
    success: function(offer) {
      console.log('Offer received:', offer);
      // Handle the offer display or further processing here
    },
    error: function(status, error) {
      console.error('Error fetching offer:', status, error);
      // Handle errors if needed
    }
  });

  // Hide the modal after selecting gender
  document.getElementById('genderModal').style.display = 'none';
}



