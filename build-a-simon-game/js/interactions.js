// Adds class and removes class. Needs a element data-key and the class to work

function toggleClass (id) {
  const keyHTML = queryClick(`[data-key="${id}"]`)
  keyHTML.classList.toggle('playing')
  setTimeout(() => {
    keyHTML.classList.toggle('playing')
  }, 300);
}


// Function hide keys until StartButton pressed
function makeClickableKeys () {
  if (gameOn === true) {
    const keys = queryClick(`#keys-list`)
    keys.classList.remove('disable')
    counter.classList.remove('disable')
    start.textContent = 'Reset'
    start.style.backgroundColor = 'red'
    //help.textContent = '';
  }
}


// Play audio when there are game interactions
function soundPlayer(keySoundId, timeOut){
  if(timeOut === undefined){
    timeOut = 500;
  }
  keySoundId.currentTime = 0; // Rewinds sound for multiple clicks
  keySoundId.play(); //Play() Using Audio Method
  setTimeout(() => {
    keySoundId.pause();
  }, timeOut);
}