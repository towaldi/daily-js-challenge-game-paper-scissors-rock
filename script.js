const computerOptions = [
    './assets/icons/hand_paper.svg', 
    './assets/icons/hand_scissors.svg', 
    './assets/icons/hand_rock.svg'];

const computersChoice = document.querySelector('.computer-choice');
const playersChoice = document.querySelector('.player-choice');
const userBtns = document.querySelectorAll('.btn');

const modal = document.querySelector('.modal-bgr');
const comparisonText = document.getElementById('comparison-text');
const numberPlayer = document.getElementById('number-player');
const numberComputer= document.getElementById('number-computer');

// const resetGameBtn = document.getElementById('reset');
// const continueGameBtn = document.getElementById('continue');

let text;
let counterPlayer = 0;
let counterComputer = 0;


/**
 * Checks which button is clicked by the user
 */

userBtns.forEach(btn => {
    btn.addEventListener('click', function() {

        const generatedNumber = generateNumberForBtn(btn);
        const randomNumber = generateRandomNumber();

        compareNumbers(generatedNumber, randomNumber)
        playersChoice.innerHTML = /* html */ `<img src="${computerOptions[generatedNumber]}" alt="Player's Choice">`;
        computersChoice.innerHTML = /* html */ `<img src="${computerOptions[randomNumber]}" alt="Computer's Choice">`;

        comparisonText.innerHTML = text;
        numberPlayer.innerHTML = counterPlayer;
        numberComputer.innerHTML = counterComputer;
        
        console.log(comparisonText);   

        setTimeout(() => {
            modal.classList.remove('d-none');
        }, 1500);
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
        text = 'Player lost! Paper gets cut by scissors!';
        counterComputer++;
    } else if (num1 === 0 && num2 === 2) {
        text = 'Player won! Paper wraps stone!';
        counterPlayer++;
    } else if (num1 === 1 && num2 === 0) {
        text = 'player won! Scissors cuts paper!';
        counterPlayer++;
    } else if (num1 === 1 && num2 === 2) {
        text = 'Player lost! Scissors become blunt due to stone!';
        counterComputer++;
    } else if (num1 === 2 && num2 === 0) {
        text = 'Player lost! Stone gets wraped up by paper!';
        counterComputer++;
    } else if (num1 === 2 && num2 === 1) {
        text = 'Player won! Stone blunts scissors!';
        counterPlayer++;
    } else if (num1 === num2) {
        text = `That's a tie! Restart game!`;
    }
}


/**
 * Reset game
 */

function resetGame() {
    modal.classList.add('d-none');
    playersChoice.innerHTML = '';
    computersChoice.innerHTML = '';
    counterPlayer = 0;
    counterComputer = 0;
}


/**
 * Continue game
 */

function continueGame() {
    modal.classList.add('d-none');
    playersChoice.innerHTML = '';
    computersChoice.innerHTML = '';
}