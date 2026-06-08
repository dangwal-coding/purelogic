const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.textContent = "☰";

menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");

  const isOpen = siteNav.classList.contains("open");
  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

if (contactForm && formNote) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		formNote.textContent = 'Thanks. Your request has been captured for follow-up.';
		contactForm.reset();
	});
}
