const toggleButton = document.querySelector('.toggle-button'),
      bodyElement  = document.body,
      hamburgerMenu = document.querySelector('.hamburger-menu'),
      hamburger = document.getElementById("hamburger"),
      navigationList = document.getElementById("navigation-list");

const toggleMode = () => {
  bodyElement.classList.toggle('dark-mode');
  toggleButton.classList.toggle('toggle-button-light');
  hamburgerMenu.classList.toggle('hamburger-menu-light');
}

hamburger.addEventListener("click", () => {
  navigationList.classList.toggle("show");
})