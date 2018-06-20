// Display Utilities
const maxNumber = 10;
const allBtns = getAllSelectors('.btn') // All buttons except the clears and equals (evaluation) button
const allClear = getSelector('#allClear') // Clear All Numbers
const clearOne = getSelector('#clearOne') // Clear one Number
const equals = getSelector('#equals') // Equaluation Button
const resultsInjection = getSelector('#results')


let inputData = ''; // Before Evaluation
let operator = ''; // Before Evaluation
let results = ''; // Evaluated inputData


// Helper Functions for Listners/Selectors
// All Buttons with the earlier stated Exceptions
function getAllSelectors (cssSelect) {
	return document.querySelectorAll(cssSelect)
}
// allClear, clearOne and equals are only used here
function getSelector(cssSelect){
	return document.querySelector(cssSelect)
}

// Evaluate Button
equals.addEventListener('click', evaluateInputData)

// Clearing Buttons
allClear.addEventListener('click', allClearData) // AC
clearOne.addEventListener('click', clearLastItem) // CE

// All Buttons that are not for Clearing or Evaluating
allBtns.forEach(btn => btn.addEventListener('click', inputFromButtons))

function evaluateInputData () {
  if (inputData === '') {
    //resultsInjection.innerHTML = 'Start Clicking!'
    console.log('Start Clicking!')
    clearCalc(1000)
  } else {
    //resultsInjection.innerHTML = `${eval('inputData')}`;
    resultsInjection.innerHTML = `${inputData}`
  }
}

// Clear Function - Clears data from Everything
function allClearData (){
  results = '';
  inputData = '';
  console.log('Go Again!');
  clearCalc(1000)
}
// Accumulator Function - All text is captured here.
function inputFromButtons (input){
  let val = input.target.dataset.value.toString();
  inputData = inputData+val
  resultsInjection.innerHTML = inputData;

  if(typeof input.target.dataset.value === Number) {
    console.log(input.target.dataset.value)
  }

}

function clearLastItem (str) {
  inputData.substring(0, str.length-1)
  resultsInjection.innerHTML = inputData;
  //console.log(inputData)
  //console.log(str.substring(0, str.length-1)) // works by removing the last item added on the end of the string
}
function clearCalc (time) {
  return setTimeout(() =>
        resultsInjection.innerHTML = '',
        time)
}
