const computerOptions = [
    './assets/icons/hand_paper.svg', 
    './assets/icons/hand_scissors.svg', 
    './assets/icons/hand_rock.svg'];

const computersChoice = document.querySelector('.computer-choice');
const playersChoice = document.querySelector('.player-choice');
const userBtns = document.querySelectorAll('.btn');

const comparisonText = document.getElementById('comparison-text');

let generatedNumber, randomNumber;


/**
 * Checks which button is clicked by the user
 */

userBtns.forEach(btn => {
    btn.addEventListener('click', function() {

        const generatedNumber = generateNumberForBtn(btn);
        const randomNumber = generateRandomNumber();
        
        playersChoice.innerHTML = /* html */ `<img src="${computerOptions[generatedNumber]}" alt="Player's Choice">`;
        computersChoice.innerHTML = /* html */ `<img src="${computerOptions[randomNumber]}" alt="Computer's Choice">`;

        printComparisonText();
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
        return 'player won! Scissors cuts paper!';
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


/**
 * Print 'compareNumbers' return into modal
 */

function printComparisonText() {
    comparisonText.innerHTML = compareNumbers(generatedNumber, randomNumber);
    console.log(comparisonText);   
}