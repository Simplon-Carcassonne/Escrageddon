class Escargot {

    constructor(id, life, image, abilities = null) {
        this.id = id
        this.life = life
        this.image = image
        this.abilities = abilities
        this.snailImage()
    }

    snailMove() {
        //equivalent jquery keyup event

        //touche 65 = A
        eventTarget.addEventListener("keyup", event => {
            if (event.keyCode === 65) {
                console.log("touche A activée")
                return;
            }
        });
    }

    snailAttack() {

    }

    snailImage() {
        let player = this.id
        let playerImage = document.getElementById(player)

        console.log(playerImage)
        console.log('target ' + 'url("../images/' + this.image + ")")

        let url = "images/" + this.image;
        playerImage.style.backgroundImage = 'url('+url+')'
        //playerImage.style.backgroundImage = 'url("images/escargotv.png")'
        playerImage.style.backgroundSize = "75% 75%"
        playerImage.style.width = '64px';
        playerImage.style.height = '64px';

        /*  playersImage = document.getElementsByClassName('players')

         for (playerImage of playersImage) {
             playerImage.style.backgroundImage = 'url("images/' + this.image + '.png")';
             playerImage.style.backgroundSize = "75% 75%"
         } */
    }
}