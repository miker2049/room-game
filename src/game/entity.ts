// an entity class, which is either a player or monster

export class Entity {
    hp: number;
    mp: number;
    score: number;
    name: string;

    constructor(name: string, entityType: number) {
        this.hp = 100;
        this.mp = 100;
        this.score = 0;
        this.name = name;
    }

    damage(amount: number) {
        this.hp -= amount;
    }

    heal(amount: number) {
        this.hp += amount;
    }
}
