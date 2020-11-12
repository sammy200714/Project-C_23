class Sides{
    constructor(x,y,w,h){
        var side_options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,w,h,side_options);
        World.add(world,this.body);

    this.width = w;
    this.height = h;

    }

    present(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}