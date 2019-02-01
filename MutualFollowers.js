// Initializing the global variables
let bobsFollowers = ['Aby','Caby','Saby','Naby'];
let tinasFollowers = ['Aby','Caby','Harol'];
let mutualFollowers = []

// Nested-Loop to compare two arrays
for (let aCounter = 0; aCounter < bobsFollowers.length; aCounter++)
  {
    for (let bCounter = 0; bCounter < tinasFollowers.length; bCounter++)
      {
        if (bobsFollowers[aCounter] == tinasFollowers[bCounter])
          {
              // Pushes similar names to an array
            mutualFollowers.push(tinasFollowers[bCounter])
          }
      }
  }

  // Prints the array with mutual friends
console.log('The mutual followers are: ' + mutualFollowers)