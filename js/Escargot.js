class Escargot {

    constructor(id, life, image, keycode, abilities = null) {
        this.id = id
        this.life = life
        this.image = image
        this.keycode = keycode
        this.abilities = abilities

        this.speedMove = 50;
        this.position = new Vector2();
        this.imageElt = document.getElementById(this.id);
        this.imageElt.style.display = 'absolute';
        this.imageElt.style.zIndex = 2000;

        this.snailImage()
        this.snailMove()
    }

    setPosition(position){
        this.position = position;
    }

    placeSnail(newPosition){
        //this.imageElt.style.display = 'absolute';
        //image.style.transform = 'translateX(' + startPos + 'px)';
        //this.imageElt.style.transform = 'translateY(' + startPosY + 'px)';
        this.setPosition(newPosition);
        this.imageElt.style.transform = 'translateY(' + newPosition.y + 'px)';
        this.imageElt.style.marginLeft = newPosition.x;
        //this.imageElt.style.zIndex = 2000;
    }

    snailMove() {
        //touche 65 = A
        document.addEventListener("keyup", event => {
            console.log('touche appuyée : '+event.key+' => target key de cet escargot: ' + this.keycode);
            if (event.key === this.keycode) {
                console.log("Cet escargot va avancer")
                //const image = document.getElementById(this.id)
                //image.style.transform = "translateX(200px)";

                this.position.x += this.speedMove;
                this.imageElt.style.marginLeft = this.position.x.toString()+"px";
            }
        });
    }

    snailAttack() {

    }

    snailImage() {
        let player = this.id
        let playerImage = document.getElementById(player)

        //console.log(playerImage)
        //console.log('target ' + 'url("../images/' + this.image + ")")

        let url = "images/" + this.image;
        playerImage.style.backgroundImage = 'url(' + url + ')'
        playerImage.style.backgroundSize = "75% 75%"
        playerImage.style.width = '64px';
        playerImage.style.height = '64px';
        playerImage.style.backgroundRepeat = "no-repeat"

    }
}