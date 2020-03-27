// get a bunch of DOM elements 

// go get html elements by their ids

// we'll need all the inputs
const aFoodInput = document.getElementById('a-food-input');
// we'll need spans to put the words into the mad lib
const aFoodSpan = document.getElementById('a-food-span');
// we'll need the container that holds the madlib
const madlibContainer = document.getElementById('madlib-container');
// we'll need the container that holds all the inputs 
const inputContainer = document.getElementById('input-container');
// we'll need the button so we can add the event listener 
const myButton = document.getElementById('button');

// add event listeners
function putAnswersIn() { 
    
// get the value of the inputs
    const aFoodValue = aFoodInput.value;
// use the input values to SET the value of our spans
    aFoodSpan.textContent = aFoodValue;
// hide the input container
    inputContainer.style.visibility = 'hidden';
// reveal the mad lib container 
    madlibContainer.style.visibility = 'visible';
    
    console.log(aFoodValue);
}

// add event listener to the button on the click event
myButton.addEventListener('click', putAnswersIn);

