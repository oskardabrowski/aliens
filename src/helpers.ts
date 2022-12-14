import {Alien} from "./elements/Alien";

import {LEVEL, RedAlienImage, AlienWidth, AlienHeight, AlienPadding,
BlueAlienImage, GreenAlienImage, PurpleAlienImage} from "./setup";

export function createAliens():Alien[] {
    return LEVEL.reduce((actual, element, i) => {
        let row = Math.floor((i + 1) / 10);
        const col = i % 10;
        let image:HTMLImageElement;

        if(col === 9) row--

        const X = 30 + col * (AlienWidth + AlienPadding);
        const Y = 5 + row * (AlienHeight + AlienPadding);

        if(element === 0) return actual;
        if(element === 1) image = RedAlienImage;
        if(element === 2) image = BlueAlienImage;
        if(element === 3) image = GreenAlienImage;
        if(element === 4) image = PurpleAlienImage;

        return [
            ...actual,
            new Alien(
                image,
                AlienWidth,
                AlienHeight,
                X,
                Y,
                element
            )
        ]
    }, [] as Alien[])
}

export function moveAllAliens(aliens: Alien[]) {
    aliens.forEach((alien) => {
        alien.moveAlienDown();
    })
}

export function clearAliensInterval(aliens: Alien[]) {
    aliens.forEach((alien) => {
        alien.clearAlienMovement();
    })
}

export function checkAlienReachedDown(aliens: Alien[], downWall: number):boolean {
    let status:boolean = false;
    aliens.forEach(alien => {
        if(alien.isAlienReachedDown(downWall)) status = true;
    })
    return status;
}