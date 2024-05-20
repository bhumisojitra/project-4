// (c = (f-32)/1.8 ) Fahrenheit to Celsius

let pr7 = document.querySelector('.pr7');

const fahrenheit = (f) => {
    return (f - 32) / 1.8;
}
let area7 = fahrenheit(50);
pr7.innerHTML = ("Fahrenheit to Celsius : " + area7)