import {Ship} from "../elements/Ship";
import {Alien} from "../elements/Alien";
import {Shoot} from "../elements/Shoot";

export class CanvasView {
    canvas:HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    start: HTMLObjectElement;

    constructor(canvasName:string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.start = document.querySelector('#start');
    }

    clear() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    initGame(startFn: (view: CanvasView) => void) {
        this.start.addEventListener('click', () => startFn(this))
    }

    drawElement(element: Ship | Alien | Shoot) {
        if(!element) return;
        this.context.drawImage(
            element.img,
            element.X,
            element.Y,
            element.width,
            element.height
        )
    }

    drawAliens(aliens: Alien[]) {
        aliens.forEach(alien => this.drawElement(alien))
    }

    drawShoots(shoots:Shoot[]) {
        shoots.forEach(shoot => this.drawElement(shoot))
    }
}