class Polygon extends BaseClass {
    constructor(x,y,radius,options){       
        options= {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false

        }
        super(x,y,50,50);
        this.body = Bodies.circle(50,200,20)
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
         fill("yellow");
         ellipse(pos.x, pos.y, this.width, this.height);
         if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
    }
}