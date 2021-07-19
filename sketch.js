var dog,sadDog,happyDog;
var Stockit,FeedtheDoggu
var foodObj
 
var database


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  feed=createButton("FeedtheDoggu")
  feed.position(780,100)
  feed.mousePressed(feedDog)

  stockit=createButton("Stock it")
  stockit.position(910,100)
  stockit.mousePressed(addFoods)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
 food=new Food(720,200,40,40)
}

function draw() {
  background(46,139,87);
  food.display();
  drawSprites();
}

//function to read food Stock
function feedDog(){
dog.addImage(happyDog);
if(foodObj.getFoodStock()<=0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)


}
}

//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
foodS++;
database.ref('/').updtae({
Food:foods
})
}