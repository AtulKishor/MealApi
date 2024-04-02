The meal app can be used to search meals. It has favorite section to store favorite meals and Details section to view meal details. 

This project uses meal api (https://www.themealdb.com/api.php) to search for a meal. The favorite meals are added to local storage of browser in 'favourite' array. 
The endpoints used in API are:
1. Search meal by name:
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
To search meal dynamically as user types in search field.
3. Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
To render mealDetails page through id of the queried meal.

The favorite meal section has remove button to remove the meal from local storage of the browser.

