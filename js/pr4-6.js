// (a*a) + (2*a*b) + (b*b) 

let pr6 = document.querySelector('.pr6');

const sum = (a, b) => {
    return (a*a) + (2*a*b) + (b*b);
}
let area6 = sum(5, 3);
pr6.innerHTML = (area6); 