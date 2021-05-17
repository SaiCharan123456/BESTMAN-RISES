class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.batman = loadImage("Walking Frame/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
          image(this.image,pos.x-10,pos.y+80,250,250);
       // umbrella.visible = true;
        if(frameCount >= 200){
            //image(this.image,pos.x-10,pos.y+60,5,5);
          image(this.batman,pos.x+20,pos.y+10,400,400);
           // this.umbrella.addImage(this.batman);
           
          //umbrella.remove()
        }
    }
}
