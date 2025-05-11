document.addEventListener("DOMContentLoaded", function () {
    let savedColor = localStorage.getItem("themeColor");

    // Apply stored preference if available
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById("colorSelect").value = savedColor; // Set dropdown value
    }
});

// Function to save user preference
function savePreference() {
    let selectedColor = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("themeColor", selectedColor);
}

// Attach event listener to save button
document.getElementById("saveButton").addEventListener("click", savePreference);

// Function to trigger animation
document.getElementById("animateButton").addEventListener("click", function () {
    let box = document.getElementById("animatedBox");

    // Apply CSS animation class
    box.classList.add("slide");

    // Remove animation class after animation completes (so it can be retriggered)
    setTimeout(() => {
        box.classList.remove("slide");
    }, 1000);
});