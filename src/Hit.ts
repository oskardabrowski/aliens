import {Shoot} from "./elements/Shoot";
import {Alien} from "./elements/Alien";

export class Hit {

    isCollidingAlien(alien: Alien, shoot:Shoot) {
        if(
            shoot.X < alien.X + alien.width &&
            shoot.X + shoot.width > alien.X &&
            shoot.Y < alien.Y + alien.height &&
            shoot.Y + shoot.height > alien.Y
        ) {
            return true;
        }
        return false;
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