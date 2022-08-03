import {CanvasView} from "./view/CanvasView";
import SHIP_URL from './images/Ship.webp';

const canvas:HTMLCanvasElement = document.querySelector('#PlayField');
const ShipX:number = (canvas.width /2) - (15/2);
const ShipY:number = (canvas.height /2) - (15/2);


const image = new Image();
image.src = SHIP_URL;

const ShipObj: {img: HTMLImageElement, width:number, height:number, X:number, Y:number} = {
    img: image,
    width: 15,
    height: 15,
    X: ShipX,
    Y: ShipY
}


function gameLoop(view: CanvasView):void {
    view.clear();
    view.drawShip(ShipObj.img, ShipObj.width, ShipObj.height, ShipObj.X, ShipObj.Y)

    requestAnimationFrame(() => gameLoop(view))
}

function startGame(view: CanvasView):void {
    gameLoop(view)
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') ShipObj.Y = ShipObj.Y - 5;
    if(e.key === 'ArrowDown') ShipObj.Y = ShipObj.Y + 5;
    if(e.key === 'ArrowLeft') ShipObj.X = ShipObj.X - 5;
    if(e.key === 'ArrowRight') ShipObj.X = ShipObj.X + 5;
})

// ArrowUp ArrowDown ArrowLeft ArrowRight

const view = new CanvasView('#PlayField');
view.initGame(startGame)









