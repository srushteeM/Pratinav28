class LIN {
    constructor(a, b) {
        var prop = { bodyA: a, pointB: b, stiffness: 0.004, length: 1 }
        this.l = Matter.Constraint.create(prop);
        Matter.World.add(world, this.l);
        this.aa = a;
        this.bb=b
    }

    shoot() {
        this.l.bodyA = null;
    }

    join(body) {
        this.l.bodyA = body;
    }

    display() {
        if (this.l.bodyA) {
            var A = this.aa.position;
            var B = this.bb;
            strokeWeight(7)
            line(A.x, A.y, B.x, B.y)
        }
    }
}