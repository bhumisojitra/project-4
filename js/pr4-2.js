let pr2 = document.querySelector('.pr2');

const circle = (r) => {
    const pi = 3.14;
    return pi * r * r;
}
let area2 = circle(5);
pr2.innerHTML = (" Circle area :" + area2);