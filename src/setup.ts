import SHIP_URL from './images/Ship.webp';
import RED_ALIEN from './images/RedAilen.png';
import BLUE_ALIEN from './images/BlueAilen.png';
import GREEN_ALIEN from './images/GreenAilen.png';
import PURPLE_ALIEN from './images/PurpleAlien.png';

export const canvas:HTMLCanvasElement = document.querySelector('#PlayField');
export const ShipX:number = (canvas.width /2) - (15/2);
export const ShipY:number = ((canvas.height /8)*7) - (15/2);
export const ShipImage = new Image();
ShipImage.src = SHIP_URL;
export const ShipWidth = 20;
export const ShipHeight = 20;
export const ShipSpeed = 3;

export const AlienWidth = 20;
export const AlienHeight = 20;
export const AlienPadding = 5;

export const RedAlienImage = new Image();
RedAlienImage.src = RED_ALIEN;

export const BlueAlienImage = new Image();
BlueAlienImage.src = BLUE_ALIEN;

export const GreenAlienImage = new Image();
GreenAlienImage.src = GREEN_ALIEN;

export const PurpleAlienImage = new Image();
PurpleAlienImage.src = PURPLE_ALIEN;

export const LeftCanvasWall:number = 0;
export const UpCanvasWall:number = 0;
export const RightCanvasWall:number = canvas.width;
export const DownCanvasWall:number = canvas.height;

export const LEVEL = [
    0,0,3,3,4,4,3,3,0,0,
    0,2,2,2,2,2,2,2,2,0,
    1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
]