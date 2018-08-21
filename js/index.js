let int = null;
let timerVal = 0;
let func = () => {
    timerVal++;
    document.getElementsByClassName('inner')[0].firstElementChild.innerHTML = timerVal

    ;
    if (timerVal === 10) {
        clearInterval(int);
    }
};
int = setInterval(func, 100);
