class Ground {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,400,15,options);
      this.width = 400;
      this.height = 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
      pop();
    }
  };