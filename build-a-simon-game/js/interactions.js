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
  const keys = queryClick(`#keys-list`)
  keys.classList.remove('disable')
  counter.classList.remove('disable')
}


// Play audio when there are game interactions
function soundPlayer(keySoundId, timeOut){
  if(timeOut === undefined){
    timeOut = 2000;
  }
  keySoundId.currentTime = 0; // Will rewind sound for multiple clicks
  keySoundId.play(); //Play() Using Audio Method
  setTimeout(() => {
    keySoundId.pause();
  }, timeOut);
}