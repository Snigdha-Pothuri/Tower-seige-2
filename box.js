class Box  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      push(); 
      var pos =this.body.position;
     rect(pos.x, pos.y, this.width, this.height);
      rectMode(CENTER);
      pop();
     } 
  else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility); 
      //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      rect(this.pos.x, this.body.pos.y,50,50);
      pop();
    }
   
     }
  
  
  
  
}
}