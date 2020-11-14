const path = require('path');

// Base file name:
console.log(path.basename(__filename));

// Directory naem:
console.log(path.dirname(__filename));

// File extension:
console.log(path.extname(__filename));

// Create path object:
console.log(path.parse(__filename));