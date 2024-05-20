// ((b*b)(4*a*c))/(2*a)
let pr5 = document.querySelector('.pr5');

const fan = (a, b, c) => {
    return ((b * b) * (4 * a * c)) / (2 * a);
}
let c = 5;
let area5 = fan(10, 20, c);
pr5.innerHTML = (area5); 