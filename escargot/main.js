//POUR BOUGER LES CELLULES DU TABLEAU

$(document).ready(function () {
  $(document).keyup(handleKeyPress)
})

function handleKeyPress (e) {
  if (e.which == 65) {
    movePlayer(1)
  }

  if (e.which == 90) {
    movePlayer(2)
  }

  if (e.which == 69) {
    movePlayer(3)
  }

  if (e.which == 82) {
    movePlayer(4)
  }

  if (e.which == 84) {
    movePlayer(5)
  }
}

function movePlayer (playerInt) {
	
  var cell = $('.active' + playerInt)
  var nextCell = $(cell).next()
  

  checkForVictory(nextCell, playerInt)

  cell.removeClass()
  nextCell.addClass('active' + playerInt)
}

function checkForVictory (nextCell, playerInt) {
   if (!$(nextCell).is('td')) {
    alert('Player ' + playerInt + ' wins!')
    window.location.reload()
  }
}




//FONCTION JET DE DES

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}




function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};






// var object = document.getElementById('active1');

// object.onclick=function(handleKeyPress){
  // var x = Math.floor(Math.random();
  // var y = Math.floor(Math.random();
// };


/* document.getElementById('tableau').onclick = (function(){
    var cells = document.getElementsByTagName('active1').getElementsByTagName('td');
    var rows = document.getElementsByTagName('active1').getElementsByTagName('tr');

    rows[1].appendChild(cells[3].parentNode.removeChild(cells[1]));
    rows[1].appendChild(cells[2].parentNode.removeChild(cells[2]));

    // rows[1].insertBefore(cells[5].parentNode.removeChild(cells[5]), cells[3]);
    // rows[0].insertBefore(cells[2].parentNode.removeChild(cells[2]), cells[0]);
});
 */
 
 
var bird2 = document.getElementById("test");
var link2 = document.getElementById("test2");
test2.addEventListener("click", move);

var birdX = 0;
function move(e) {
   birdX += 60;
   test.style.width = "9%";
   test.style.height = "15%";
   test.style.position = "absolute";
   test.style.transform = "translateX(" + birdX + "px)";
   test.style.transition = "1s";
   e.preventDefault();     //prevents the page from redirecting
}
 
 function myFunction() {
   alert("Alert box!");
}
 
/* var object = document.getElementById('test');

object.onclick=function(){
  var x = Math.floor(Math.random()*5);
  var y = Math.floor(Math.random()*5);
  test.style.top = x + 'px';
  test.style.left = y + 'px';
  test.style.width = "9%";
  test.style.height = "15%";
  test.style.position = "absolute";
}; */

