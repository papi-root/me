const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar ul');
const navbarLinks = document.querySelectorAll('.navbar a');

navbarToggle.addEventListener("click", navbarToggleClick);

function  navbarToggleClick()
{
  navbarToggle.classList.toggle('open-navbar-toggle');
  navbarMenu.classList.toggle('open');
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick()
{
  if(navbarMenu.classList.contains('open'))
  {
    navbarToggle.click();
  }
}
