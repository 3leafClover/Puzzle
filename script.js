// Get the draggable div element and the drag handle
var draggableElement = document.querySelector('.draggable');
var dragHandle = document.querySelector('.drag-handle');

// Variables to store the mouse position during dragging
var offsetX, offsetY;

// Event listener for mouse down on the drag handle
dragHandle.addEventListener('mousedown', function(e) {
  // Calculate the offset between the mouse position and the top-left corner of the div
  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

  // Add event listeners for mouse move and mouse up
  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', stopDragging);
});

// Function to handle the dragging of the div
function dragElement(e) {
  // Calculate the new position of the div based on the mouse position
  var x = e.clientX - offsetX;
  var y = e.clientY - offsetY;

  // Set the new position of the div
  draggableElement.style.left = x + 'px';
  draggableElement.style.top = y + 'px';
}

// Function to stop dragging when the mouse is released
function stopDragging() {
  // Remove event listeners for mouse move and mouse up
  document.removeEventListener('mousemove', dragElement);
  document.removeEventListener('mouseup', stopDragging);
}
