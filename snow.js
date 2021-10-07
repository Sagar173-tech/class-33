class Snow {
    constructor(x,y,r) {
       this.r = r;
       this.body = Bodies.circle(x,y,this.r);
       this.image = loadImage(random("snow4.webp", "snow5.webp"));
       World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(radius);
        ellipse(0, 0, this.r, this.r);
        pop ();  

    }
}