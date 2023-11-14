var d1 = document.getElementById("dialogue1");
var d2 = document.getElementById("dialogue2");
var d3 = document.getElementById("dialogue3");
var page = 1;

function handleKeyPress(event) {
  if (event.code === 'Space' && page === 1) {
    page = 2;
    d1.style.display = "none";
    setTimeout(function() {
      d2.style.display = "block";
    }, 1000);
    setTimeout(function() {
      d3.style.display = "block";
    }, 2000);
  }
}

function handleEnterKey(event) {
  if (event.code === 'Enter' && page === 2) {
    const inputField = document.querySelector('input');
    const accessText = document.getElementById("access");

    if (inputField.value.toLowerCase() === 'reinitiate') {
      animateAccess(accessText, 'access...<span class="green">granted</span>.');
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
  
    const intervalId = setInterval(function() {
      target.innerHTML = finalText.slice(0, 6) + dots[count];
  
      count++;
  
      if (count === dots.length) {
        clearInterval(intervalId);
        target.innerHTML = finalText;
      }
  }, 1000); 
}

