var buildingImg,building;
var girlImg,girl;
var ledgeImg,ledge,ledgegroup;
var gameState="play"


function preload(){
buildingImg=loadImage("building.png")
girlImg=loadImage("girl.png")
ledgeImg=loadImage("ledge.png")

}

function setup() {
createCanvas(600,600);
building=createSprite(300,300);
building.addImage("building",buildingImg)
building.velocityY=1;
building.scale=7;

ledgegroup=createGroup()
blockgroup=createGroup()


girl=createSprite(300,300,50,50)
girl.addImage(girlImg)
girl.scale=0.2;
girl.setCollider("rectangle",0,0,300,650)


}

function draw() {
background(200);

obstacle()
drawSprites()
   if(gameState=="play"){
    if(building.y > 400){
        building.y = 300
      }
      
       if(keyDown("left")){
        girl.x-=3
       }
        if(keyDown("right")){
            girl.x+=3
        }
        if(keyDown("space")){
            girl.velocityY=-10
        }
    
       girl.velocityY+=0.8;
       
    
       if(frameCount%200==0){
        building.velocityY=10;
       }
       if(frameCount%800==0){
        building.velocityY=20;
       }
    
       if(frameCount%1100==0){
        building.velocity=40;
       }


       if(frameCount%1200==0){
        building.velocity=80;
       }


       if(frameCount%1400==0){
        building.velocity=100;
       }


       if(ledgegroup.isTouching(girl)){
        girl.velocityY=0
       }
      

       if( girl.y>650||blockgroup.isTouching(girl)){
        girl.destroy()
        gameState="end"
      }
        

 }
   
 else if(gameState=="end"){
    fill("black")
    textSize(60)
    text("GAME OVER!",110,250)
    destroy()
   }
  

  
}


function obstacle(){
 if(frameCount%150==0){
 var ledge=createSprite(200,-50)
    ledge.addImage(ledgeImg)
    ledge.velocityY=1;
    ledge.x=Math.round(random(100,1000))
    ledgegroup.add(ledge)
    ledge.debug=false
    ledge.setCollider("rectangle",0,0,ledge.width,30)
    block=createSprite(ledge.x,ledge.y+20,ledge.width,2)
    block.debug=true
    block.velocityY=1;
    blockgroup.add(block)
    }
}
