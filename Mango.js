class MANGO {
    constructor(x, y) {
        var prop = { isStatic: true,restitution :0.2,
            }
        this.body = Matter.Bodies.circle(x, y, 30, prop);
        Matter.World.add(world, this.body);
        this.I = loadImage("pictures/mango.png");
        this.r=30;
    }

    display() {
        var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.I, 0,0,60,60)
		pop()
      
    }
}
