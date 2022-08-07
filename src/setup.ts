import SHIP_URL from './images/Ship.webp';

export const canvas:HTMLCanvasElement = document.querySelector('#PlayField');
export const ShipX:number = (canvas.width /2) - (15/2);
export const ShipY:number = ((canvas.height /8)*7) - (15/2);
export const ShipImage = new Image();
ShipImage.src = SHIP_URL;
export const ShipWidth = 20;
export const ShipHeight = 20;
export const ShipSpeed = 3;

export const LeftCanvasWall:number = 0;
export const UpCanvasWall:number = 0;
export const RightCanvasWall:number = canvas.width;
export const DownCanvasWall:number = canvas.height;