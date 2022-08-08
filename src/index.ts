import {CanvasView} from "./view/CanvasView";
import {Ship} from "./elements/Ship";
import {Alien} from "./elements/Alien";
import {Shoot} from "./elements/Shoot";
import {ShipX, ShipY, ShipImage, ShipWidth, ShipHeight, ShipSpeed,
LeftCanvasWall, RightCanvasWall, UpCanvasWall, DownCanvasWall, ShootImage} from "./setup";
import {createAliens} from './helpers';

function gameLoop(view: CanvasView, ship: Ship, aliens:Alien[], shoots:Shoot[]):void {
    view.clear();
    view.drawElement(ship);
    view.drawAliens(aliens);
    view.drawShoots(shoots);

    // Lock Canvas
    if(
        (ship.isMovingLeft && ship.X > LeftCanvasWall && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingRight && ship.X < (RightCanvasWall - ship.width) && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingUp && ship.Y > UpCanvasWall && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width)) ||
        (ship.isMovingDown && ship.Y < (DownCanvasWall - ship.height - 1.5) && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width))
    ) {
        ship.moveShip()
    }

    // Detect shoot outside canvas
    shoots.forEach((el) => {
        if(el.Y < 0) shoots = shoots.filter(shoot => shoot != el)
        el.shootUp();
    });

    // Create shoot, lock shoot series
    if(ship.isShooting) {
        const coords = ship.shipCoords;
        const X = coords[0] + ship.width/2 - 2.5;
        const Y = coords[1] - 5;
        const shoot = new Shoot(ShootImage, 5, 5, X, Y,3)
        if(ship.ItWasShoot === false) shoots.push(shoot)
        ship.setShooting = false;
    }

    requestAnimationFrame(() => gameLoop(view, ship, aliens, shoots))
}

function startGame(view: CanvasView):void {

    // Create Ship
    const ship = new Ship(ShipImage, ShipWidth, ShipHeight, ShipX, ShipY, ShipSpeed);
    // Aliens
    const aliens = createAliens();
    // Shoot List
    let shoots:Shoot[] = [];

    gameLoop(view, ship, aliens, shoots);
}

// ArrowUp ArrowDown ArrowLeft ArrowRight

const view = new CanvasView('#PlayField');
view.initGame(startGame);







