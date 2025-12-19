const path = require("path"); // Importing the built-in 'path' module
const myPath = 'C://Users//Lenovo//Documents//Node//NodeModuleSystem//pathmodule.js';
console.log(path.parse(myPath));
console.log("Path Module Demonstration:");
console.log("Directory Name:", path.dirname(myPath));
console.log("Base Name:", path.basename(myPath));
console.log("Extension Name:", path.extname(myPath));
console.log("Joined Path:", path.join('C://Users', 'Lenovo', 'Documents', 'Node', 'NodeModuleSystem', 'newfile.js')); // automatically adjusts to the OS-specific path format