class Character {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";
    invincible: boolean = false;
    fireBall: boolean = false;

    receivePowerUp() {
        console.log("Mario mendapatkan power up!");
    }


    receiveAttack() {
        if (this.invincible) {
            console.log(`Mario kebal! Serangan tidak berpengaruh. HP: ${this.hp}`);
        } else {
            this.hp = this.hp - 1;
            this.currentForm = "mario";

            console.log(`Mario terkena serangan! Form kembali menjadi ${this.currentForm}. HP: ${this.hp}`);
        }
    }

    // Method bergerak ke kanan
    receiveRight() {
        this.positionX = this.positionX + this.speed;
        console.log(`Mario bergerak ke kanan. Posisi X: ${this.positionX}`);
    }

    // Method bergerak ke kiri
    receiveLeft() {
        this.positionX = this.positionX - this.speed;
        console.log(`Mario bergerak ke kiri. Posisi X: ${this.positionX}`);
    }
}

// Inheritance SuperMushroom
class SuperMushroom extends Character {
    receivePowerUp() {
        this.hp = this.hp + 1;
        this.currentForm = "super mario";

        console.log(`Mario berubah menjadi ${this.currentForm}. HP sekarang: ${this.hp}`);
    }
}

// Inheritance FireFlower
class FireFlower extends Character {
    receivePowerUp() {
        this.hp = this.hp + 1;
        this.currentForm = "fire mario";
        this.fireBall = true;

        console.log(`Mario berubah menjadi ${this.currentForm}. HP: ${this.hp}. Mario dapat menembakkan bola api!`);
    }
}

// Inheritance SuperStar
class SuperStar extends Character {
    receivePowerUp() {
        this.invincible = true;

        console.log(`Mario mendapatkan kekuatan bintang. Sekarang Mario kebal terhadap serangan!`);
    }
}

const mario1 = new SuperMushroom();
mario1.receivePowerUp();
mario1.receiveRight();

const mario2 = new FireFlower();
mario2.receivePowerUp();
mario2.receiveLeft();

const mario3 = new SuperStar();
mario3.receivePowerUp();
mario3.receiveAttack();
