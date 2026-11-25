
console.log('loaded');

// Find elements once at the top
const themeBtn = document.querySelector('#themeBtn');
const themeIcon = document.querySelector('#themeIcon');
const greetBtn = document.querySelector('#greetBtn');
const title = document.querySelector('#greeting');
const liveInput = document.querySelector('#live-input');
const liveOutput = document.querySelector('#live-output');
const skillList = document.querySelector('#skills ul');
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const formStatus = document.querySelector('#form-status');

// A click + classList + change text
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    if (themeIcon) {
      themeIcon.textContent = isDark ? '\u2600' : '\u263E';
    }
  });
}

if (greetBtn && title) {
  greetBtn.addEventListener('click', () => {
    title.textContent = 'Hi!';
  });
}

// Read what is typed and show it live on the page
if (liveInput && liveOutput) {
  liveInput.addEventListener('input', () => {
    liveOutput.textContent = liveInput.value;
  });
}

// Add an element: create, fill, append
if (skillList) {
  const li = document.createElement('li');
  li.textContent = 'CSS';
  skillList.append(li);
}

// A key press
document.addEventListener('keydown', (e) => {
  console.log(e.key);
});

// Handle the form and show "Thanks, <name>!"
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const visitorName = nameInput ? nameInput.value.trim() : '';
    if (formStatus) {
      formStatus.textContent = `Thanks, ${visitorName || 'there'}!`;
    }
  });
}