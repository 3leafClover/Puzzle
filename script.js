loadedColor = localStorage.getItem("savedColor");
changeColor(loadedColor);

var musicVolumeSlider = document.getElementById('musicVolumeSlider');
musicVolumeSlider.addEventListener('input', function () {
  updateMusicVolume();
});

var isFirstTime = localStorage.getItem('firstTime') === null;

if (isFirstTime) {
  localStorage.setItem('firstTime', 'no');
  localStorage.setItem('savedColor', 'cyan');
}

var loadedColor = localStorage.getItem('savedColor');
changeColor(loadedColor);


function updateMusicVolume() {
  var volume = parseFloat(musicVolumeSlider.value);
  musicPlayer.volume = volume;
  localStorage.setItem('musicVolume', volume.toString());
}

window.addEventListener('load', function () {
  var savedVolume = localStorage.getItem('musicVolume');
  var musicSwitchState = localStorage.getItem('switchState_Music');

  if (savedVolume !== null) {
    musicVolumeSlider.value = parseFloat(savedVolume);
    updateMusicVolume();
  }

  if (musicSwitchState === '26px') {
    playSelectedSong();
  }
});

function playSoundEffect(soundEffectPath) {
    var soundEffectPlayer = new Audio(soundEffectPath);
    soundEffectPlayer.play();
  }


// You can still keep the playCustomSoundEffect function if needed
function playCustomSoundEffect(soundEffectPath) {
  var soundSwitchState = localStorage.getItem('switchState_SoundEffects');
  playSoundEffect(soundEffectPath);

}


function playSelectedSong() {
  if (selectedSong) {
    musicPlayer.src = selectedSong.toLowerCase().replace(/\s+/g, '') + '.mp3';
    updateMusicVolume();
    musicPlayer.play();
  }
}

window.addEventListener("load", function () {
  preloader = document.getElementById("preloader");
  preloader.style.animation = "loaded 1s forwards";
  selectedSong = "Chaotic_Code";

  var musicSwitchState = localStorage.getItem('switchState_Music');

  if (musicSwitchState !== '0px') {
    setTimeout(function () {
      var songElement = findSongElement(selectedSong);
      if (songElement) {
        songElement.click();
      } else {
        notification("Music is off, It can be turned on again in the settings menu");
      }
    }, 3000);
  }
});

function findSongElement(songName) {
  var songElements = document.querySelectorAll('.mus-song');
  for (var i = 0; i < songElements.length; i++) {
    if (songElements[i].textContent.includes(songName)) {
      return songElements[i];
    }
  }
  return null;
}

var draggableTabs = document.querySelectorAll('.draggable');
draggableTabs.forEach(function (draggableTab) {
  var dragHandle = draggableTab.querySelector('.drag-handle');
  var offsetX, offsetY;

  dragHandle.addEventListener('mousedown', function (e) {
    offsetX = e.clientX - draggableTab.getBoundingClientRect().left;
    offsetY = e.clientY - draggableTab.getBoundingClientRect().top;
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
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
  }
});

draggableTabs.forEach(function (draggableTab) {
  var closeButton = draggableTab.querySelector('.close');
  closeButton.addEventListener('click', function () {
    draggableTab.style.display = "none";
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
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
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

var selectedSong = null;
var musicPlayer = document.getElementById('musicPlayer');
var songList = document.querySelectorAll('.mus-song');
var currentSongIndex = 0;

for (var i = 0; i < songList.length; i++) {
  songList[i].addEventListener('click', function () {
    selectSong(this);
    pauseButton.classList.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  });
}

function playSelectedSong() {
  if (selectedSong) {
    musicPlayer.src = selectedSong.toLowerCase().replace(/\s+/g, '') + '.mp3';
    musicPlayer.play();
  }
}

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

musicPlayer.addEventListener('ended', function () {
  skipSong();
});

function skipSong() {
  if (currentSongIndex < songList.length - 1) {
    currentSongIndex++;
    pauseButton.classList
.remove('bi-play-fill');
    pauseButton.classList.add('bi-pause-fill');
  } else {
    currentSongIndex = 0;
  }

  selectSong(songList[currentSongIndex]);
}

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

var notesArea = document.getElementById("notes-textarea");
window.addEventListener("load", function () {
  if (localStorage.getItem("notes")) {
    notesArea.value = localStorage.getItem("notes");
  }
});

notesArea.addEventListener("input", function () {
  localStorage.setItem("notes", notesArea.value);
});

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

settings = document.getElementById("settings");
closeSet = document.getElementById("close-set");

function openSettings() {
  setM = document.getElementById("settings-menu");
  setM.style.display = "block";
  playCustomSoundEffect('zapsplat_science_fiction_door_code_unlock_accept_001_61688.mp3');
}

function closeSettings() {
  setM = document.getElementById("settings-menu");
  setM.style.display = "none";
}

function changeColor(color) {
  localStorage.setItem("savedColor", color);

  if (color == "pink") {
    var newColor = "rgb(255, 0, 221)";
  }
  if (color == "cyan") {
    var newColor = "rgb(0, 255, 255)";
  }

  document.documentElement.style.setProperty('--main', newColor);
}

document.addEventListener('DOMContentLoaded', function () {
  var switchElements = document.querySelectorAll('.switch');
  switchElements.forEach(function (switchElement) {
    var switchInElement = switchElement.querySelector('.switch-in');
    var switchId = switchElement.previousElementSibling.textContent.trim();
    var savedSwitchState = localStorage.getItem('switchState_' + switchId);
    if (savedSwitchState) {
      switchInElement.style.marginLeft = savedSwitchState;
      applyStylesBasedOnSwitchState(switchId, savedSwitchState);
    } else {
      document.body.style.backgroundImage = 'url("videoplasty-18255-data-background-motion-graphics-pdp.gif")';
    }

  switchElement.addEventListener('click', function () {
    var currentMargin = switchInElement.style.marginLeft;
    switchInElement.style.marginLeft = currentMargin === '0px' ? '26px' : '0px';
    var switchState = switchInElement.style.marginLeft;
    localStorage.setItem('switchState_' + switchId, switchState);
    applyStylesBasedOnSwitchState(switchId, switchState);
  });
});

  function applyStylesBasedOnSwitchState(switchId, switchState) {
    switch (switchId) {
      
      case 'Background':
        if (switchState === '0px') {
          document.body.style.background = 'black';
          notification("Background is off, It can be turned on again in the settings menu.");

        } else {
          document.body.style.backgroundImage = 'url("videoplasty-18255-data-background-motion-graphics-pdp.gif")';
        }
        break;
      case 'Music':
          if (switchState === '0px') {
            musicPlayer.pause();
            musicPlayer.src = '';
            notification("Music player is off, It can be turned on again in the settings menu.");
          }
          else{
            playSelectedSong()
            setTimeout(function () {
              notification("Now Playing:", selectedSong);
            }, 3000);
          }
        break;
    }
  }
});
