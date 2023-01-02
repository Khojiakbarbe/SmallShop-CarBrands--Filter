$(document).ready(function(){

    myCars(myHomeWork);

})



// Search

$("#navbarInput").on("keyup" , function(){
  let value = $(this).val().toLowerCase();
  let searchedElem = myHomeWork.filter(function(elem){
    return elem.nomi.toLowerCase().includes(value);
  })
  myCars(searchedElem)
})




  // companys

let brandName;

let myLength = document.querySelectorAll(".foo").length;

for(let i = 0; i < myLength; i++){
  document.querySelectorAll(".foo")[i].addEventListener("click" , function(){
    brandName = this.innerHTML;
    myBrandName(brandName)
  })
}

function myBrandName(carsName){
  let myCar = myHomeWork.filter((elem)=>{
    if(elem.company === carsName){
      return true;
    }else{
      return false;
    }
  })
  myCars(myCar)
}


let allCars;
$(".all").click(function(){
  allCars = this.innerHTML;
  takeAllCars(allCars);
})

function takeAllCars(forCars){
  let all = myHomeWork.filter((elem)=>{
    if(elem.all.toLowerCase() === forCars.toLowerCase()){
      return true;
    }
    else{
      return false;
    }
  })
  myCars(all)
}



// cost
let cost1
$(".costUntil20").click(function(){
  cost1 = 20000
  costUntil20(cost1);
})
function costUntil20(costUntil1){
  let forCost1 = myHomeWork.filter((elem)=>{
    if(elem.narxi <= costUntil1){
      console.log("working");
      return true;
    }else{
      console.log("not working");
      return false;
    }
  })
  myCars(forCost1)
}


let until40;
$(".costUntil40").click(function(){
  until40 = 40000;
  costUntil40(until40);
})

function costUntil40(costUntil2){
  let forCost2 = myHomeWork.filter((elem)=>{
    if(elem.narxi >= 20000 && elem.narxi <= until40){
      return true;
    }else{
      return false
    }
  })
  myCars(forCost2)
}


let until80;
$(".costUntil80").click(function(){
  until80 = 80000;
  costUntil80(until80);
})

function costUntil80 (costUntil3){
  let forCost3 = myHomeWork.filter((elem)=>{
    if(elem.narxi >= 40000 && elem.narxi <= costUntil3 ){
      return true;
    }else{
      return false;
    }
  })
  myCars(forCost3)
}

let until130;
$(".costUntil140").click(function(){
  until130 = 140000;
  costUntil130(until130);
})

function costUntil130(costUntil4){
  let forCost4 = myHomeWork.filter((elem)=>{
    if(elem.narxi > 80000 && elem.narxi <= costUntil4){
      return true
    }else {
      return false;
    }
  })
  myCars(forCost4)
}


let expensive140;
$(".costExpensive140").click(function(){
  expensive140 = 140000;
  expensiveFrom140(expensive140);
})

function expensiveFrom140(expensive){
  let expensiveCost = myHomeWork.filter((elem)=>{
    if(elem.narxi > 140000){
      return true;
    }else{
      return false;
    }
  })
  myCars(expensiveCost)
}







// Color


let colorTextLower;
let randomColor;
let colorLength = document.querySelectorAll(".color").length;
for(let i = 0; i < colorLength; i++){
  document.querySelectorAll(".color")[i].addEventListener("click" ,function(){
    colorTextLower = document.querySelectorAll(".color")[i].innerHTML;
    randomColor = colorTextLower.toLowerCase();
    findColor(randomColor);
  })
}

function findColor(myColors){
  let colorElement = myHomeWork.filter((elem)=>{
    if(elem.rangi === myColors){
      return true;
    }else{
      return false;
    }
  })
  myCars(colorElement)
}




//Years 


let year2010;
$(".yearBefore").click(function(){
  year2010 = 2010;
  before2010(year2010);
})

function before2010(yearBefore2010){
  let before2000 = myHomeWork.filter((elem)=>{
    if(elem.yili >= 2000 && elem.yili <= yearBefore2010){
      return true;
    }else {
      return false;
    }
  })
  myCars(before2000)
}


let year2013;
$(".until2013").click(function(){
  year2013 = 2013;
  search2013(year2013);
})
function search2013(for2013){
  let until2013 = myHomeWork.filter((elem)=>{
    if(elem.yili > 2010 && elem.yili <= for2013){
      return true;
    }else {
      return false;
    }
  })
  myCars(until2013)
}


let year2016;
$(".until2016").click(function(){
  year2016 = 2016;
  search2016(year2016);
})

function search2016 (for2016){
  let until2016 = myHomeWork.filter((elem)=>{
    if(elem.yili > 2013 && elem.yili <= for2016){
      return true;
    }else{
      return false;
    }
  })
  myCars(until2016);
}

let year2019;

$(".until2019").click(function(){
  year2019 = 2019;
  search2019(year2019);
})

function search2019(for2019){
  let until2019 = myHomeWork.filter((elem)=>{
    if(elem.yili > 2016 && elem.yili <= for2019){
      console.log("working");
      return true;
    }else {
      console.log("not working");
      return false;
    }
  })
  myCars(until2019);
}

let yearNow;
$(".untilNow").click(function(){
  yearNow = 2019;
  searchNow(yearNow);
})

function searchNow(forNow){
  let untilNow = myHomeWork.filter((elem)=>{
    if(elem.yili > forNow){
      return true;
    }else{
      return false;
    }
  })
  myCars(untilNow);
}





// function sortMinToMax(){
//   let minMax = myHomeWork.sort((a,b)=> {
//     return a.narxi - b.narxi
//   })
//   myCars(minMax)
// }

// function sortMinToMax(){
//   let nomiBoyicha = myHomeWork.sort((a,b)=>{
//     return a.rangi.localeCompare(b.rangi)
//   })
//   myCars(nomiBoyicha)
// }



function myLow(){
  let lowToHight = myHomeWork.sort((a,b)=> {
    return a.narxi - b.narxi
  })
  myCars(lowToHight)
}

function myHight(){
  let hightToLow = myHomeWork.sort((a,b)=>{
    return b.narxi - a.narxi
  })
  myCars(hightToLow)
}



function myCars(elements){
    $("#myTest").empty();

    elements.forEach(elem=>{
        let card = `<div class="col cardShadow">
        <div class="card h-100">
            <div class="images">
                <img src="${elem.rasmi}" class="card-img-top" alt="...">
            </div>
          <div class="card-body">
            <h5 class="card-title">${elem.nomi}</h5>
            <p class="card-text">${elem.rangi}</p>
            <h3 class="card-text">${elem.narxi} $</h3>
          </div>
          <div class="card-footer">
            <small class="text-muted">${elem.yili}</small>
          </div>
        </div>
      </div>`
      $("#myTest").append(card)
    })
}