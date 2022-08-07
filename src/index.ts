import {CanvasView} from "./view/CanvasView";
import {Ship} from "./elements/Ship";
// import {ShipObj} from "./setup";
// import {SHIP_URL} from './images/Ship.webp'
import SHIP_URL from './images/Ship.webp'
import {canvas, ShipX, ShipY, ShipImage, ShipWidth, ShipHeight, ShipSpeed} from "./setup";


function gameLoop(view: CanvasView, ship: Ship):void {
    view.clear();
    view.drawElement(ship);

    if(ship.isMovingLeft || ship.isMovingRight || ship.isMovingUp || ship.isMovingDown) {
        ship.moveShip()
    }


    requestAnimationFrame(() => gameLoop(view, ship))
}

function startGame(view: CanvasView):void {
    const ship = new Ship(ShipImage, ShipWidth, ShipHeight, ShipX, ShipY, ShipSpeed);
    gameLoop(view, ship);
}



// ArrowUp ArrowDown ArrowLeft ArrowRight

const view = new CanvasView('#PlayField');
view.initGame(startGame)









