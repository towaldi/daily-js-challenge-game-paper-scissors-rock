const computerOptions = ['paper', 'scissors', 'rock'];

const userBtns = document.querySelectorAll('.btn');
console.log(userBtns);


let randomNumber = [];

/**
 * Checks which button is clicked by the user
 */

userBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(btn);
    });
});


/**
 * Generates random number for random computer chocie
 */

function generateRandomNumber() {
    let number =  Math.floor(Math.random() * computerOptions.length);
    randomNumber.push(number);
}

generateRandomNumber();
console.log(randomNumber);