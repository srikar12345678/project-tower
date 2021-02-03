class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.visibilty=255;
      this.height = height;
     // this.fill="pink"
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
        
       // World.remove(world,this.body);
       // push();
       
      
     // pop();
      
      
      rectMode(CENTER);
      fill(" pink");
      
      rect(pos.x, pos.y, this.width, this.height);
    }
    pop();
    }
  }
