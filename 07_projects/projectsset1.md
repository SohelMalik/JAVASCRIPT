# Projects related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log("sohel")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id=== 'grey'){
    body.style.backgroundColor= e.target.id
  } if(e.target.id=== 'white'){
    body.style.backgroundColor= e.target.id
  }
  if(e.target.id=== 'blue'){
    body.style.backgroundColor= e.target.id
  }
  if(e.target.id=== 'yellow'){
    body.style.backgroundColor= e.target.id
  }
  if(e.target.id=== 'purple'){
    body.style.backgroundColor= e.target.id
  }

  });
});

```
## Project 2 solution

```javascript 

const form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(documnet.querySlector ('#height').value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
  let BMI = (weight / (height / 100) ** 2).toFixed(2);
  let message = '';
  if (BMI < 18.6) {
    message = 'Under Weight = Less than 18.6';
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    message = `Normal Range = Between 18.6 and 24.9`;
  } else {
    message = `Overweight = Greater than 24.9`;
  }
  results.innerHTML = `
  <h3>Your BMI is ${BMI}</h3>
  <p><b>BMI Weight Guide</b></p>
  <p>${message}</p>`;
});


```
## project 3 solution code

```javascript 
const clock = document.getElementById('clock');
// const clock document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution

```javascript

let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(`you have guessed it right`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`number is too low`);
  } else if (guess > randomnumber) {
    displayMessage(`number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<h2>`;
}

function endGame() {
  userInput, (value = ``);
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" >start new game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playGame = true;
  });
}



```

# Project 5 Solution

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
   <div.class= 'color'>
   <table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>    
   </div>
   `;
});


```

# Project 6 Solution 

```javascript

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
