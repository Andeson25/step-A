$(document).ready(() => {
    let int = null;
    let timerVal = 0;
    let func = () => {
        timerVal++;
        $('.inner')[0].firstElementChild.innerHTML = timerVal

        ;
        if (timerVal === 10) {
            clearInterval(int);
        }
    };
    int = setInterval(func, 100);


    let buttons = $('.bottom-button-number');
    let labels = $('.approaching-customers-bottom-block-bottom-text-inner');
    let arrows = [];
    arrows.push($('.approaching-arrow-up'), $('.approaching-arrow-down'));
    let currentIndex = 0;
    buttons[0].classList.add('approach-active');
    labels[0].classList.add('approach-show');
    arrows[0].hide();

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].on('click', (e) => {
            if (i === 1) {
                buttons[currentIndex].classList.remove('approach-active');
                labels[currentIndex].classList.remove('approach-show');
                buttons[currentIndex + 1].classList.add('approach-active');
                labels[currentIndex + 1].classList.add('approach-show');
                currentIndex++;
            }
            if (i === 0) {
                buttons[currentIndex].classList.remove('approach-active');
                labels[currentIndex].classList.remove('approach-show');
                buttons[currentIndex - 1].classList.add('approach-active');
                labels[currentIndex - 1].classList.add('approach-show');
                currentIndex--;
            }
            if (currentIndex === 0) {
                $('.approaching-arrow-up').hide();
                $('.approaching-arrow-down').show();
            }
            if (currentIndex === 3) {
                $('.approaching-arrow-up').show();
                $('.approaching-arrow-down').hide();
            }
            if (currentIndex != 3 && currentIndex != 0) {
                $('.approaching-arrow-up').show();
                $('.approaching-arrow-down').show();
            }
        });
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            buttons[currentIndex].classList.remove('approach-active');
            labels[currentIndex].classList.remove('approach-show');
            buttons[i].classList.add('approach-active');
            labels[i].classList.add('approach-show');
            currentIndex = i;
            if (currentIndex === 0) {
                $('.approaching-arrow-up').hide();
                $('.approaching-arrow-down').show();
            }
            if (currentIndex === 3) {
                $('.approaching-arrow-up').show();
                $('.approaching-arrow-down').hide();
            }
            if (currentIndex != 3 && currentIndex != 0) {
                $('.approaching-arrow-up').show();
                $('.approaching-arrow-down').show();
            }
        }
    }

    let leftSteps = $('.steps-left .step-box .step-hidden-content');
    let rightSteps = $('.steps-right .step-box .step-hidden-content');

    for (let i = 0; i < 3; i++) {
        leftSteps[i].onclick = (e) => {
            leftSteps[i].style.opacity = '0';
            rightSteps[i].style.opacity = '0';
        }
        rightSteps[i].onclick = (e) => {
            leftSteps[i].style.opacity = '0';
            rightSteps[i].style.opacity = '0';
        }
    }

    let obtainingCounter = 0,
        obtainingButtons = $('.obtaining-arrow-wrapper '),
        obtainingArrow = $('.obtaining-arrow'),
        obtainingSteps = $('.obtaining-step-block');
    obtainingSteps[obtainingCounter].style.opacity = '1';
    obtainingArrow[0].style.display = 'none';
    obtainingButtons[0].onclick = () => {
        if (obtainingCounter === 0)
            obtainingArrow[0].style.display = 'none';
        else {
            obtainingArrow[0].style.display = 'block';
            obtainingArrow[1].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '0';
            obtainingCounter--;
            if (obtainingCounter === 0) {
                obtainingArrow[0].style.display = 'none';
            }
            obtainingSteps[obtainingCounter].style.opacity = '1';
        }

    };
    obtainingButtons[1].onclick = () => {
        if (obtainingCounter === 3)
            obtainingArrow[1].style.display = 'none';
        else {
            obtainingArrow[0].style.display = 'block';
            obtainingArrow[1].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '0';
            obtainingCounter++;
            if (obtainingCounter === 3) {
                obtainingArrow[1].style.display = 'none';
            }
            obtainingSteps[obtainingCounter].style.opacity = '1';
        }
    };
});