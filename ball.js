
class ball {
  constructor(x) {
    var options = {
      'isStatic' : false,
      'restitution' : 1,
      'fricton': 0,
      'density': 0.8
    }
    this.body = Bodies.circle(x,350,15,options);
    this.width = 30;
    console.log(this.body)
    this.height = 30;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    fill("red")
    ellipseMode(RADIUS);
    ellipse(0,0,this.width,this.height);
    pop();
  }
  }
