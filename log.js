class log{
    constructor(x,y,h,a){
        var options={
           restitution:0.5,
           friction:1,
           density:1
        }
            this.body=Bodies.rectangle(x,y,20,h,options)
            Matter.Body.setAngle(this.body,a)
            this.width=20
            this.height=h
            World.add(myworld,this.body)
    }


display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    stroke("brown")
    strokeWeight(4)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
}
}