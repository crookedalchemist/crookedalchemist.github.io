//scroll-to-top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

//type writer effect
const textElement = document.getElementById('typing-effect');
const texts = ["Frontend Developer", "UI/UX Designer"];
const finalText = "Frontend Developer & UI/UX Designer";
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isFinalText = false;

function typeText() {
  if (isFinalText) {
    textElement.textContent = finalText;
    return; // Stop typing if the final text is displayed
  }

  const currentText = texts[textIndex];

  if (isDeleting) {
    textElement.textContent = currentText.slice(0, charIndex);
    charIndex--;
  } else {
    textElement.textContent = currentText.slice(0, charIndex);
    charIndex++;
  }

  if (charIndex === currentText.length + 1) {
    isDeleting = true;
    charIndex--;
  }

  if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    textIndex++;

    if (textIndex === texts.length) {
      isFinalText = true; // Set the flag to display the final text
    }
  }

  setTimeout(typeText, isDeleting ? 50 : 150); // Adjust typing and deleting speeds here
}

typeText();