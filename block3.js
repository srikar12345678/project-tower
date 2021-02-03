class Bow {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.visibilty=255;
      this.width = width;
      this.height = height;
     // this.fill="grey"
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      if(this.body.speed>3){
        World.remove(world,this.body);
          this.visibilty=this.visibility-5;
        tint(255,this.visibilty);
        
      }
      else{
        
       
      //  push();
       // this.visibilty=this.visibility-5;
       // tint(255,this.visibilty);
      
    //  pop();
      
     
      rectMode(CENTER);
      fill(" grey");
      
      rect(pos.x, pos.y, this.width, this.height);
      }
      pop();
    }
  }
