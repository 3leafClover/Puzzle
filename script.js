window.addEventListener("load", function () {
  // Assuming you have a predefined CSS animation named "loaded"
  preloader = document.getElementById("preloader");
  preloader.style.animation = "loaded 3s forwards";
  console.log("Page is fully loaded!");
});

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

const fullscreenButton = document.getElementById('fc');

fullscreenButton.addEventListener('click', toggleFullScreen);
document.addEventListener('fullscreenchange', toggleButtonVisibility);
function toggleFullScreen() {
  const elem = document.documentElement;

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function toggleButtonVisibility() {
  fullscreenButton.style.display = document.fullscreenElement ? 'none' : 'inline-block';
}


function tabopen(name) {
  var tab = document.getElementById(name);
  if (tab) {
    tab.style.display = "block";
  }
}
