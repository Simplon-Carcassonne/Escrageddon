class Game {

    constructor(nbrePlayers) {
        this.nbrePlayers = nbrePlayers;
        this.snailImages = ['escargotv.png', 'escargoto.png', 'escargotb.png', 'escargotr.png', 'escargotv2.png'];
        this.snailId = ['snail1', 'snail2', 'snail3', 'snail4', 'snail5'];
        this.snailKeysCodes = ['a', 'b', 'p', 'n', 'w'];
        //this.snailKeysCodes = ['65', '90', '69', '82', '84'];

        this.gameOn = false;
        this.decalY = '74';
        this.players = [];
        this.pvInit = 5;
    }

    deployPlayers() {
        for (let i = 0; i < this.nbrePlayers; i++) {
            const snail = new Escargot(this.snailId[i], this.pvInit, this.snailImages[i], this.snailKeysCodes[i]);
            this.players.push(snail);
            this.placePlayer(i,snail);
        }

        console.log("Les players => ");
        console.log(this.players);
    }

    placePlayer(indicePlayer,snail) {
        //const startPos = 100 + indicePlayer * 5;
        const startPosY = 65 + this.decalY * indicePlayer;
        snail.placeSnail(new Vector2(110,startPosY));
        console.log("Player placé en  x:110 , y:"+ startPosY);
    }
}