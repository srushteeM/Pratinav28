class STONE {
    constructor(x, y) {
        var options={
			isStatic:false,
			restitution:0.2,
			friction:1,
			density:1.2
			}
        this.body=Matter.Bodies.circle(x, y, 25, options)
        this.x=x;
		this.y=y;
		//this.r=r
        Matter.World.add(world, this.body);
        this.I = loadImage("pictures/stone.png");
    }

    display() {
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
      //  fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.I, 0,0,50, 50)
        pop()
    }
}