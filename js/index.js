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
            if (currentIndex !== 3 && currentIndex !== 0) {
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
// steps section
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
//obtaining section
    let gifs = $('.obtaining-inner img');
    let obtainingCounter = 0,
        obtainingButtons = $('.obtaining-arrow-wrapper '),
        obtainingArrow = $('.obtaining-arrow'),
        obtainingSteps = $('.obtaining-step-block');
    obtainingSteps[obtainingCounter].style.opacity = '1';
    obtainingArrow[0].style.display = 'none';
    obtainingButtons[0].onclick = () => {
        if (obtainingCounter === 0) {
            obtainingArrow[0].style.display = 'none';

        }
        else {
            obtainingArrow[0].style.display = 'block';
            obtainingArrow[1].style.display = 'block';
            obtainingSteps[obtainingCounter].style.opacity = '0';
            obtainingCounter--;
            if (obtainingCounter === 0) {
                obtainingArrow[0].style.display = 'none';
            }
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
            obtainingCounter++;
            if (obtainingCounter === 3) {
                obtainingArrow[1].style.display = 'none';
            }
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
    let blocks = $('.dispensing-block h2');
    let checkmarks = $('.dispensing-checkmark-block');
    let text_blocks = $('.dispensing-inner-text-block');
    let text_blocks_p = $('.dispensing-inner-text-block p');
    let crosses = $('.dispensing-inner-text-block img');
    $('.dispensing-reset')[0].onclick = (e) => {
        for (let i = 0; i < blocks.length; i++) {
            blocks.removeAttr('style');
            checkmarks.removeAttr('style');
            text_blocks.removeAttr('style');
            text_blocks_p.removeAttr('style');
            crosses.removeAttr('style');
        }
    }
    // blocks.on('click',(i)=>{
    //    console.log(i.target)
    // });
    $('body').on('mouseup', (e) => {
        if (!e.target.classList.contains('dispensing-block-h2') && !e.target.classList.contains('.dispensing-inner-text-block') && !e.target.classList.contains('.dispensing-block-p')) {
            crosses.click();
        }
    });
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].onclick = (e) => {
            if (!blocks[i].hasAttribute('style') || blocks[i].getAttribute('style').length === 0) {

                blocks[i].style.opacity = '0';
                checkmarks[i].style.opacity = '1';
                if (i > 0)
                    for (let j = 0; j < crosses.length; j++) {
                        if(j!=i)
                            crosses[j].click()
                    }
                text_blocks[i].style.visibility = 'visible';
                text_blocks[i].style.minHeight = '150px';
                text_blocks[i].style.width = '400px';
                setTimeout(() => {
                    text_blocks_p[i].style.display = 'block';
                    text_blocks[i].style.minHeight = 'unset';
                }, 500)
            }
        }
        crosses[i].onclick = (e) => {
            text_blocks[i].style.width = '0';
            text_blocks[i].style.minHeight = '150px';
            text_blocks_p[i].style.display = 'none';
            setTimeout(() => {
                text_blocks[i].style.visibility = 'hidden';
                text_blocks[i].style.minHeight = 'unset';
            }, 400)


        }
    }
});