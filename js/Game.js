class Game{

    constructor(nbrePlayers){
        this.nbrePlayers = nbrePlayers;
        this.snailImages = ['escargotv.png','escargoto.png','escargotb.png','escargotr.png','escargotg.png'];

        this.gameOn = false;
        this.players = [];
    }

    deployPlayers(){
        for(let i = 0; i < this.nbrePlayers; i++){
            const snail = new Escargot('id',5,this.snailImages[i]);
            this.players.push(snail);
        }

        console.log("Les players => ");
        console.log(this.players);
    }
}