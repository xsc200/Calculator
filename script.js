// // Part 1:
// // Connect the number buttons to the screen.
// // Each time you press a number, a digit should appear.

// // Part 2:
// // Implement the clear button so it removes the numbers
// // from the screen.

// // Extra credit:
// // Finish the calculator by implementing the operator buttons.
// // hint: dont forget you will probably need parseInt() when
// // doing the math.

let currentVal = null;
let val = null;
let operator = null;

let saveAndDisplayNum = (event) => {
  if (currentVal === null) {
    currentVal = event.target.dataset.digit;
  } else {
    currentVal += event.target.dataset.digit;
  }
  document.querySelector(".screen input").value = currentVal;
}

// $(".number").click(saveAndDisplayNum);
let numButtons = document.querySelectorAll(".number");
Array.from(numButtons).forEach(numButton => numButton.addEventListener("click", saveAndDisplayNum));

let applyOp = (event) => {
  // If a number wasn't entered before the operator, do nothing
  if (val === null && currentVal === null) {
    return;
  }

  let input = event.target.dataset.symbol;

  // If clear was clicked, set all values to null
  if(input === "C") {
    document.querySelector(".screen input").value = "";
    currentVal = null;
    val = null;
    operator = null;
    return;
  }

  // If operaters were entered consecutively, save the newest operator
  if (currentVal === null) {
    operator = input;
    return;
  }

  currentVal = parseInt(currentVal);
  // Save the current val from the screen if there was no previous number entered.  Otherwise, if the previous operator exists, apply it to the val and current val and save the result to val and display
  if (val === null) {
    val = currentVal;
  } else if (operator != null) {
    switch (operator) {
      case "plus":
        val = val + currentVal;
        break;
      case "minus":
        val = val - currentVal;
        break;
      case "times":
        val = val * currentVal;
        break;
      case "division":
        val = val / currentVal;
        break;
      case "equals":
        val = currentVal;
        break;
      default:
    }
    document.querySelector(".screen input").value = val;
  }
  
  operator = input;
  currentVal = null;
}

// $(".operator").click(applyOp);
let opButtons = document.querySelectorAll(".operator");
Array.from(opButtons).forEach(opButton => opButton.addEventListener("click", applyOp));

