class REC {
    constructor(x,y,width,height){
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;   
      rotate(angle);
      var pos=this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      
    }
};


  