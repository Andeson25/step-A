let ranScript = "";

function desktopScripts() {
    if ($(window).width() >= 991.98) {
        ranScript = 'DESKTOP';
        $(document).ready(() => {
//10 minutes timer
                let int = null;
                let timerVal = 0;
                let func = () => {
                    timerVal++;
                    $('#strep-a-desktop .inner')[0].firstElementChild.innerHTML = timerVal

                    ;
                    if (timerVal === 10) {
                        clearInterval(int);
                    }
                };
                int = setInterval(func, 200);

//approach section
                let buttons = $('#strep-a-desktop .bottom-button-number');
                let labels = $('#strep-a-desktop .approaching-customers-bottom-block-bottom-text-inner');
                let arrows = [];
                arrows.push($('#strep-a-desktop .approaching-arrow-up'), $('#strep-a-desktop .approaching-arrow-down'));
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
                let leftSteps = $('#strep-a-desktop .steps-left .step-box .step-hidden-content');
                let rightSteps = $('#strep-a-desktop .steps-right .step-box .step-hidden-content');
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
                let gifs = $('#strep-a-desktop .obtaining-inner img');
                let obtainingCounter = 0,
                    obtainingButtons = $('#strep-a-desktop .obtaining-arrow-wrapper '),
                    obtainingArrow = $('#strep-a-desktop .obtaining-arrow'),
                    obtainingSteps = $('#strep-a-desktop .obtaining-step-block');
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
                    if (elementScrolled('#strep-a-desktop .obtaining-slider') && !gifrunned) {
                        if (!gifrunned)
                            runGifs();
                        gifrunned = true;


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
                let blocks = $('#strep-a-desktop .dispensing-block h2');
                let checkmarks = $('#strep-a-desktop .dispensing-checkmark-block');
                let text_blocks = $('#strep-a-desktop .dispensing-inner-text-block');
                let text_blocks_p = $('#strep-a-desktop .dispensing-inner-text-block p');
                let crosses = $('#strep-a-desktop .dispensing-inner-text-block img');
                $('#strep-a-desktop .dispensing-reset')[0].onclick = (e) => {
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
                                    if (j != i)
                                        crosses[j].click()
                                }
                            text_blocks[i].style.visibility = 'visible';
                            text_blocks[i].style.minHeight = '150px';
                            text_blocks[i].style.width = '350px';
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
            }
        );
    }
}

function tabletScripts() {
    if ($(window).width() < 991.97 && $(window).width() >= 767.98) {
        ranScript = 'TABLET';
        $(document).ready(() => {
//10 minutes timer
            let int = null;
            let timerVal = 0;
            let func = () => {
                timerVal++;
                $('#strep-a-tablet .inner')[0].firstElementChild.innerHTML = timerVal;

                ;
                if (timerVal === 10) {
                    clearInterval(int);
                }
            };
            int = setInterval(func, 200);

//approach section
            let buttons = $('#strep-a-tablet .bottom-button-number');
            let labels = $('#strep-a-tablet .approaching-customers-bottom-block-bottom-text-inner');
            let arrows = [];
            arrows.push($('#strep-a-tablet .approaching-arrow-up'), $('.approaching-arrow-down'));
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
                        $('#strep-a-tablet  .approaching-arrow-up').hide();
                        $('#strep-a-tablet  .approaching-arrow-down').show();
                    }
                    if (currentIndex === 3) {
                        $('#strep-a-tablet .approaching-arrow-up').show();
                        $('#strep-a-tablet .approaching-arrow-down').hide();
                    }
                    if (currentIndex != 3 && currentIndex != 0) {
                        $('#strep-a-tablet .approaching-arrow-up').show();
                        $('#strep-a-tablet .approaching-arrow-down').show();
                    }
                }
            }
// steps section
            let stepsLeftButtons = $('#strep-a-tablet .steps-left .steps-box-number');
            let stepsLeftText = $('#strep-a-tablet .steps-left .steps-box-text');
            let stepsRightButtons = $('#strep-a-tablet .steps-right .steps-box-number');
            let stepsRightText = $('#strep-a-tablet .steps-right  .steps-box-text');
            let stepsIndex = 0;
            stepsLeftButtons[0].classList.add('steps-active');
            stepsLeftText[0].classList.add('steps-show');
            stepsRightButtons[0].classList.add('steps-active');
            stepsRightText[0].classList.add('steps-show');

            for (let i = 0; i < stepsLeftButtons.length; i++) {
                stepsLeftButtons[i].onclick = () => {
                    stepsLeftButtons[stepsIndex].classList.remove('steps-active');
                    stepsLeftText[stepsIndex].classList.remove('steps-show');
                    stepsRightButtons[stepsIndex].classList.remove('steps-active');
                    stepsRightText[stepsIndex].classList.remove('steps-show');
                    stepsLeftButtons[i].classList.add('steps-active');
                    stepsLeftText[i].classList.add('steps-show');
                    stepsRightButtons[i].classList.add('steps-active');
                    stepsRightText[i].classList.add('steps-show');
                    stepsIndex = i;
                }
                stepsRightButtons[i].onclick = () => {
                    stepsLeftButtons[stepsIndex].classList.remove('steps-active');
                    stepsLeftText[stepsIndex].classList.remove('steps-show');
                    stepsRightButtons[stepsIndex].classList.remove('steps-active');
                    stepsRightText[stepsIndex].classList.remove('steps-show');
                    stepsLeftButtons[i].classList.add('steps-active');
                    stepsLeftText[i].classList.add('steps-show');
                    stepsRightButtons[i].classList.add('steps-active');
                    stepsRightText[i].classList.add('steps-show');
                    stepsIndex = i;
                }
            }
//obtaining section
            let gifs = $('#strep-a-tablet  .obtaining-inner img');
            let obtainingCounter = 0,
                obtainingButtons = $('#strep-a-tablet .obtaining-arrow-wrapper '),
                obtainingArrow = $('#strep-a-tablet .obtaining-arrow'),
                obtainingSteps = $('#strep-a-tablet .obtaining-step-block');
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
                function elementScrolled(elem) {
                    var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();
                    var elemTop = $(elem).offset().top;
                    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
                }

                if (elementScrolled('#strep-a-tablet .obtaining-slider') && !gifrunned) {
                    runGifs();
                    gifrunned = true;
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
            let blocks = $('#strep-a-tablet .dispensing-block h2');
            let checkmarks = $('#strep-a-tablet .dispensing-checkmark-block');
            let text_blocks = $('#strep-a-tablet .dispensing-inner-text-block');
            let text_blocks_p = $('#strep-a-tablet .dispensing-inner-text-block p');
            let crosses = $('#strep-a-tablet .dispensing-inner-text-block img');
            $('#strep-a-tablet .dispensing-reset')[0].onclick = (e) => {
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
                if (!e.target.classList.contains('dispensing-block-h2') && !e.target.classList.contains('.dispensing-inner-text-block') && !e.target.classList.contains('.dispensing-block-p') && !e.target.classList.contains('dispensing-inner-arrow') && !e.target.classList.contains('dispensing-inner-arrows')) {
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
                                if (j != i)
                                    crosses[j].click()
                            }
                        text_blocks[i].style.visibility = 'visible';
                        text_blocks[i].style.minHeight = '150px';
                        text_blocks[i].style.width = '350px';
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
            //dispensing small arrows
            let innerArrows = $('#strep-a-tablet .dispensing-inner-arrows');
            for (let i = 0; i < 6; i++) {
                innerArrows[i].firstElementChild.onclick = (e) => {
                    if (i === 0) {
                        crosses[i].click();
                    } else {
                        blocks[i - 1].click();
                        crosses[i].click();
                    }
                };
                innerArrows[i].lastElementChild.onclick = (e) => {
                    if (i === innerArrows.length - 1) {
                        crosses[i].click();
                    } else {
                        blocks[i + 1].click();
                        crosses[i].click();
                    }
                }
            }
        });
    }
}

function mobilesScripts() {

    if ($(window).width() < 767.98) {
        ranScript = 'MOBILE';
        $(document).ready(() => {
//10 minutes timer
            let int = null;
            let timerVal = 0;
            let func = () => {
                timerVal++;
                $('#strep-a-mobile .inner')[0].firstElementChild.innerHTML = timerVal

                ;
                if (timerVal === 10) {
                    clearInterval(int);
                }
            };
            int = setInterval(func, 200);

//approach section
            let buttons = $('#strep-a-mobile .approaching-button');
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
            let stepsLeftButtons = $('#strep-a-mobile .steps-left .steps-button');
            for (let i = 0; i < stepsLeftButtons.length; i++) {
                stepsLeftButtons[i].onclick = (ev) => {
                    stepsLeftButtons[i].children[1].style.opacity = '1';
                }
            }

            let stepRightButtons = $('#strep-a-mobile .steps-right-button');
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
            let gifs = $('#strep-a-mobile .obtaining-inner img');
            let obtainingCounter = 0,
                obtainingButtons = $('#strep-a-mobile .obtaining-arrow-wrapper '),
                obtainingArrow = $('#strep-a-mobile .obtaining-arrow'),
                obtainingSteps = $('#strep-a-mobile .obtaining-step-block');
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
                if (elementScrolled('#strep-a-mobile .obtaining-slider') && !gifrunned) {
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
            let dispensingButtons = $('#strep-a-mobile .dispensing-button');
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
    }
}

desktopScripts();
tabletScripts();
mobilesScripts();


$(window).resize(() => {
    if (ranScript !== "DESKTOP")
        desktopScripts();
    if (ranScript !== 'TABLET')
        tabletScripts();
    if (ranScript !== 'MOBILE')
        mobilesScripts();
});