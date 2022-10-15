const searchbtn=document.getElementById('search-btn');
const meallist=document.getElementById('meal');
searchbtn.addEventListener('click',getmeallist);

function getmeallist(){
    let searchinputtxt=document.getElementById('search-input').value.trim();
    console.log(searchinputtxt);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchinputtxt}`)
    .then(response => response.json())
    .then(data => {
        let html="";
        if(data.meals){
            data.meals.forEach(meal => {
                html+=`
                <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <button type="button" onclick="setFavHelper(${meal.idMeal})" class="btn btn-secondary " id="fav-btn-${meal.idMeal}"><i class="fa-brands fa-gratipay"></i></button>
                        <a href="./details.html?id=${meal.idMeal}"  class="details-btn">Details</a>
                    </div>
                </div>
                `;
                
            });
            meallist.classList.remove('notfound');
        }else{
            html="Sorry , no meal available";
            meallist.classList.add('notfound');
    
        }
        meallist.innerHTML=html;

    })

  
} 


//fav//
function setFavHelper(foodId){
    if(setFav(foodId)){
      document.getElementById('fav-btn-'+foodId).className="btn btn-danger ";
    }else{
      document.getElementById('fav-btn-'+foodId).className="btn btn-secondary ";
    }
  }
