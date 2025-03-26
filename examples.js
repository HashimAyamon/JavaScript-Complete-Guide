// Function to create a text element that says "created by hashim"
function createText() {
  var container = document.getElementById("textContainer");
  // Check if the text already exists to avoid duplicates
  if (!document.getElementById("hashimText")) {
    var p = document.createElement("p");
    p.id = "hashimText";
    p.innerText = "created by hashim";
    container.appendChild(p);
  }
}

// Function to remove the text element and log a message
function removeText() {
  var textElem = document.getElementById("hashimText");
  if (textElem) {
    textElem.remove();
    console.log("Text removed successfully!");
  } else {
    console.log("No text found to remove.");
  }
}
