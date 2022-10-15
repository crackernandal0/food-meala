const favlist=document.getElementById('meal');
const homebtn=document.getElementById('recipe-home-btn');
let html="";
function callingApi(foodId){
    console.log(foodId);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(response=>response.json())
    .then(data=>{
        let favone=data.meals;
        favone=favone[0];
       
        html+=`
        <div class="meal-item" data-id="${favone.idMeal}">
                    <div class="meal-img">
                        <img src="${favone.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${favone.strMeal}</h3>
                        <button type="button" onclick="setFavHelper(${favone.idMeal})" class="btn btn-secondary " id="fav-btn-${favone.idMeal}"><i class="fa-brands fa-gratipay"></i></button>
                        <a href="./details.html?id=${favone.idMeal}"  class="details-btn">Details</a>
                    </div>
                </div>
         `;
         favlist.innerHTML=html; 

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

// display all fabourite items
let favItems=getAllFav();
for(foodId of favItems){
    callingApi(foodId);

}

homebtn.addEventListener('click',function(){
    location.href='./index.html';
})