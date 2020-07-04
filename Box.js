class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill("red");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
  };