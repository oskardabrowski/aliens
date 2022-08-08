export class Alien {
    public img:HTMLImageElement;
    public width:number;
    public height:number;
    public X:number;
    public Y:number;
    private energy:number;

    constructor(img:HTMLImageElement, width:number, height: number, X:number, Y:number, energy:number) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.X = X;
        this.Y = Y;
        this.energy = energy;
    }
}