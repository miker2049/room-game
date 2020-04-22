// Player class for room game, which extends the entity class
import { Entity } from './entity';

export class Player extends Entity {
    matrixName: string

    constructor(name: string){
        super(name,1);
    }
}
