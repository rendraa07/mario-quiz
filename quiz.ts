
// ==========================================
// 1. CLASS PARENT (INDUK)
// ==========================================

class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "mario";

    

    // Bergerak ke kanan
    moveRight(): void {
        this.positionX += this.speed;
        console.log(`Mario bergerak ke kanan: X = ${this.positionX}`);
    }

    // Bergerak ke kiri
    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`Mario bergerak ke kiri: X = ${this.positionX}`);
    }

    // Diserang musuh
    attacked(): void {
        if (this.invincible) {
            console.log("Mario kebal! Serangan tidak berpengaruh.");
        } else {
            this.hp -= 1;
            this.currentForm = "mario";

            console.log("Mario terkena serangan!");

            if (this.hp <= 0) {
                this.hp = 0;
                console.log("Mario Game Over!");
            }
        }
    }

    // Menampilkan status Mario
    
}


// ==========================================
// 2. INHERITANCE: SUPER MARIO
// ==========================================

class SuperMushroom extends Mario {

    use(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = "super mario";

        console.log("Mario memakan Super Mushroom!");
        console.log("Mario berubah menjadi Super Mario!");
    }
}


// ==========================================
// 3. INHERITANCE: FIRE MARIO
// ==========================================

class FireFlower extends Mario {

    use(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = "fire mario";

        console.log("Mario mendapatkan Fire Flower!");
        console.log("Mario berubah menjadi Fire Mario!");
    }

    // Kemampuan khusus Fire Mario
    shootFireball(): void {
        console.log("Fire Mario menembakkan bola api!");
    }
}


// ==========================================
// 4. INHERITANCE: SUPER STAR
// ==========================================

class SuperStar extends Mario {

    use(mario: Mario): void {
        mario.invincible = true;

        console.log("Mario mendapatkan Super Star!");
        console.log("Mario sekarang kebal terhadap serangan!");
    }
}


// ==========================================
// 5. MEMBUAT OBJECT
// ==========================================

const mario = new Mario();

const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();


// ==========================================
// 6. MENJALANKAN PROGRAM
// ==========================================

// Status awal


// Menggunakan jamur
mushroom.use(mario);


// Menggunakan bunga
flower.use(mario);
flower.shootFireball();


// Bergerak
mario.moveRight();
mario.moveLeft();

// Diserang
mario.attacked();


// Menggunakan bintang
star.use(mario);

// Diserang saat kebal
mario.attacked();

