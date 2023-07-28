// TODO: Add a comment explaining role of the index.js file and import statements
// These compile the 2 files into 1 js file. It shows exactly what it wants to import as well.

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
