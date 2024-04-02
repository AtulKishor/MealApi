
const mealHead = document.getElementById('meal-name');
const image = document.getElementById('image');
const caption = document.getElementById('caption');
const description = document.getElementById('description');

const mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php${window.location.search}`;

async function renderPage(){
    const response = await fetch(mealURL);
    const data = (await response.json()).meals[0];
    const {strMeal: name, strMealThumb: imageURL, strInstructions: desc, strArea: from} = data;
    mealHead.textContent = name;
    image.src = imageURL;
    image.alt = `${name} image`;
    caption.textContent = `${from} ${name}`;
    description.textContent = desc;
}

renderPage();