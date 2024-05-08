const buttonContainer = document.getElementById('buttons-container');

buttonContainer.addEventListener('click', function(event) {
  const clickedButton = event.target.closest('button');

  if (clickedButton) {
    const buttonContent = clickedButton.textContent.trim();

    const redirectUrls = {
      '1': 'technology-vehicle.html',
      '2': 'technology-spaceport.html',
      '3': 'technology-capsule.html'
    };

    const targetUrl = redirectUrls[buttonContent];
      window.location.href = targetUrl;
    }
  }
);