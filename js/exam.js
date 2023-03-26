// nav
let Leftside = $('#Leftside').width()
 $('#openn').animate({left:`-${Leftside}`},1000)

$('#clickIcon').click(function(){
    let left = $('#openn').css('left')
    if(left=='0px'){
    $('#openn').animate({left:`-${Leftside}`},1000)
    new WOW().init()
    }else{
        $('#openn').animate({left:'0px'},1000)
        new WOW().init()

    }
})



// openbage
let array =[]
let Data

async function getData(){
    Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
   let result = await Data.json()
     display(result.meals)
}
getData() 


let cartona=``
function display(array){
for (let i=0 ; i<array.length;i++){
    cartona += `<div class="col-md-3 cursor-pointer mt-4">
    <div class="item overflow-hidden position-relative">
    <img src="${array[i].strMealThumb}" alt="" class="mealImg w-100">
    <div class="caption d-flex align-items-center position-absolute w-100 h-100" >
        <p class="ms-2 fs-1 textSize">${array[i].strMeal}</p>
    </div>
    </div>
</div>`
}
document.getElementById('mealRow').innerHTML=cartona
}

$('.caption').click(function(){
$('#bage1').show(1000)



}   
    )


////////////////categories//////////////////

// let array1 =[]
// let Data1

// async function getCatigory(){
//     Data1 = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
//    let result1 = await Data1.json()
//      display(result1.categories)
// }
//  getCatigory()
    
 

// let cartona1=``
// function display(array1){
// for (let i=0 ; i<array1.length;i++){
//     cartona1 += `
//     <div class="col-md-3 cursor-pointer my-3">
//     <div class="item overflow-hidden position-relative">
//     <img src="${array1[i].strCategoryThumb}" alt="" class="catigoryImg w-100">
//     <div class="caption text-center position-absolute w-100 h-100 rounded-3" >
//         <h3 class=" mt-3">${array1[i].strCategory}</h3>
//      <p> ${array1[i].strCategoryDescription}</p>
//     </div>
//     </div>
// </div>
// `
// }
// document.getElementById('Categories').innerHTML=cartona1
// }

/////////////////// Ingredients//////////////////
// let array2 =[]
// let Data2

// async function getIngredients(){
//     Data2 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
//    let result2 = await Data2.json()
//      display(result2.meals)
//      console.log('sds')
// }
// getIngredients()
    
 

// let cartona2=``
// function display(array2){
// for (let i=0 ; i<20;i++){
//     cartona2 += `
//     <div class="col-md-3 cursor-pointer my-3 h-25 ">
//               <div class="item overflow-hidden position-relative">
//               <i class=" text-white fa-solid fa-drumstick-bite fa-4x"></i>
//                   <h3 class=" mt-3 text-white">${array2[i].strIngredient}</h3>
//                <p class="text-white height_p"> ${array2[i].strDescription}</p>
//               </div>
//               </div>
// `
// }
// document.getElementById('Ingredients').innerHTML=cartona2
// }



/////////////// strArea//////////////
// let array3 =[]
// let Data3

// async function getstrArea(){
//     Data3 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
//    let result3 = await Data3.json()
//      display(result3.meals)
//      console.log('sds')
// }
// getstrArea()
    
 

// let cartona3=``
// function display(array3){
// for (let i=0 ; i<array3.length;i++){
//     cartona3 += `
//     <div class="col-md-3 cursor-pointer mt-3  text-center">

//               <i class=" text-white fa-solid fa-drumstick-bite fa-4x"></i>


//              <h3 class=" mt-3 text-white text-center">${array3[i].strArea}</h3>
//               </div>
// `
// }
// document.getElementById('strArea').innerHTML=cartona3
// }





///////////getCanadianarea3/////////////

// let array4 =[]
// let Data4

// async function getCanadian (){
//     Data4 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
//    let result4 = await Data4.json()
//      display(result4.meals)
// }
// getCanadian()
    
 

// let cartona4=``
// function display(array4){
// for (let i=0 ; i<array4.length;i++){
//     cartona4 += `

//     <div class="col-md-3 cursor-pointer mt-4">
//          <div class="item overflow-hidden position-relative">
//          <img src="${array4[i].strMealThumb}" alt="" class="mealImg w-100">
//          <div class="caption d-flex align-items-center position-absolute w-100 h-100" >
//              <h2 class="ms-2 fs-1 textSize">${array4[i].strMeal}</h2>
//          </div>
//          </div>
//      </div>
// `
// }
// document.getElementById('Canadian ').innerHTML=cartona4
// }





// Canad


// let array5 =[]
// let Data5

// async function getCanadian (){
//     Data5 = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//    let result5 = await Data5.json()
//      display(result5.meals)
// }
// getCanadian()
    
 

// let cartona5=``
// function display(array5){
// for (let i=0 ; i<array5.length;i++){
//     cartona5 += `

//     <div class="col-md-4 mt-5">
//         <img src="${array5[i].strCategoryThumb}" class="w-100">
//          <h2>${array5[i].strCategory}</h2>
//          </div>
//          <div class="col-md-8 mt-5">
//          <h2>Instructions</h2>
//          <p>${array5[i].strCategoryDescription} </p>
//          <h2> Area : ${array5[i].strArea}</h2>
//          <h2>Category : ${array5[i].strCategory}</h2>
//          <h2>Recipes :</h2>
//          <div class="container">
//          <div class="row">
//           <ul class="list-unstyled d-flex  flex-wrap">
//             <li class="btn btn-info m-1 p-1 xx">1 cup  Lentils</li>
//             <li class="btn btn-info m-1 p-1">1 large Onion</li>
//             <li class="btn btn-info m-1 p-1">1 large Carrots</li>
//             <li class="btn btn-info m-1 p-1">1 tbs Tomato Puree</li>
//            <li class="btn btn-info m-1  ">2 tsp Cumin</li>
        
//             <li class="btn btn-info m-1 p-1">1 tsp  Paprika</li>
//            <li class="btn btn-info m-1 p-1">1/2 tsp Mint</li>
//             <li class="btn btn-info m-1 p-1">1/2 tsp Thyme</li>
//             <li class="btn btn-info m-1 p-1">1/4 tsp Black Pepper</li>
//             <li class="btn btn-info m-1 p-1">1/4 tsp Red Pepper Flakes</li>
        
//             <li class="btn btn-info m-1 p-1">4 cups  Vegetable Stock</li>
//             <li class="btn btn-info m-1 p-1">1 cup  Water</li>
//             <li class="btn btn-info m-1 p-1">Pinch Sea Salt</li>
//          </div>
//          </div>
//          <h2>Tags : </h2>
//          <button class="btn btn-danger text-white mt-1 text-decoration-none">Soup</button>
//      <div class="d-flex-wrape my-3">
//          <button class="btn btn-success text-white ">${array5[i].strSource}</button>
//                              <button class="btn btn-danger text-white ">        ${array5[i].strYoutube}  </button>
//        </div>
        
        
        
//         </div>
        
// `
// }
// document.getElementById('Canad ').innerHTML=cartona5
// }


