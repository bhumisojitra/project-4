let pr9 = document.querySelector('.pr9');

const num = (n) => {

    if(n % 2 == 0){
        pr9.innerHTML = ("evev number : " + n);
    }
    else{
        pr9.innerHTML = ("odd number : " + n);
    }
    num(4);
}
num(3);