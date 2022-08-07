import {CanvasView} from "./view/CanvasView";
import {Ship} from "./elements/Ship";
// import {ShipObj} from "./setup";
// import {SHIP_URL} from './images/Ship.webp'
import SHIP_URL from './images/Ship.webp'
import {ShipX, ShipY, ShipImage, ShipWidth, ShipHeight, ShipSpeed,
LeftCanvasWall, RightCanvasWall, UpCanvasWall, DownCanvasWall} from "./setup";


function gameLoop(view: CanvasView, ship: Ship):void {
    view.clear();
    view.drawElement(ship);

    // Lock Canvas
    if(
        (ship.isMovingLeft && ship.X > LeftCanvasWall && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingRight && ship.X < (RightCanvasWall - ship.width) && ship.Y > UpCanvasWall && ship.Y < (DownCanvasWall - ship.height - 5)) ||
        (ship.isMovingUp && ship.Y > UpCanvasWall && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width)) ||
        (ship.isMovingDown && ship.Y < (DownCanvasWall - ship.height - 5) && ship.X > LeftCanvasWall && ship.X < (RightCanvasWall - ship.width))
    ) {
        ship.moveShip()
    }


    requestAnimationFrame(() => gameLoop(view, ship))
}

function startGame(view: CanvasView):void {

    // Create Ship
    const ship = new Ship(ShipImage, ShipWidth, ShipHeight, ShipX, ShipY, ShipSpeed);
    gameLoop(view, ship);
}



// ArrowUp ArrowDown ArrowLeft ArrowRight

const view = new CanvasView('#PlayField');
view.initGame(startGame)









