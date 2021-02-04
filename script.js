const toggleButton = document.querySelector('.toggle-button');

const toggleMode = () => {
  const bodyElement  = document.body;
  bodyElement.classList.toggle('dark-mode');
  toggleButton.classList.toggle('toggle-button-light');
}