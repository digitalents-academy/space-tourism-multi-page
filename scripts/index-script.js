const circle = document.getElementById('explore-circle');
const text = document.getElementById('explore-text');

circle.addEventListener('click', handleClick);
text.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(`${event.target.id} clicked!`);
  logBottomValue(); // Log the bottom value immediately

  // Create a temporary element to apply the CSS variable
  const tempElement = document.createElement('div');
  tempElement.style.setProperty('--temp', `var(--main-bottom-transition)`); // Apply the CSS variable to the element
  document.body.appendChild(tempElement); // Append the element to the document

  // Get the computed style of the temporary element to retrieve the final computed value
  const finalValue = getComputedStyle(tempElement).getPropertyValue('--temp');
  console.log('Final computed value of --main-bottom-transition:', finalValue);

  // Remove the temporary element from the document
  document.body.removeChild(tempElement);
}

function logBottomValue() {
  const mainElement = document.querySelector('main'); // Get the main element
  const computedStyle = window.getComputedStyle(mainElement); // Get the computed styles
  const bottomValue = computedStyle.getPropertyValue('bottom'); // Get the calculated bottom value

  // Calculate the percentage of the bottom value based on the viewport height
  const viewportHeight = window.innerHeight;
  const bottomPercentage = (parseFloat(bottomValue) / viewportHeight) * 100;

  console.log('Calculated bottom value:', bottomValue);
  console.log('Bottom value as a percentage:', bottomPercentage + '%');
}