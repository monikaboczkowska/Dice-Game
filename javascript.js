function diceFunction() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // returns a random integer from 1 to 6   */
    document.querySelector(".img1").setAttribute("src", "img/dice" + randomNumber1 + ".png"); //pick out a random dice image between dice1.png to dice 6.png then place this image


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "img/dice" + randomNumber2 + ".png");




    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = ("Player 1 Won!");
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = ("Player 2 Won!");
    } else {
        document.querySelector("h1").innerHTML = ("Its a Draw!");
    }
}
