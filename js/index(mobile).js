$(document).ready(() => {
//10 minutes timer
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
    int = setInterval(func, 200);

//approach section
    let buttons = $('.approaching-button');
    let currentButton = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = (e) => {
            buttons[currentButton].children[0].classList.remove('approaching-active');
            buttons[currentButton].children[1].classList.remove('approaching-button-text-show');
            buttons[i].children[0].classList.add('approaching-active');
            buttons[i].children[1].classList.add('approaching-button-text-show');
            currentButton = i;
        }
    }
// steps section
    let stepsLeftButtons = $('.steps-left .steps-button');
    for (let i = 0; i < stepsLeftButtons.length; i++) {
        stepsLeftButtons[i].onclick = (ev) => {
            stepsLeftButtons[i].children[1].style.opacity = '1';
        }
    }

    let stepRightButtons = $('.steps-right-button');
    let currentButtonRight = 0;
    for (let i = 0; i < stepRightButtons.length; i++) {
        stepRightButtons[i].onclick = (e) => {
            stepRightButtons[currentButtonRight].children[0].classList.remove('steps-right-active');
            stepRightButtons[currentButtonRight].children[1].classList.remove('steps-right-text-show');
            stepRightButtons[i].children[0].classList.add('steps-right-active');
            stepRightButtons[i].children[1].classList.add('steps-right-text-show');
            currentButtonRight = i;
        }
    }
//obtaining section
    let gifs = $('.obtaining-inner img');
    let obtainingCounter = 0,
        obtainingButtons = $('.obtaining-arrow-wrapper '),
        obtainingArrow = $('.obtaining-arrow'),
        obtainingSteps = $('.obtaining-step-block');
    obtainingSteps[obtainingCounter].style.opacity = '1';
    obtainingSteps[obtainingCounter].style.display = 'block';
    obtainingArrow[0].style.display = 'none';
    obtainingButtons[0].onclick = () => {
        if (obtainingCounter === 0)
            obtainingArrow[0].style.display = 'none';
        else {
            obtainingArrow[0].style.display = 'block';
            obtainingArrow[1].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '0';
            obtainingSteps[obtainingCounter].style.display = 'none';
            obtainingCounter--;
            if (obtainingCounter === 0) {
                obtainingArrow[0].style.display = 'none';
            }
            obtainingSteps[obtainingCounter].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '1';
            runGifs(obtainingCounter)
        }

    };
    obtainingButtons[1].onclick = () => {
        if (obtainingCounter === 3)
            obtainingArrow[1].style.display = 'none';
        else {
            obtainingArrow[0].style.display = 'block';
            obtainingArrow[1].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '0';
            obtainingSteps[obtainingCounter].style.display = 'none';
            obtainingCounter++;
            if (obtainingCounter === 3) {
                obtainingArrow[1].style.display = 'none';
            }
            obtainingSteps[obtainingCounter].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '1';
            runGifs(obtainingCounter)
        }
    };

    let gifrunned = false;
    $(window).scroll(function () {
        // This is then function used to detect if the element is scrolled into view
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
        if (elementScrolled('.obtaining-slider') && !gifrunned) {
            gifrunned = true;
            runGifs();
        }
    });

    function runGifs(index = 0) {
        if (index === 0) {
            if (obtainingCounter === 0)
                gifs[0].style.opacity = "1";
            setTimeout(() => {
                if (obtainingCounter === 0) {
                    gifs[index].style.opacity = "0";
                    gifs[+1].style.opacity = "1";
                }
            }, 4000)
            gifs[2].style.opacity = "0";
        }
        if (index === 1) {
            if (gifs[3].style.opacity === "1") {
                gifs[2].style.opacity = "1";
                gifs[3].style.opacity = "0";
                gifs[4].style.opacity = "0";
            } else {
                gifs[0].style.opacity = "0";
                gifs[1].style.opacity = "0";
                gifs[2].style.opacity = "1";
            }
        }
        if (index === 2) {
            if (gifs[5].style.opacity === "1") {
                gifs[4].style.opacity = "1";
                gifs[3].style.opacity = "1";
                gifs[5].style.opacity = "0";
                gifs[6].style.opacity = "0";
            } else {
                gifs[2].style.opacity = "0";
                gifs[3].style.opacity = "1";
                gifs[4].style.opacity = "1";
            }
        }
        if (index === 3) {
            gifs[3].style.opacity = "0";
            gifs[4].style.opacity = "0";
            gifs[5].style.opacity = "1";
            gifs[6].style.opacity = "1";
        }
    }
    //dispensing
    let dispensingButtons = $('.dispensing-button');
    let currentDispensingButton = 0;
    for (let i = 0; i < dispensingButtons.length; i++) {
        dispensingButtons[i].onclick = (e) => {
            dispensingButtons[currentDispensingButton].children[0].classList.remove('dispensing-active');
            dispensingButtons[currentDispensingButton].children[1].classList.remove('dispensing-text-show');
            dispensingButtons[i].children[0].classList.add('dispensing-active');
            dispensingButtons[i].children[1].classList.add('dispensing-text-show');
            currentDispensingButton = i;
        }
    }
});