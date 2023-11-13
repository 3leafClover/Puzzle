// Get all elements with the class "draggable-tab"
var draggableTabs = document.querySelectorAll('.draggable');

// Loop through each tab and set up the drag functionality
draggableTabs.forEach(function(draggableTab) {
  var dragHandle = draggableTab.querySelector('.drag-handle');
  var offsetX, offsetY;

  // Event listener for mouse down on the drag handle
  dragHandle.addEventListener('mousedown', function(e) {
    // Calculate the offset between the mouse position and the top-left corner of the tab
    offsetX = e.clientX - draggableTab.getBoundingClientRect().left;
    offsetY = e.clientY - draggableTab.getBoundingClientRect().top;

    // Add event listeners for mouse move and mouse up
    document.addEventListener('mousemove', dragElement);
    document.addEventListener('mouseup', stopDragging);
  });

  // Function to handle the dragging of the tab
  function dragElement(e) {
    // Calculate the new position of the tab based on the mouse position
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;

    // Set the new position of the tab
    draggableTab.style.left = x + 'px';
    draggableTab.style.top = y + 'px';
  }

  // Function to stop dragging when the mouse is released
  function stopDragging() {
    // Remove event listeners for mouse move and mouse up
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
  }
});


// Loop through each tab and set up the drag and close functionality
draggableTabs.forEach(function(draggableTab) {
  var closeButton = draggableTab.querySelector('.close');

  // Event listener for close button click
  closeButton.addEventListener('click', function() {
    // Remove the tab from the document
    draggableTab.style.display="none";
  });
});