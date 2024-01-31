// Refresh the website if its the first time opened
if (!localStorage.getItem('Website Done By:')) {
    localStorage.setItem('Website Done By:', 'Clover 🍀');
    window.location.reload();
}



// Loading screen disappear
window.addEventListener("load", function () {
  websiteloaded();
});

function websiteloaded() {
  document.getElementById("load-text").outerHTML = '<p class="load-btn" id="load-text">Ready</p>';
  document.getElementById("load-text").addEventListener("click", websitestart);
}

function websitestart() {
  console.log("uwu");
  var preloader = document.getElementById("preloader");
  preloader.style.animation = "loaded 1s forwards";
  notif = document.getElementById("notification");

  // Play Beginning Song
  selectedSong = "Chaotic_Code";
  var musicSetting = localStorage.getItem('musicState'); // Fixed variable name

  if (musicSetting === 'on') {
      setTimeout(function() {
          playSelectedSong();
          checkNotificationSetting();
          notification("Now Playing:", selectedSong);
      }, 3000);
  }
  var bgSetting = localStorage.getItem('bgState');
  if (bgSetting === 'on') {
      document.body.style.background = "url(videoplasty-18255-data-background-motion-graphics-pdp.gif)";
  } else {
      document.body.style.background = "black";
  }
}








// Notification Function
function notification(small, big) {
    var notifSmall = document.getElementById("notif-small");
    var notifBig = document.getElementById("notif-big");
    notifSmall.textContent = small;
    notifBig.textContent = big;
    notif = document.getElementById("notification");
    notif.style.animation = "1s notif-a forwards";
    setTimeout(function () {
      notif.style.animation = "0.5s notif-a-rev forwards";
    }, 7000);
}





// Play Sound Effect
function playCustomSoundEffect(fileName) {
    const audio = new Audio();
    audio.src = 'soundeffects/' + fileName;
    audio.type = 'audio/mp3';
    audio.play();
}
 

// Top Bar

// Fullscreen logic
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
    playCustomSoundEffect('zapsplat_science_fiction_door_code_unlock_accept_001_61688.mp3');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}

function toggleButtonVisibility() {
  const fullscreenButton = document.getElementById('fc');

  if (document.fullscreenElement) {
    fullscreenButton.classList.remove('bi-fullscreen');
    fullscreenButton.classList.add('bi-fullscreen-exit');
  } else {
    fullscreenButton.classList.remove('bi-fullscreen-exit');
    fullscreenButton.classList.add('bi-fullscreen');
  }
}



// Get settings and close button elements
settings = document.getElementById("settings");
closeSet = document.getElementById("close-set");
// Open Settings
function openSettings() {
    setM = document.getElementById("settings-menu");
    setM.style.display = "block";
    playCustomSoundEffect('zapsplat_science_fiction_door_code_unlock_accept_001_61688.mp3');
}
// Close Settings
function closeSettings() {
    setM = document.getElementById("settings-menu");  
    setM.style.display = "none";
}




// Center Tabs
var centerTabsIcon = document.getElementById('center-tabs');
centerTabsIcon.addEventListener('click', centerTabs);

function centerTabs() {
  draggableTabs.forEach(function (draggableTab) {
    draggableTab.style.left = '35%';
    draggableTab.style.top = '19.1%';
  });
}




// Pages logic, dragging/closing/opening etc
// Dragging Tab
var draggableTabs = document.querySelectorAll('.draggable');
draggableTabs.forEach(function (draggableTab) {
  var dragHandle = draggableTab.querySelector('.drag-handle');
  var closeButton = draggableTab.querySelector('.close');
  var offsetX, offsetY;

  dragHandle.addEventListener('mousedown', function (e) {
    offsetX = e.clientX - draggableTab.getBoundingClientRect().left;
    offsetY = e.clientY - draggableTab.getBoundingClientRect().top;
    
    draggableTab.style.zIndex = 1;

    draggableTabs.forEach(function (tab) {
      if (tab !== draggableTab) {
        tab.style.zIndex = 0;
      }
    });

    document.addEventListener('mousemove', dragElement);
    document.addEventListener('mouseup', stopDragging);
  });

  function dragElement(e) {
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    draggableTab.style.left = x + 'px';
    draggableTab.style.top = y + 'px';
  }

  function stopDragging() {
    draggableTabs.forEach(function (tab) {
      // (Optional) You can add any additional logic here
    });

    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
  }

  closeButton.addEventListener('click', function () {
    draggableTab.style.display = "none";
  });
});



// Opening tab
function tabopen(name) {
    var tab = document.getElementById(name);
    if (tab) {
      tab.style.display = "block";
    }
}



// Tabs
// Music Tab
function playerSelect(selectedId) {
    var elements = document.getElementsByClassName('mus-nav-btn');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'var(--main)';
      elements[i].style.border = "none";
      elements[i].style.borderBottom = '1px solid var(--main)';
    }
  
    var selectedElement = document.getElementById(selectedId);
    selectedElement.style.color = 'white';
    selectedElement.style.border = '1px solid var(--main)';
    selectedElement.style.borderBottom = 'none';
  
    if (selectedId == "mus-player-li") {
      page = document.getElementById("mus-player");
      var elements = document.getElementsByClassName('mus-page');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      page.style.display = "block"
    }
  
    if (selectedId == "mus-list-li") {
      page = document.getElementById("mus-list");
      var elements = document.getElementsByClassName('mus-page');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      page.style.display = "block"
    }
  
    if (selectedId == "mus-artists-li") {
      page = document.getElementById("mus-artists");
      var elements = document.getElementsByClassName('mus-page');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      page.style.display = "block"
    }
  }
  
  // Initialize variables for music player and song list
  var selectedSong = null;
  var musicPlayer = document.getElementById('musicPlayer');
  var songList = document.querySelectorAll('.mus-song');
  var currentSongIndex = 0;
  
  // Event listeners for song clicks
  for (var i = 0; i < songList.length; i++) {
    songList[i].addEventListener('click', function () {
      selectSong(this);
      pauseButton.classList.remove('bi-play-fill');
      pauseButton.classList.add('bi-pause-fill');
    });
  }
  // Function to play the selected song
function playSelectedSong() {
    if (selectedSong) {
      musicPlayer.src = 'music/' + selectedSong.toLowerCase().replace(/\s+/g, '') + '.mp3';
      musicPlayer.play();
    }
  }
  // Function to pause the current song
  function pauseSong() {
    var pauseButton = document.getElementById('pauseButton');
  
    if (musicPlayer.paused) {
      musicPlayer.play();
      pauseButton.classList.remove('bi-play-fill');
      pauseButton.classList.add('bi-pause-fill');
    } else {
      musicPlayer.pause();
      pauseButton.classList.remove('bi-pause-fill');
      pauseButton.classList.add('bi-play-fill');
    }
  }
  // Event listener for song end to skip to the next song
  musicPlayer.addEventListener('ended', function () {
    skipSong();
  });
  // Function to skip to the next song
  function skipSong() {
    if (currentSongIndex < songList.length - 1) {
      currentSongIndex++;
      pauseButton.classList.remove('bi-play-fill');
      pauseButton.classList.add('bi-pause-fill');
    } else {
      currentSongIndex = 0;
    }
    selectSong(songList[currentSongIndex]);
  }
  // Function to go back to the previous song
  function goBackSong() {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      pauseButton.classList.remove('bi-play-fill');
      pauseButton.classList.add('bi-pause-fill');
    } else {
      currentSongIndex = songList.length - 1;
    } 
    selectSong(songList[currentSongIndex]);
  }
  // Function to select a song and update player information
  function selectSong(songElement) {
    var songElements = document.querySelectorAll('.mus-song');
    for (var i = 0; i < songElements.length; i++) {
      songElements[i].classList.remove('selected');
    }
    songElement.classList.add('selected');
    selectedSong = songElement.querySelector('p').textContent.trim();
    currentSongIndex = Array.from(songElements).indexOf(songElement);
    var playerElement = document.getElementById('mus-info').querySelector('h3');
    var artistElement = document.getElementById('mus-info').querySelector('p');
    var artistNameElement = songElement.querySelector('.artist-name');
    var artistName = artistNameElement ? artistNameElement.textContent.trim() : '';
    playerElement.textContent = selectedSong;
    artistElement.textContent = artistName ? "By " + artistName : '';
    playSelectedSong();
    notification("Now Playing:", selectedSong);
  }
  



// Notes Tab
var notesArea = document.getElementById("notes-textarea");
window.addEventListener("load", function () {
  if (localStorage.getItem("notes")) {
    notesArea.value = localStorage.getItem("notes");
  }
});
notesArea.addEventListener("input", function () {
  localStorage.setItem("notes", notesArea.value);
});




// Styles Tab
function changeColor(color) {
        localStorage.setItem("savedColor", color);
    
        var newColor;
    
        switch (color) {
        case "pink":
            newColor = "rgb(255, 0, 221)";
            break;
        case "cyan":
            newColor = "rgb(0, 235, 235)";
            break;
        case "blue":
            newColor = "rgb(89, 0, 255)";
            break;
        case "orange":
            newColor = "rgb(255, 123, 0)";
            break;
        default:
            newColor = "rgb(0, 235, 235)";
            break;
        }
    
    document.documentElement.style.setProperty('--main', newColor);
    checkNotificationSetting("New Theme Selected:", color.charAt(0).toUpperCase() + color.slice(1));
}
// Reload saved color when page opens
loadedColor = localStorage.getItem('savedColor');
changeColor(loadedColor);



// Settings Menu
function initializeSetting(settingName, defaultValue) {
    if (!localStorage.getItem(settingName)) {
        localStorage.setItem(settingName, defaultValue);
    }
}

function updateSettingVisualState(settingName, element, onValue, offValue) {
    var settingState = localStorage.getItem(settingName);
    element.style.marginLeft = (settingState === 'off') ? onValue : offValue;
}

function toggleSetting(settingName, element, onValue, offValue) {
    var settingState = localStorage.getItem(settingName);

    if (settingState === 'on') {
        localStorage.setItem(settingName, 'off');
        if (settingName === 'bgState') {
            document.body.style.background = "black";

        } else if (settingName === 'musicState') {
            pauseSong()
      
        } else if (settingName === 'notifState') {
            notif.style.display="none";
        }
    } else {
        localStorage.setItem(settingName, 'on');
        if (settingName === 'bgState') {
            document.body.style.background = " url(videoplasty-18255-data-background-motion-graphics-pdp.gif)";

        } else if (settingName === 'musicState') {
            playSelectedSong();
            checkNotificationSetting("Now Playing:", selectedSong);

        } else if (settingName === 'notifState') {
        }
    }

    updateSettingVisualState(settingName, element, onValue, offValue);
}

var bgSet = document.getElementById("bgSet");
var bgIn = document.getElementById("bgIn");
initializeSetting('bgState', 'on');
updateSettingVisualState('bgState', bgIn, '0px', '26px');
bgSet.addEventListener("click", function () {
    toggleSetting('bgState', bgIn, '0px', '26px');
});

var musicSet = document.getElementById("musicSet");
var musicIn = document.getElementById("musicIn");
initializeSetting('musicState', 'on');
updateSettingVisualState('musicState', musicIn, '0px', '26px');
musicSet.addEventListener("click", function () {
    toggleSetting('musicState', musicIn, '0px', '26px');
});

var notifSet = document.getElementById("notifSet");
var notifIn = document.getElementById("notifIn");
initializeSetting('notifState', 'on');
updateSettingVisualState('notifState', notifIn, '0px', '26px');
notifSet.addEventListener("click", function () {
    toggleSetting('notifState', notifIn, '0px', '26px');
});


// Notification Check
function checkNotificationSetting(small,big) {
    notif = document.getElementById("notification");
    notif.style.display="none";
    var notifSetting = localStorage.getItem('notifState');

    if (notifSetting === 'on') {
        notif.style.display = 'block';
        notification(small, big);
    }
}

notif.style.display="none";



// Music Slider Setting

var musicVolumeSlider = document.getElementById('musicVolumeSlider');
musicVolumeSlider.addEventListener('input', updateMusicVolume);


function updateMusicVolume() {
  var volume = parseFloat(musicVolumeSlider.value);
  musicPlayer.volume = volume;
  localStorage.setItem('musicVolume', volume.toString());
}

  var musicSwitchState = localStorage.getItem('switchState_Music');




// Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
      switch (e.code) {
          case "KeyZ":
              toggleFullScreen();
              break;
      }
    }
});