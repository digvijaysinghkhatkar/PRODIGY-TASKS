// script.js

// Get references to the elements
const fileInput = document.getElementById('file-upload');
const previewImage = document.getElementById('preview');

// Add an event listener to the file input to handle the file selection
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];  // Get the selected file

    if (file) {
        const reader = new FileReader();  // Create a FileReader instance

        // When the file is loaded, set the image preview
        reader.onload = function(e) {
            previewImage.src = e.target.result;  // Set the src of the preview image
            previewImage.style.display = 'block';  // Display the preview image
        };

        reader.readAsDataURL(file);  // Read the file as a data URL
    } else {
        previewImage.style.display = 'none';  // Hide preview image if no file is selected
    }
});