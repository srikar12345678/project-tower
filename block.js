class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     // this.fill="blue";
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      var pos =this.body.position;
      push();
      if(this.body.speed>3){
        this.visibilty=this.visibility-5;
        tint(255,this.visibilty);

        World.remove(world,this.body);

        
      }
      else{

        
      
      

       

      rectMode(CENTER);
      fill("  blue");
      
      rect(pos.x, pos.y, this.width, this.height);
      }
      pop();
    }
  }
