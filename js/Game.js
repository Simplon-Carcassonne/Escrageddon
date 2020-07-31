class Game{

    constructor(nbrePlayers){
        this.nbrePlayers = nbrePlayers;
        this.snailImages = ['escargotv.png','escargoto.png','escargotb.png','escargotr.png','escargotg.png'];
        this.snailId = ['snail1','snail2','snail3','snail4','snail5'];
        this.snailKeysCodes = ['65','90','69','82','84'];

        this.gameOn = false;
        this.players = [];
        this.pvInit = 5;
    }

    deployPlayers(){
        for(let i = 0; i < this.nbrePlayers; i++){
            const snail = new Escargot(this.snailId[i],this.pvInit,this.snailImages[i],this.snailKeysCodes[i]);
            this.players.push(snail);

            this.placePlayer(this.snailId[i],i);
        }

        console.log("Les players => ");
        console.log(this.players);
    }

    placePlayer(snailID, indicePlayer){
        const startPos = 10 + indicePlayer * 5;
        const image = document.getElementById(snailID);
        image.style.display = 'absolute';
        image.style.transform = 'translateX('+startPos+'px)';

        console.log("Player placé en  "+startPos);
        //image.style.top
    }
}