/* =====================

# Exercise: Selectors & Events

## Introduction

Run a local server and open the /exercises/ page in your browser. Update the
variables and functions below so that the results on the page all say
"Success!". You will have to refer to the document structure in the index.html
file in the exercises/ folder in order to target the appropriate elements. YOU
SHOULD NOT MODIFY THE HTML FILE ITSELF.

===================== */

/* eslint-disable no-unassigned-vars */

import { htmlToElement } from './template-tools.js';

/* ====================
Part 1: Set the variable below equal to the paragraph element representing the
first test result.
==================== */

let firstResult;

/* ====================
Parts 2: Set the variable below equal to a collection of the paragraph
elements representing the 2nd and 3rd results.
==================== */

let secondAndThirdResults;

/* ====================
Parts 3: Set the variable below equal to a collection of the paragraph
elements representing the all of the results.
==================== */

let allResults;

/* ====================
Part 4: Add an event listener to the button in problem 4 that changes the
button's own text to "I'm Clicked!"
==================== */

let imClickedButton;
if (imClickedButton) {
  imClickedButton.addEventListener('click', () => {});
}

/* ====================
Part 5: Add an event listener to the button in problem 5 that creates a new span
to the spanContainer. The span should contain a single number representing how
many times you have clicked the button. For example, if it is your 3rd time
clicking the button, you should add:

  <span>3</span>

HINT: You may need some global state for this problem.
==================== */

let spanContainer = document.querySelector('#span-container');
spanContainer.appendChild(htmlToElement('<span>0</span>'));

let addSpanButton;
if (addSpanButton) {
  addSpanButton.addEventListener('click', () => {});
}

export {
  firstResult,
  secondAndThirdResults,
  allResults,
  imClickedButton,
  spanContainer,
  addSpanButton,
};
