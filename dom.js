// Ensure the DOM is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function() {
    // 1. Accessing Elements by ID
    let title = document.getElementById("title");
    console.log(title.innerText); // Output: Hello, DOM!
  
    // 2. Accessing Elements by Class Name
    let paragraphs = document.getElementsByClassName("description");
    console.log(paragraphs[0].innerText); // Output: This is a paragraph.
  
    // 3. Accessing Elements by Tag Name
    let listItems = document.getElementsByTagName("li");
    console.log(listItems[1].innerText); // Output: Item 2
  
    // 4. Using querySelector (Single Element)
    let firstParagraph = document.querySelector(".description");
    console.log(firstParagraph.innerText); // Output: This is a paragraph.
  
    // 5. Using querySelectorAll (Multiple Elements)
    let allParagraphs = document.querySelectorAll(".description");
    allParagraphs.forEach(p => console.log(p.innerText)); // Outputs both paragraphs
  
    // 6. Changing Text Content
    title.innerText = "Hello, JavaScript DOM!";
  
    // 7. Changing HTML Content
    listItems[0].innerHTML = "<b>Updated Item 1</b>";
  
    // 8. Changing Styles
    title.style.color = "blue";
    title.style.fontSize = "24px";
  
    // 9. Adding an Event Listener (Button Click)
    document.getElementById("changeText").addEventListener("click", function() {
        title.innerText = "Text Changed!";
        title.style.color = "red";
    });
  
    // 10. Creating and Appending New Elements
    let newItem = document.createElement("li");
    newItem.innerText = "Item 3";
    document.getElementById("list").appendChild(newItem);
  
    // 11. Removing an Element
    listItems[1].remove(); // Removes "Item 2"
  });
  