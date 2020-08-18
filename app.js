const mealButton = document.getElementById('meal');
const mealContainer = document.querySelector('.meal-container');

mealButton.addEventListener('click', () =>{
    fetch(' https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res =>res.json())
    .then(res =>{
        createMeal(res.meals[0]);
    })
    .catch(e =>{
        console.warn(e);
    })
});