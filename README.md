The meal app can be used to search meals. It has favorite section to store favorite meals in a list and Details section to view meal details. 

## Features

- Search for meals by name.
- View detailed information about a meal.
- Add meals to favorites and remove them.
- Persistent storage of favorite meals using local storage.

## Usage

To use the application, simply open `index.html` in a web browser.

## Project Structure

- `index.html`: Home page with search functionality.
- `mealdetail.html`: Page displaying meal details.
- `favMeals.html`: Page displaying favorite meals.
- `styles.css`: CSS stylesheet for styling the pages.
- `index.js`: JavaScript file for home page functionality.
- `mealdetail.js`: JavaScript file for meal detail page functionality.
- `favMeal.js`: JavaScript file for favorite meals page functionality.

## API
This project uses meal api (https://www.themealdb.com/api.php) to search for a meal. The favorite meals are added to local storage of browser in 'favourite' array. 
The endpoints used in API are:
1. Search meal by name:
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
To search meal dynamically as user types in search field.
3. Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
To render mealDetails page through id of the queried meal.

## Dependencies

- Bootstrap 5.3.3: CSS framework used for styling.

## Hosted link:
https://atulkishor.github.io/MealApi/
