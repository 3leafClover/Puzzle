var d1 = document.getElementById("dialogue1");
var d2 = document.getElementById("dialogue2");
var d3 = document.getElementById("dialogue3");
var d4 = document.getElementById("dialogue4");
var d5 = document.getElementById("dialogue5");
var d6 = document.getElementById("dialogue6");
var d7 = document.getElementById("dialogue7");
var body = document.querySelector("body");
var page = 1;

function handleKeyPress(event) {
  if (event.code === 'Space' && page === 1) {
    page = 2;
    d1.style.display = "none";
    setTimeout(function () {
      d2.style.display = "block";
    }, 1000);
    setTimeout(function () {
      d3.style.display = "block";
      const inputField = document.querySelector('input').focus();
    }, 2000);
  }
}

function handleEnterKey(event) {
  if (event.code === 'Enter' && page === 2) {
    const inputField = document.querySelector('input');
    const accessText = document.getElementById("access");

    if (inputField.value.toLowerCase() === 'reinitiate') {
      animateAccess(accessText, 'access...<span class="green">granted</span>.');
      setTimeout(function () {
        launch();
      }, 6000);
    } else {
      animateAccess(accessText, 'access...<span class="pink">denied</span>.');
    }
  }
}

document.addEventListener('keydown', handleKeyPress);
document.querySelector('input').addEventListener('keydown', handleEnterKey);

function animateAccess(target, finalText) {
  const dots = ['.', '..', '...', '....'];
  let count = 0;

  const intervalId = setInterval(function () {
    target.innerHTML = finalText.slice(0, 6) + dots[count];

    count++;

    if (count === dots.length) {
      clearInterval(intervalId);
      target.innerHTML = finalText;
    }
  }, 1000);
}

function launch() {
  d2.style.display = "none";
  d3.style.display = "none";
  setTimeout(function () {
    document.getElementById('keycode').style.display = 'block';
  }, 1000);
  setTimeout(function () {
    document.getElementById('verified').style.display = 'block';
  }, 2000);
  setTimeout(function () {
    document.getElementById('recovering').style.display = 'block';
  }, 3000);
  setTimeout(function () {
    document.getElementById('ten-percent').style.display = 'block';
  }, 4000);
  setTimeout(function () {
    document.getElementById('twenty-percent').style.display = 'block';
  }, 5000);
  setTimeout(function () {
    document.getElementById('error').style.display = 'block';
  }, 6000);
  setTimeout(function () {
    d4.style.display = "none";
    document.getElementById('reattempting').style.display = 'block';
  }, 7000);
  setTimeout(function () {
    document.getElementById('ten-percent-2').style.display = 'block';
  }, 8000);
  setTimeout(function () {
    document.getElementById('twenty-percent-2').style.display = 'block';
  }, 9000);
  setTimeout(function () {
    document.getElementById('error-2').style.display = 'block';
  }, 10000);
  setTimeout(function () {
    d5.style.display = "none";
    document.getElementById('diagnosing').style.display = 'block';
  }, 11000);
  setTimeout(function () {
    document.getElementById('corrupted-identified').style.display = 'block';
  }, 12000);
  setTimeout(function () {
    document.getElementById('skipping-corrupted').style.display = 'block';
  }, 13000);
  setTimeout(function () {
    document.getElementById('resuming-recovery').style.display = 'block';
  }, 14000);
  setTimeout(function () {
    document.getElementById('success').style.display = 'block';
  }, 15000);
  setTimeout(function () {
    d6.style.display = "none";
    document.getElementById('initiating-sequence').style.display = 'block';
  }, 16000);
  setTimeout(function () {
    document.getElementById('user-transported').style.display = 'block';
  }, 17000);
  setTimeout(function () {
    d7.style.display = 'none';
  }, 18000);
  setTimeout(function () {
    window.location.href = 'solved.html';
  }, 20000);
}


