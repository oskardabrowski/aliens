export class Shoot {
    public img:HTMLImageElement;
    public width:number;
    public height:number;
    public X:number;
    public Y:number;
    private speed:number;

    constructor(img:HTMLImageElement, width:number, height:number, X:number, Y:number, speed:number) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.X = X;
        this.Y = Y;
        this.speed = speed;
    }

    shootUp() {
        this.Y = this.Y - this.speed;
    }
}