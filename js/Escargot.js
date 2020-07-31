class Escargot {

    constructor(id, life, image, keycode, abilities = null) {
        this.id = id
        this.life = life
        this.image = image
        this.keycode = keycode
        this.abilities = abilities
        this.snailImage()
        this.snailMove()
    }

    snailMove() {
        //touche 65 = A
        document.addEventListener("keyup", event => {
            console.log('target key: ' + this.keycode)

            if (event.keyCode == this.keycode) {
                console.log("touche A activée")
                const image = document.getElementById(this.id)
                image.style.transform = "translateX(200px)";
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
        playerImage.style.backgroundImage = 'url(' + url + ')'
        playerImage.style.backgroundSize = "75% 75%"
        playerImage.style.width = '64px';
        playerImage.style.height = '64px';
        playerImage.style.backgroundRepeat = "no-repeat"

    }
}