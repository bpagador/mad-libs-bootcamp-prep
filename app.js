// get a bunch of DOM elements 

// go get html elements by their ids

// we'll need all the inputs
const madlibContainer = document.getElementById('madlib-container');
const inputContainer = document.getElementById('input-container');
const myButton = document.getElementById('button');

const noun1Input = document.getElementById('noun1-input');
const noun1Span = document.getElementById('noun1-span');

const nounPluralInput = document.getElementById('noun-plural-input');
const nounPluralSpan = document.getElementById('noun-plural-span');

const adjective1Input = document.getElementById('adjective1-input');
const adjective1Span = document.getElementById('adjective1-span');

const adjective2Input = document.getElementById('adjective2-input');
const adjective2Span = document.getElementById('adjective2-span');

const aFoodInput = document.getElementById('a-food-input');
const aFoodSpan = document.getElementById('a-food-span');

const aMoodInput = document.getElementById('a-mood-input');
const aMoodSpan = document.getElementById('a-mood-span');
// add event listeners
function putAnswersIn() { 
    
    const aFoodValue = aFoodInput.value;
    aFoodSpan.textContent = aFoodValue;

    const aMoodValue = aMoodInput.value;
    aMoodSpan.textContent = aMoodValue;

    const noun1Value = noun1Input.value;
    noun1Span.textContent = noun1Value;

    const nounPluralValue = nounPluralInput.value;
    nounPluralSpan.textContent = nounPluralValue;

    const adjective1Value = adjective1Input.value;
    adjective1Span.textContent = adjective1Value;

    const adjective2Value = adjective2Input.value;
    adjective2Span.textContent = adjective2Value;


// hide the input container
    inputContainer.style.visibility = 'hidden';
// reveal the mad lib container 
    madlibContainer.style.visibility = 'visible';
    
    console.log(aFoodValue);
}

// add event listener to the button on the click event
myButton.addEventListener('click', putAnswersIn);

