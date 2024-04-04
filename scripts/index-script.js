const circle = document.getElementById('explore-circle');
const text = document.getElementById('explore-text');

circle.addEventListener('click', handleClick);
text.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(`${event.target.id} clicked!`);
}
