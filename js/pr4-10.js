let pr10 = document.querySelector('.pr10');

const swap = (x, y) => {;
    x = x + y;
    y = x - y;
    x = x - y;
    pr10.innerHTML = (`after : x = ${x}, y = ${y}`);
  
}
swap(5,6);