const fs = require('fs');
const path = require('path');

const folderPath = 'F:\WEB DEV\Projects\FIRST BACKEND WEBSITE USING RAW HTML IN PUG\static\images'; // Replace with the actual path to your image folder

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Check if the file is an image (you can modify this condition to match your image file extensions)
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
      // Perform operations on the image file
      console.log('Processing image:', filePath);

      // Your code for processing the image goes here
    }
  });
});
