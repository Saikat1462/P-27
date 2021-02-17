class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world, this.body); 
    }
    display() {
        var pos =this.body.position;
        fill("green")
        circle(pos.x,pos.y,this.radius)
    }
}