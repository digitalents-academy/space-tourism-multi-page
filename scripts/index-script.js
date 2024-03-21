// Get references to the circle and text elements
const circle = document.getElementById('explore-circle');
const text = document.getElementById('explore-text');

// Add click event listeners to the circle and text elements
circle.addEventListener('click', handleClick);
text.addEventListener('click', handleClick);

// Click event handler function
function handleClick(event) {
  // Your click event handling code goes here
  console.log(`${event.target.id} clicked!`);
}