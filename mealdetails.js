const mealdetailscontent=document.querySelector('.meal-details-content');
const recipeclose=document.getElementById('recipe-close-btn');
const url=window.location.href;
var detailsclose=document.getElementById('recipe-close-btn');



detailsclose.addEventListener('click',function(){
    window.history.go(-1);

})

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${url.split("?id=")[1]}`)
.then(response => response.json())
.then(data=> mealRecipeModal(data.meals));
 //create modal//
 function mealRecipeModal(meal){
    meal=meal[0];
    let html=`
    <h2 class="recipe-title">${meal.strMeal}</h2>
            <p class="recipe-category">${meal.strCategory}</p>
            <div class="recipe-instruct">
                <h3>Instructions:</h3>
                <p>${meal.strInstructions}</p>
            </div>
            <div class="recipe-meal-img">
                <img src="${meal.strMealThumb}"alt="">
            </div>
            <div class="recipe-link">
                <a href="${meal.strYoutube}" >Watch video</a>
            </div>
    
    `;
    // console.log(html);
    mealdetailscontent.innerHTML=html;

 }

