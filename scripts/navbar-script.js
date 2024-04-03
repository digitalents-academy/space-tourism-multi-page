
const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('click', function() {
    const pageName = li.textContent.trim().toLowerCase();

    switch (pageName) {
      case '00 home':
        window.location.href = 'index.html';
        break;
      case '01 destination':
        window.location.href = 'destination-moon.html';
        break;
      case '02 crew':
        window.location.href = 'crew-commander.html';
        break;
      case '03 technology':
        window.location.href = 'technology-vehicle.html';
        break;
      default:
        console.log('Invalid page name');
        break;
    }
  });
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
  var dropdownMenu = document.getElementById('dropdown-menu-div');
  
  dropdownMenu.classList.toggle('show');
});

window.addEventListener('resize', function() {
  var dropdownMenu = document.getElementById('dropdown-menu-div');
  if (window.innerWidth > 930) { 
    dropdownMenu.classList.remove('show');
  }
});