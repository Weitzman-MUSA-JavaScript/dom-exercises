import {
  firstResult,
  secondAndThirdResults,
  allResults,
  imClickedButton,
  spanContainer,
  addSpanButton,
} from './index.js';

/* =====================

Results (all should report success)
YOU NEED NOT (AND SHOULD NOT) EDIT BELOW THIS LINE.

===================== */

Object.assign(window, {
  firstResult,
  secondAndThirdResults,
  allResults,
  imClickedButton,
  addSpanButton,
  spanContainer,
});

function checkResults() {
  // Part 1
  try {
    firstResult.textContent = 'Success!';
  } catch (exc) {
    console.log('Failed part 1:');
    console.error(exc);
  }

  // Part 2
  try {
    if (secondAndThirdResults.length !== 2) {
      console.log(`Failed part 2: Variable should represent exactly 2 elements, not ${secondAndThirdResults.length}.`);
    } else {
      document.querySelector('#result-2').textContent = 'Success!';
    }
  } catch (exc) {
    console.log('Failed part 2:');
    console.error(exc);
  }

  // Part 3
  try {
    if (allResults.length !== 5) {
      console.log(`Failed part 3: Variable should represent 5 elements, not ${allResults.length}.`);
    } else {
      document.querySelector('#result-3').textContent = 'Success!';
    }
  } catch (exc) {
    console.log('Failed part 3:');
    console.error(exc);
  }

  // Part 4
  if (imClickedButton) {
    const imClickedObserver = new MutationObserver(() => {
      if (imClickedButton.textContent === "I'm Clicked!") {
        document.querySelector('#result-4').textContent = 'Success!';
        imClickedObserver.disconnect();
      }
    });

    imClickedObserver.observe(imClickedButton, { childList: true });
  }

  // Part 5
  const spanContainerObserver = new MutationObserver(() => {
    if (spanContainer.children.length === 6 && spanContainer.lastChild.textContent === '5') {
      document.querySelector('#result-5').textContent = 'Success!';
      spanContainerObserver.disconnect();
    }
  });
  spanContainerObserver.observe(spanContainer, { childList: true });
}

checkResults();
