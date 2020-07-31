class Escargot {

    constructor(id, life, image, abilities = null) {
        this.id = id
        this.life = life
        this.image = image
        this.abilities = abilities

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

        playerImage = document.getElementById('player1')
        playerTwo = document.getElementById('player2')
        playerThree = document.getElementById('player3')
        playerFour = document.getElementById('player4')
        playerFive = document.getElementById('player5')

        playerOne.style.background = 'url("images/' + this.image + '.png")';
        playerOne.style.backgroundSize = "75% 75%"

        playerTwo.style.background = 'url("images/' + this.image + '.png")';
        playerTwo.style.backgroundSize = "75% 75%"

        playerThree.style.background = 'url("images/' + this.image + '.png")';
        playerThree.style.backgroundSize = "75% 75%"

        playerFour.style.background = 'url("images/' + this.image + '.png")';
        playerFour.style.backgroundSize = "75% 75%"

        playerFive.style.background = 'url("images/' + this.image + '.png")';
        playerFive.style.backgroundSize = "75% 75%"

        /*  playersImage = document.getElementsByClassName('players')

         for (playerImage of playersImage) {
             playerImage.style.backgroundImage = 'url("images/' + this.image + '.png")';
             playerImage.style.backgroundSize = "75% 75%"
         } */
    }
}