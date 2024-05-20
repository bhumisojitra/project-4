let pr3 = document.querySelector('.pr3')

const triangle = (l, h) => {
    return ((l * h) / 2);
}
let area3 = triangle(20, 5);
pr3.innerHTML = ("Triangle area :" + area3);