const $form = document.getElementById("calculator_form");
const $input = document.getElementById("display_input");
const $buttons = document.querySelectorAll(
  '.buttons button:not([type="submit"])'
);
const $clearButton = document.getElementById("clear_button");

if (!$form) {
  throw new Error("Form not found");
}

if (!$input) {
  throw new Error("Input not found");
}

if (!$buttons) {
  throw new Error("Buttons not found");
}

function handleSubmit(event) {
  event.preventDefault();

  // Get the value of the input
  const value = $input.value;

  // Evaluate the value
  let result;

  try {
    result = eval(value);
  } catch (error) {
    console.error(error);
    result = "Error";
  }

  // Display the result
  $input.value = result;
}

function handleButtonClick() {
  // Get the value of the button
  const value = this.value || "0";

  // Add the value to the input
  $input.value += value;

  // Focus the input
  $input.focus();
}

function handleClearButtonClick() {
  // Clear the input
  $input.value = "";

  // Focus the input
  $input.focus();
}

function handleInputKeyDown(event) {
  // Disallow everything except numbers, operators, decimal point, backspace, and enter
  if (
    !(
      (event.key >= "0" && event.key <= "9") ||
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/" ||
      event.key === "." ||
      event.key === "Backspace" ||
      event.key === "Enter"
    )
  ) {
    event.preventDefault();
  }
}

$form.addEventListener("submit", handleSubmit);

$buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

$clearButton.addEventListener("click", handleClearButtonClick);

$input.addEventListener("keydown", handleInputKeyDown);
