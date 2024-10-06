const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');

// Check for dark mode preference in localStorage
let darkMode = localStorage.getItem('darkMode') === 'true';

if (darkMode) {
    body.classList.add('dark-mode');
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline';
}

// Toggle Navigation Links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class
    // Accessibility: Toggle aria-expanded attribute
    const expanded = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', expanded);
});

// Toggle Dark/Light Mode

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  // Update the mode toggle icon visibility
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const lightModeIcon = document.getElementById('light-mode-icon');

  if (document.body.classList.contains('dark-mode')) {
      darkModeIcon.style.display = 'none';
      lightModeIcon.style.display = 'block';
  } else {
      darkModeIcon.style.display = 'block';
      lightModeIcon.style.display = 'none';
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to handle scroll animations
function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is in view
        if (rect.top < windowHeight - 50 && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Check for project cards visibility
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.top < windowHeight - 50 && rect.bottom > 0) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScrollAnimations);




// Function to handle scroll animations for tools section
function handleScrollAnimations() {
  const tools = document.querySelectorAll('.tools-container .tool i');
  const windowHeight = window.innerHeight;

  tools.forEach(icon => {
      const rect = icon.getBoundingClientRect();
      if (rect.top < windowHeight - 100 && rect.bottom > 0) {
          icon.style.animation = 'bounce 1s ease'; // Animate when icon is in view
      } else {
          icon.style.animation = ''; // Reset animation when out of view
      }
  });
}

window.addEventListener('scroll', handleScrollAnimations);



// Get the skills nav link and the icons
const skillsNavLink = document.querySelector('#skills-nav-link');
const skillIcons = document.querySelectorAll('.skill i'); // Select all skill icons

// Function to add bounce and pulse animations
function triggerBounceAndPulse() {
    skillIcons.forEach(icon => {
        // Remove any existing bounce or pulse classes
        icon.classList.remove('animate__bounce', 'animate__pulse');
        
        // Add the bounce animation
        icon.classList.add('animate__bounce');

        // Remove bounce after 2 seconds and add pulse
        setTimeout(() => {
            icon.classList.remove('animate__bounce');
            icon.classList.add('animate__pulse'); // Pulse animation starts after bounce
        }, 2000); // 2 seconds for the bounce duration
    });
}

// Smooth scroll to the "skills" section and trigger animations
skillsNavLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to the "skills" section
    const target = document.querySelector(skillsNavLink.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // After scrolling, trigger bounce and pulse animations
    setTimeout(() => {
        triggerBounceAndPulse(); // Start bounce and pulse after scrolling completes
    }, 500); // Slight delay to ensure the scroll finishes before bouncing
});

// Function to trigger bounce and pulse animations for personal skills
function triggerPersonalSkillsAnimation() {
  const personalSkillIcons = document.querySelectorAll('.personal-skill-icon'); // Select all personal skill icons

  personalSkillIcons.forEach(icon => {
      // Remove any existing bounce or pulse classes
      icon.classList.remove('bounce-animation', 'pulse-animation');
      
      // Add the bounce animation
      icon.classList.add('bounce-animation');

      // Remove bounce after 2 seconds and add pulse
      setTimeout(() => {
          icon.classList.remove('bounce-animation');
          icon.classList.add('pulse-animation'); // Pulse animation starts after bounce
      }, 500); // 0.5 seconds for the bounce duration
  });
}

// Trigger the animation when the "Personal Skills" section is scrolled into view
const personalSkillsSection = document.querySelector('#personal-skills');

window.addEventListener('scroll', () => {
  const sectionPosition = personalSkillsSection.getBoundingClientRect();

  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
      triggerPersonalSkillsAnimation(); // Start animation when section is in view
  }
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation (you can customize this based on your needs)
  if (name === '' || email === '' || message === '') {
      alert('All fields are required!');
      return;
  }

  // Display a response message (simulating form submission for now)
  const responseMessage = document.getElementById('response-message');
  responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
  
  // Clear the form fields
  document.getElementById('contact-form').reset();
});
