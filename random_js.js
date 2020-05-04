var inputNumber = prompt("Your Guessed Number:");
var random = Math.random()*6;
random = Math.floor(random) + 1;
// document.write(random)
if (inputNumber == random){
    alert("You win!")
}
else
{
    alert("You lost")
}