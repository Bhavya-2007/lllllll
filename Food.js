class Food{
    constructor(x,y,width,height) {
        var foodStock
        this.image = loadImage("Milk.png");
        
      }
     
      
      display(){
          var x=80,y=100
          imageMode(CENTER)
          image(this.image,720,200,40,40)
          if(this.getfoodstock!=0){
              for(var i=0;i<this.getfoodStock;i++){
                  if(i%10==0){
                    x=80;
                    y=y+50
                  }
                  image(this.image,x,y,50,50)
                  x=x+30

              }
          }
      }
    }