const mealButton = document.getElementById('meal');
const mealContainer = document.querySelector('.meal-container');

mealButton.addEventListener('click', () => {
    fetch(' https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        })
});

const createMeal = (meal) => {

    const ingredients = [];

    // extract all the ingredients of upto 20

    for (i = 0; i <= 20; i++) {
        if (meal[`strIngredients ${i}`]) {
            ingredients.push(
                `${meal[`ingredients ${1}`]} - ${meal[`strMeasures${1}`]}`
            );
        } else {
            // break the loop
            break;
        }
    }

    const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${
					meal.strCategory
						? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
						: ''
				}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${
					meal.strTags
						? `<p><strong>Tags:</strong> ${meal.strTags
								.split(',')
								.join(', ')}</p>`
						: ''
				}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${
			meal.strYoutube
				? `
		<div class="row" id="demo">
			<h5>Video Demo</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>`
				: ''
		}
	`;

    mealContainer.innerHTML = newInnerHTML;
};