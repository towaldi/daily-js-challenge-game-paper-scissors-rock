const computerOptions = ['paper', 'scissors', 'rock'];
const computersChoice = document.querySelector('.computer-choice');
const playersChoice = document.querySelector('.player-choice');
const userBtns = document.querySelectorAll('.btn');
console.log(userBtns);


/**
 * Checks which button is clicked by the user
 */

userBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // console.log(btn);

        const randomNumber = generateRandomNumber();
        const generatedNumber = generateNumberForBtn(btn);
        
        computersChoice.textContent = computerOptions[randomNumber];
        console.log(randomNumber);
        playersChoice.textContent = computerOptions[generatedNumber];
        console.log(generatedNumber);
    });
});


/**
 * Generates random number for random computer chocie
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * computerOptions.length);
}


/**
 * Generate number for player choice
 */

function generateNumberForBtn(btn) {
    if (btn.classList.contains('paper')) {
        return 0;
    } else if (btn.classList.contains('scissors')) {
        return 1;
    } else {
        return 2;
    }
}


/**
 * Compare computer choice with player choice
 */

function compareNumbers(num1, num2) {
    if (num1 ) {
        
    }
}