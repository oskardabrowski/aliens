import {CanvasView} from "./view/CanvasView";
import {Ship} from "./elements/Ship";
import {Alien} from "./elements/Alien";
import {ShipX, ShipY, ShipImage, ShipWidth, ShipHeight, ShipSpeed,
LeftCanvasWall, RightCanvasWall, UpCanvasWall, DownCanvasWall} from "./setup";
import {createAliens} from './helpers';

function gameLoop(view: CanvasView, ship: Ship, aliens:Alien[]):void {
    view.clear();
    view.drawElement(ship);
    view.drawAliens(aliens)

    // Lock Canvas
    if(
        (ship.isMovingLeft && ship.X > LeftCanvasWall && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingRight && ship.X < (RightCanvasWall - ship.width) && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingUp && ship.Y > UpCanvasWall && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width)) ||
        (ship.isMovingDown && ship.Y < (DownCanvasWall - ship.height - 1.5) && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width))
    ) {
        ship.moveShip()
    }


    requestAnimationFrame(() => gameLoop(view, ship, aliens))
}

function startGame(view: CanvasView):void {

    // Create Ship
    const ship = new Ship(ShipImage, ShipWidth, ShipHeight, ShipX, ShipY, ShipSpeed);
    // Aliens
    const aliens = createAliens();

    console.log(aliens)

    gameLoop(view, ship, aliens);
}



// ArrowUp ArrowDown ArrowLeft ArrowRight

const view = new CanvasView('#PlayField');
view.initGame(startGame)









