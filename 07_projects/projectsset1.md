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