class BaseClass{
    constructor(x, y, width, height, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.width = width;
        this.height = height;
        World.add(engine.world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
         fill("yellow");
         ellipse(pos.x, pos.y, 50, 50);

       // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}