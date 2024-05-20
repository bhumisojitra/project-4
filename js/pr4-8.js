// (f= (c*1.8)+32 ) Celsius to Fahrenheit 
 
let pr8 = document.querySelector('.pr8');

const celsius = (c) => {
    return (c * 1.8) + 32;
}
let area8 = celsius(12);
pr8.innerHTML = ("Celsius to Fahrenheit : " + area8)