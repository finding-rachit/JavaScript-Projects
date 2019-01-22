// Using if, else if, and else

// Initializing a season
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === "winter") {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === "fall") {
    console.log('It\'s fall! Leaves are falling!');
} else if (season === "summer") {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Using ternary operator

season = 'No Season';

(season === 'spring') ? console.log() : (season === 'winter') ? 
console.log('It\'s winter! Everything is covered in snow.') : 
(season === 'fall') ? console.log('It\'s fall! Leaves are falling!') : 
(season === 'summer') ? console.log('It\'s sunny and warm because it\'s summer!') : 
console.log('Invalid season.')