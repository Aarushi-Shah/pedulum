// class Bob {
//     constructor(x,y,radius,options){
//       options= {
//         'restitution':0.8,
//         'friction':1.0,
//         'density':1.0,
//         'isStatic' : false
//       }
//        // this.image = loadImage("paper.png");
//       this.body = Bodies.circle
//       World.add(world,this.body)
//     }
//   //
//     display() {  
//         var pos = this.body.position;
//         ellipseMode(RADIUS);
//         fill("red");
//     }
//   }
  
// //   class Dustbin extends BaseClass {
// //     constructor(x, y){
// //       super(x,y,100,100,25);
// //       this.image = loadImage("trashcan.png");
// //     }
  
// //     display() {  
// //       super.display();
// //     }
// //   }

class Bob extends BaseClass {
    constructor(x, y, radius){
      super(x,y,100,100,radius);
      //this.image = loadImage("paper.png");
      //this.body = Bodies.circle
    World.add(world,this.body)
}
  
    display() {  
      super.display();
      //bob.diameter = this.bob.width
      fill("red");
    }
  }