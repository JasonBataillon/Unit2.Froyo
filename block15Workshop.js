//This is the prompt for the user to input their flavors into with an example placeholder in the prompt
const userInput = prompt(
  'Please enter a list of comma-separated froyo flavors.',
  'Example: vanilla, strawberry, chocolate, ...'
);
// This splits the flavors listed into a string of the entries.
const froyoFlavorArray = userInput.split(',');
console.log(froyoFlavorArray);

//This creates a variable to store the resulting
const countDuplicates = (arr) => {
  //This creates an empty object that will hold the counts of the array values.
  const count = {};
  //This tells the browser to iterate each item within the array.
  arr.forEach((froyoFlavorArray) => {
    //This checks if the flavor is not already in the count object.
    if (!count[froyoFlavorArray]) {
      //If the flavor isn't in the object already, it assigns the flavor as a key in the count object and makes it's value a 1.
      count[froyoFlavorArray] = 1;
      //If the flavor is already in the count object, then it adds +1 to its value.
    } else {
      count[froyoFlavorArray]++;
    }
  });
  //After the loop finishes, this assigns the count object to the countDuplicates variable.
  return count;
};
//This creates a new variable which and stores the function countDuplicates with the froyoFlavorArray argument.
const result = countDuplicates(froyoFlavorArray);
console.log(result);
