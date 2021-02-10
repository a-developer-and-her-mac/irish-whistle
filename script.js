const toggleButton = document.querySelector('.toggle-button');
const bodyElement  = document.body;

const toggleMode = () => {
  bodyElement.classList.toggle('dark-mode');
  toggleButton.classList.toggle('toggle-button-light');
}