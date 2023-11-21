// Get the slider element
var musicVolumeSlider = document.getElementById('musicVolumeSlider');

// Add an event listener to the slider to capture changes in volume
musicVolumeSlider.addEventListener('input', function () {
  updateMusicVolume();
});

// Function to update the music volume based on the slider value
function updateMusicVolume() {
  var volume = parseFloat(musicVolumeSlider.value);
  musicPlayer.volume = volume;

  // Save the volume to local storage
  localStorage.setItem('musicVolume', volume.toString());
}

// Load the saved volume from local storage when the page loads
window.addEventListener('load', function () {
  // Check if there is a saved volume in local storage
  var savedVolume = localStorage.getItem('musicVolume');
  if (savedVolume !== null) {
    // Set the slider value to the saved volume
    musicVolumeSlider.value = parseFloat(savedVolume);
    // Update the music volume based on the saved volume
    updateMusicVolume();
  }
});

// Function to play a sound effect
function playSoundEffect(soundEffectPath) {
  var soundEffectPlayer = new Audio(soundEffectPath);
  soundEffectPlayer.play();
}

// Function to play the settings menu sound effect
function playSettingsMenuSound() {
  playSoundEffect('path/to/your/sound_effect.mp3');
}

// Function to play any sound effect
function playCustomSoundEffect(soundEffectPath) {
  playSoundEffect(soundEffectPath);
}

// Update the playSelectedSong function

// Function to handle the play button click
function playSelectedSong() {
  if (selectedSong) {
    // Set the source of the audio player to the selected song
    musicPlayer.src = selectedSong.toLowerCase().replace(/\s+/g, '') + '.mp3';

    // Set the volume based on the slider value
    updateMusicVolume();

    // Play the audio
    musicPlayer.play();
  }
}

window.addEventListener("load", function () {
  // Assuming you have a predefined CSS animation named "loaded"
  preloader = document.getElementById("preloader");
  preloader.style.animation = "loaded 1s forwards";
  console.log("Page is fully loaded!");

  // Set the selected song
  selectedSong = "Chaotic_Code";

  // Simulate a click on the song after a delay
  setTimeout(function () {
    // Find the element corresponding to the selected song
    var songElement = findSongElement(selectedSong);

    // If the element is found, trigger the click event
    if (songElement) {
      songElement.click();
    }
  }, 3000);
});

// Function to find a song element based on the song name
function findSongElement(songName) {
  var songElements = document.querySelectorAll('.mus-song');
  for (var i = 0; i < songElements.length; i++) {
    if (songElements[i].textContent.includes(songName)) {
      return songElements[i];
    }
  }
  return null;
}


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


function playerSelect(selectedId) {
  // Reset styles for all elements
  var elements = document.getElementsByClassName('mus-nav-btn');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = 'var(--main)';
    elements[i].style.border="none";
    elements[i].style.borderBottom = '1px solid var(--main)';
  }

  // Apply styles for the selected element
  var selectedElement = document.getElementById(selectedId);
  selectedElement.style.color = 'white';
  selectedElement.style.border = '1px solid var(--main)';
  selectedElement.style.borderBottom = 'none';

  if (selectedId=="mus-player-li"){
    page=document.getElementById("mus-player");
    var elements = document.getElementsByClassName('mus-page');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display="none";
    }
    page.style.display="block"
  }

  if (selectedId=="mus-list-li"){
    page=document.getElementById("mus-list");
    var elements = document.getElementsByClassName('mus-page');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display="none";
    }
    page.style.display="block"
  }

  if (selectedId=="mus-artists-li"){
    page=document.getElementById("mus-artists");
    var elements = document.getElementsByClassName('mus-page');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display="none";
    }
    page.style.display="block"

    
  }
}

var selectedSong = null;
var musicPlayer = document.getElementById('musicPlayer');
var songList = document.querySelectorAll('.mus-song');
var currentSongIndex = 0;

// Add click event listeners to all song elements
for (var i = 0; i < songList.length; i++) {
  songList[i].addEventListener('click', function () {
    selectSong(this);
    pauseButton.classList.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  });
}

// Function to handle the play button click
function playSelectedSong() {
  if (selectedSong) {
    // Set the source of the audio player to the selected song
    musicPlayer.src = selectedSong.toLowerCase().replace(/\s+/g, '') + '.mp3';

    // Play the audio
    musicPlayer.play();
  }
}

// Function to handle the pause button click
function pauseSong() {
  var pauseButton = document.getElementById('pauseButton');

  if (musicPlayer.paused) {
    // If the audio is paused, resume it
    musicPlayer.play();
    // Change the icon to pause
    pauseButton.classList.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  } else {
    // If the audio is playing, pause it
    musicPlayer.pause();
    // Change the icon to play
    pauseButton.classList.remove('bi-pause-fill');
    pauseButton.classList.add('bi-play-fill');
  }
}


// Add an event listener to the musicPlayer for the "ended" event
musicPlayer.addEventListener('ended', function () {
  // Call the function to play the next song
  skipSong();
});

// Function to handle the skip button click
function skipSong() {
  if (currentSongIndex < songList.length - 1) {
    // Increment the current song index
    currentSongIndex++;
    pauseButton.classList.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  } else {
    // If at the end of the playlist, loop back to the first song
    currentSongIndex = 0;
  }

  // Select and play the next song
  selectSong(songList[currentSongIndex]);
}

// Function to handle the go back button click
function goBackSong() {
  if (currentSongIndex > 0) {
    // Decrement the current song index
    currentSongIndex--;
    pauseButton.classList.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  } else {
    // If at the first song, loop to the last song
    currentSongIndex = songList.length - 1;
  }

  // Select and play the previous song
  selectSong(songList[currentSongIndex]);
}

function selectSong(songElement) {
  // Reset styles for all song elements
  var songElements = document.querySelectorAll('.mus-song');
  for (var i = 0; i < songElements.length; i++) {
    songElements[i].classList.remove('selected');
  }

  // Apply styles for the selected song
  songElement.classList.add('selected');
  selectedSong = songElement.querySelector('p').textContent.trim();

  // Update the current song index
  currentSongIndex = Array.from(songElements).indexOf(songElement);

  // Get the player and artist elements
  var playerElement = document.getElementById('mus-info').querySelector('h3');
  var artistElement = document.getElementById('mus-info').querySelector('p');

  // Extract the artist name from the span element, if present
  var artistNameElement = songElement.querySelector('.artist-name');
  var artistName = artistNameElement ? artistNameElement.textContent.trim() : '';

  // Update the player and artist names
  playerElement.textContent = selectedSong;
  artistElement.textContent = artistName ? "By " + artistName : '';

  // Play the selected song
  playSelectedSong();

  // Trigger the notification with the song information
  notification("Now Playing:", selectedSong);
}



// Get the notes area element
var notesArea = document.getElementById("notes-textarea");

// Load notes from local storage when the page loads
window.addEventListener("load", function() {
  // Check if there are saved notes in local storage
  if (localStorage.getItem("notes")) {
    // Load the saved notes into the notes area
    notesArea.value = localStorage.getItem("notes");
  }
});

// Save notes to local storage when the content changes
notesArea.addEventListener("input", function() {
  // Save the notes to local storage
  localStorage.setItem("notes", notesArea.value);
});

function notification(small, big) {
  var notifSmall = document.getElementById("notif-small");
  var notifBig = document.getElementById("notif-big");
  
  notifSmall.textContent = small;
  notifBig.textContent = big;

  notif=document.getElementById("notification");
  notif.style.animation="1s notif-a forwards";
  setTimeout(function () {
    notif.style.animation="0.5s notif-a-rev forwards";
  }, 7000);
}


settings = document.getElementById("settings");
closeSet = document.getElementById("close-set");

function openSettings() {
  setM = document.getElementById("settings-menu");
  setM.style.display = "block";
  // Example of playing a custom sound effect
  playCustomSoundEffect('zapsplat_science_fiction_door_code_unlock_accept_001_61688.mp3');
}

function closeSettings() {
  setM = document.getElementById("settings-menu");
  setM.style.display = "none";
}