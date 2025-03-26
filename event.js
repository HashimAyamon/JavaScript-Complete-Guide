// Ensure the DOM is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function() {
  
    // 1. Click Event: When the button is clicked
    const clickBtn = document.getElementById("clickBtn");
    clickBtn.addEventListener("click", function() {
      console.log("Button clicked!");
      alert("You clicked the button!");
    });
  
    // 2. Mouseover and Mouseout Events: When hovering over the paragraph
    const hoverPara = document.getElementById("hoverPara");
    hoverPara.addEventListener("mouseover", function() {
      hoverPara.style.color = "blue";
      console.log("Mouse over the paragraph!");
    });
    hoverPara.addEventListener("mouseout", function() {
      hoverPara.style.color = "black";
      console.log("Mouse left the paragraph!");
    });
  
    // 3. Keyup Event: When a key is released in the input field
    const textInput = document.getElementById("textInput");
    textInput.addEventListener("keyup", function(event) {
      console.log("Key pressed:", event.key);
    });
  });
  