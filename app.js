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

const createMeal = (meal) =>{

    const ingredients=[];

    // extract all the ingredients of upto 20

    for(i = 0; i<=20; i++){
        if(meal[`strIngredients ${i}`]){
            ingredients.push(
                `${meal[`ingredients ${1}`]} - ${meal[`strMeasures${1}`]}` 
            );
        }else{
            // break the loop
            break;
        }
    }
}