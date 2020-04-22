//Game component; a game is the loop of the world and the handler of the world.
import { Player } from './player';
import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";

interface State {
    players: Array<Player>;
}

class Game {
    state: State;
    client: MatrixClient;
    roomId: string;
    players: Array<Player>;
    ready: boolean;


    constructor(client: MatrixClient, roomId: string) {
        this.client = client;
        this.roomId = roomId;
        this.ready = false;
        this.init();
    }

    async init(){
        let users: string[] = await this.client.getJoinedRoomMembers(this.roomId);
        users.forEach(user => this.players.push(new Player(user)))
        this.loadState();
        this.syncState();
        this.ready = true;
    }

    processEvent(){
        if (this.ready){

        }
    }

    syncState(){

    }

    loadState(){

    }

    saveState(){

    }
}
