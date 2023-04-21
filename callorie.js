let myInput = document.querySelector('.chosee-a-food');
let addFoodButton = document.querySelector('.add-food-item');
let nutritionAPi = 'https://api.api-ninjas.com/v1/nutrition?query=';
let mySection = document.querySelector('.food-section');

let myApiKey = 'lIeAEHIZwc1iZ5RjLaVXLw==A4Z2GxztGE27wq8R';

function addADiv(name, amount, callories){
    let div = document.createElement('div');
    let foodItem = document.createElement('p');
    let foodServing = document.createElement('p');
    let foodCallories = document.createElement('p');
    let grams = document.createElement('span');
    let kcal = document.createElement('span');
    kcal.classList.add('callories');
    div.classList.add('food-item');
    foodItem.classList.add('food-name');
    foodServing.classList.add('serving-size');
    foodCallories.classList.add('callorie-amount');
    grams.classList.add('grams')
    foodItem.append(name);
    foodServing.append(amount);
    foodCallories.append(callories);
    div.append(foodItem);
    div.append(foodServing);
    div.append(foodCallories);
    grams.append('g');
    kcal.append('kcal')
    foodServing.append(grams);
    foodCallories.append(kcal);

    return div;
}

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': myApiKey,
    },
};

let foodObject = {};

async function getNutrition(food){
    let createdURL = nutritionAPi + food;
    console.log(food, createdURL);
    const response = await fetch(createdURL, options);
    const data = await response.json();
    foodObject.food = await data[0];
    let foodName = await foodObject.food.name;
    let foodAmount = await foodObject.food.serving_size_g;
    let foodCallories = await foodObject.food.calories;
    mySection.append(addADiv(foodName, foodAmount, foodCallories))
}


addFoodButton.addEventListener('click', function(){
    let inputValue = myInput.value;
    let data = getNutrition(inputValue);
    setTimeout(function(){
        myInput.value = '';
    }, 800)
})
