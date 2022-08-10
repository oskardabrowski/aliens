import {Shoot} from "./elements/Shoot";
import {Alien} from "./elements/Alien";
import {Ship} from "./elements/Ship";

export class Hit {

    isCollidingAlien(alien: Alien, el:Shoot | Ship) {
        if(
            el.X < alien.X + alien.width &&
            el.X + el.width > alien.X &&
            el.Y < alien.Y + alien.height &&
            el.Y + el.height > alien.Y
        ) {
            return true;
        }
        return false;
    }

    isShipCollidingWithAlien(aliens: Alien[], ship:Ship):boolean {
        let status:boolean = false;
        aliens.forEach((alien,i) => {
            if(this.isCollidingAlien(alien, ship)) {
                status = true;
            }
        });
        return status;
    }

    isAlienHit(aliens: Alien[], shoots: Shoot[]) {
        aliens.forEach((alien, index) => {
            const AlienIndex = index;
            shoots.forEach((shoot, index) => {
                const ShootIndex = index;
                if(this.isCollidingAlien(alien, shoot)) {
                    if(alien.GetAlienEnergy === 1) {
                        aliens.splice(AlienIndex, 1);
                        shoots.splice(ShootIndex, 1);
                    } else if (alien.GetAlienEnergy > 1) {
                        alien.SetAlienEnergy = alien.GetAlienEnergy - 1;
                        shoots.splice(ShootIndex, 1);
                    }
                }
            })
        })
    }

    isShootIsOutside(shoots: Shoot[]):Shoot[] {
        shoots.forEach((el) => {
            if(el.Y < 0) shoots = shoots.filter(shoot => shoot != el)
            el.shootUp();
        });
        return shoots;
    }

}