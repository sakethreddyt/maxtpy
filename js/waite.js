document.addEventListener("DOMContentLoaded", function () {
    // This event fires when the page has finished loading
    const loadingMessage = document.querySelector(".loading-message");
    const content = document.querySelector(".content");

    // Hide the loading message and display the content
    loadingMessage.style.display = "none";
    content.style.display = "block";
});
