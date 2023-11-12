/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// Declare and instantiate a variable to hold my name
let fullName = "Semih Aydin";

// Declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path of the image
let profilePicture = 'images/semih.jpg';




/* Step 3 - Element Variables */

// Get the HTML element with the id of 'name' and store it in a const variable named "nameElement"
const nameElement = document.getElementById('name');

// Get the HTML element with the id of 'food' and store it in a const variable named "foodElement"
const foodElement = document.getElementById('food');

// Get the element with the id of 'year' and store it in a variable named "yearElement"
const yearElement = document.querySelector('#year');

// Get the profile image element stored into a variable named "imageElement"
const imageElement = document.querySelector('#profile-image');


/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

// Declare an array variable to hold my favorite foods
let favoriteFoods = ['Pizza', 'Burger', 'Ice Cream'];

// Declare and instantiate a variable to hold another single favorite food item
let newFavoriteFood = 'Sushi';

// Add the value stored in this new variable to my favorite food array
favoriteFoods.push(newFavoriteFood);

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Modify the HTML element with the id of 'food' to display my favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');






