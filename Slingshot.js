class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bird.body,
            pointB: constraintLog.body,
            stiffness:0.04,
            length:10
    
        } 
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB.position;
        strokeWeight(4);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}