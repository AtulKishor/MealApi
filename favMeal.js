const mealList = document.querySelector('.mealList');
const list = JSON.parse(localStorage.getItem('favourite'));

function removeMeal(indexToRemove) {
    list.splice(indexToRemove, 1);
    localStorage.setItem('favourite', JSON.stringify(list));
    renderPage();
}

function renderPage(){
    mealList.innerHTML = '';
    if (list.length>0){
        for (let i in list){
            const container = document.createElement('li');
            mealList.appendChild(container);
            container.innerHTML = 
            `<span>${list[i]}</span>
            <button type="button" class="button button-danger remove" id=${i}>Remove</button>`;
            container.lastChild.addEventListener('click',removeMeal,parseInt(i));
        };
    } else {
        mealList.innerHTML = '<p> No Favourites items to display.</p>';
    }
}
renderPage();