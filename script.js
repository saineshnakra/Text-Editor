/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */

document.getElementById("text-input").addEventListener("input", updateText);
document.getElementById("bold").addEventListener("click", makeBold);
document.getElementById("italic").addEventListener("click", makeItalic);
document.getElementById("underline").addEventListener("click", makeUnderline);

function updateText() {
  document.getElementById("text-output").innerText =
    document.getElementById("text-input").value;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold() {
  let list = document.getElementById("text-output").classList;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == "bold") {
      document.getElementById("text-output").classList.toggle("bold");
      return;
    }
  }
  document.getElementById("text-output").classList.add("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  let list = document.getElementById("text-output").classList;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == "italic") {
      document.getElementById("text-output").classList.toggle("italic");
      return;
    }
  }
  document.getElementById("text-output").classList.add("italic");
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  let list = document.getElementById("text-output").classList;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == "underline") {
      document.getElementById("text-output").classList.toggle("underline");
      return;
    }
  }
  document.getElementById("text-output").classList.add("underline");
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
  elem.classList.toggle("active");
}
