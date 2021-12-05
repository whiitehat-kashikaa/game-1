class Basket extends BaseClass{

    constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("images/basket.png");
    }

    display(){
        this.body.position.x = 500;
        this.body.position.y = 500;
        super.display();
    }
}