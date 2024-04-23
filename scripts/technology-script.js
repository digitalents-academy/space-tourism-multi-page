const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((button) => {
  button.addEventListener('click', function() {
    const buttonContent = button.textContent.trim();

    switch (buttonContent) {
      case '1':
        window.location.href = 'technology-vehicle.html';
        break;
      case '2':
        window.location.href = 'technology-spaceport.html';
        break;
      case '3':
        window.location.href = 'technology-capsule.html';
        break;
      default:
        console.log('There is no easter eggs here. Go away.');
        break;
    }
  });
});