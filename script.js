const computerOptions = ['paper', 'scissors', 'rock'];
const computersChoice = document.querySelector('.computer-choice');
const userBtns = document.querySelectorAll('.btn');
console.log(userBtns);


/**
 * Checks which button is clicked by the user
 */

userBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(btn);
        
        const randomNumber = generateRandomNumber();
        computersChoice.textContent = computerOptions[randomNumber];
        console.log(randomNumber);
    });
});


/**
 * Generates random number for random computer chocie
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * computerOptions.length);
}