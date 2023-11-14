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

        const generatedNumber = generateNumberForBtn(btn);
        const randomNumber = generateRandomNumber();
        
        playersChoice.textContent = computerOptions[generatedNumber];
        console.log(generatedNumber);
        computersChoice.textContent = computerOptions[randomNumber];
        console.log(randomNumber);
        
        console.log(compareNumbers(generatedNumber, randomNumber))
    });
});


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
 * Generates random number for random computer chocie
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * computerOptions.length);
}


/**
 * Compare computer choice with player choice
 */

function compareNumbers(num1, num2) {
    if (num1 === 0 && num2 === 1) {
        return 'Player lost! Paper gets cut by scissors!';
    } else if (num1 === 0 && num2 === 2) {
        return 'Player won! Paper wraps stone!';
    } else if (num1 === 1 && num2 === 0) {
        return 'player won! Scissors cuts paper!'
    } else if (num1 === 1 && num2 === 2) {
        return 'Player lost! Scissors become blunt due to stone!';
    } else if (num1 === 2 && num2 === 0) {
        return 'Player lost! Stone gets wraped up by paper!';
    } else if (num1 === 2 && num2 === 1) {
        return 'Player won! Stone blunts scissors!';
    } else if (num1 === num2) {
        return `That's a tie! Restart game!`;
    }
}