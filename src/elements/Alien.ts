export class Alien {
    public img:HTMLImageElement;
    public width:number;
    public height:number;
    public X:number;
    public Y:number;
    private energy:number;
    private moveAlien:boolean;
    // private alienMoved:boolean;

    constructor(img:HTMLImageElement, width:number, height: number, X:number, Y:number, energy:number) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.X = X;
        this.Y = Y;
        this.energy = energy;
        this.moveAlien = false;
        // this.alienMoved = false;
    }

    moveAlienDown() {
        if(this.moveAlien === false) {
            this.Y = this.Y + 5;
            this.moveAlien = true;
        }
    }

    isAlienReachedDown(downWall: number):boolean {
        if((this.Y + this.width) > downWall) {
            return true;
        }
        return false;
    }

    clearAlienMovement() {
        this.moveAlien = false;
    }

    get GetAlienEnergy():number {
        return this.energy
    }

    set SetAlienEnergy(current:number) {
        this.energy = current;
    }
}