
const searchQuery = document.getElementById('search-input');
const mealResult =  document.getElementById('search-result');

// Initialize local storage (if not already done)
if (!localStorage.getItem('favourite')) {
    localStorage.setItem('favourite', JSON.stringify([]));
}

function addToList() {
    const storedArray = JSON.parse(localStorage.getItem('favourite'));
    storedArray.push(this.name);
    localStorage.setItem('favourite', JSON.stringify(storedArray));
}

function removeMeal(indexToRemove) {
    const storedArray = JSON.parse(localStorage.getItem('favourite'));
    storedArray.splice(indexToRemove, 1);
    localStorage.setItem('favourite', JSON.stringify(storedArray));
}

function addMeal(meal){
    const listContainer = document.createElement('li');
    mealResult.appendChild(listContainer);
    const {idMeal: id, strMeal: mealName, strMealThumb: imageURL, strInstructions: description, strArea} = meal;

    listContainer.innerHTML = 
    `<a href="./mealDetail.html?i=${id}" target="_blank"> ${mealName} </a>
    <button type="button" name=${mealName}> Add </button>`;
    listContainer.lastChild.addEventListener('click', addToList);
}

async function addMeals(){
    console.log("MAKING");
    mealResult.textContent = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`;
    const response = await fetch(url);
    const data = (await response.json()).meals;
    data.forEach(addMeal);
}

searchQuery.addEventListener('input',(e)=>{
    mealResult.textContent = '';
    searchQuery.value && addMeals();
});
