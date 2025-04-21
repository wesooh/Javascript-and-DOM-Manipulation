// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {

    // Changing the text content dynamically
    const changeTextButton = document.getElementById('change-text-btn');
    changeTextButton.addEventListener('click', function () {
        const textContent = document.getElementById('text-content');
        textContent.textContent = "The text has been changed dynamically using JavaScript!";
        textContent.style.color = "blue"; // Changing text color dynamically
    });

    // Adding a new element dynamically
    const addElementButton = document.getElementById('add-element-btn');
    addElementButton.addEventListener('click', function () {
        const container = document.getElementById('dynamic-container');
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.textContent = "This is a dynamically added element!";
        container.appendChild(newElement);
    });

    // Removing an element dynamically
    const removeElementButton = document.getElementById('remove-element-btn');
    removeElementButton.addEventListener('click', function () {
        const container = document.getElementById('dynamic-container');
        if (container.children.length > 0) {
            container.removeChild(container.lastElementChild);
        } else {
            alert("No elements to remove!");
        }
    });

});
