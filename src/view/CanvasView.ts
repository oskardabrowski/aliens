import {Ship} from "../elements/Ship";
import {Alien} from "../elements/Alien";

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
        console.log('GameInitialized')
    }

    drawElement(element: Ship | Alien) {
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
}