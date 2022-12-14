

export class Ship {
    public img:HTMLImageElement;
    public width:number;
    public height:number;
    public X:number;
    public Y:number;
    private speed:number;
    private moveLeft: boolean;
    private moveRight: boolean;
    private moveUp: boolean;
    private moveDown: boolean;
    private ShipShooting: boolean;
    private WasShoot:boolean;

    constructor(img:HTMLImageElement, width:number, height:number, X:number, Y:number, speed:number) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.X = X;
        this.Y = Y;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.ShipShooting = false;
        this.WasShoot = false;
        this.speed = speed;
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    get isMovingUp():boolean {
        return this.moveUp;
    }

    get isMovingDown():boolean {
        return this.moveDown;
    }

    get isMovingLeft():boolean {
        return this.moveLeft;
    }

    get isMovingRight():boolean {
        return this.moveRight;
    }

    get isShooting():boolean {
        return this.ShipShooting;
    }

    get shipCoords():number[] {
        return [this.X, this.Y];
    }

    get ItWasShoot() {
        return this.WasShoot;
    }

    set setShooting(shooting:boolean) {
        this.ShipShooting = shooting;
        this.WasShoot = !shooting;
    }

    moveShip():void {
        if(this.moveUp) this.Y = this.Y - 5;
        if(this.moveDown) this.Y = this.Y + 5;
        if(this.moveLeft) this.X = this.X - 5;
        if(this.moveRight) this.X = this.X + 5;
    }
    handleKeyUp = (e: KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = false;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.moveRight = false;
        if(e.code === "ArrowUp" || e.key === "ArrowUp") this.moveUp = false;
        if(e.code === "ArrowDown" || e.key === "ArrowDown") this.moveDown = false;
        if(e.code === "Space" || e.key === "Space" && this.WasShoot === true) this.WasShoot = false;
    }

    handleKeyDown = (e: KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = true;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.moveRight = true;
        if(e.code === "ArrowUp" || e.key === "ArrowUp") this.moveUp = true;
        if(e.code === "ArrowDown" || e.key === "ArrowDown") this.moveDown = true;
        if(e.code === "Space" || e.key === "Space" && !this.WasShoot) this.ShipShooting = true;
    }
}