
const nav = document.querySelector('nav');
const liElements = nav.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('click', function() {
    // Get the text content of the clicked li element
    const pageName = li.textContent.trim().toLowerCase(); // Convert to lowercase for simplicity
    console.log(pageName)
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