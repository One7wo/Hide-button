const onScrollStopped = (domElem, callback, delay = 200) => {
    domElem.addEventListener('scroll', () => {
        document.getElementsByClassName('f-btn')[0].style.cssText = `
        transition: all 0.2s ease;
        bottom: -55px;`

        if (window.pageYOffset > 96
            && window.pageYOffset < document.getElementsByClassName('point')[0].offsetTop - window.innerHeight
            && window.pageYOffset > document.getElementsByClassName('point')[0].offsetTop + 80) {
            document.getElementsByClassName('gear')[0].style.cssText = `
                
                position: fixed;
                animation-name: rotation-gear-scroll;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
        `}
        if (document.getElementsByClassName('point')[0].offsetTop > window.pageYOffset
            && document.getElementsByClassName('point')[0].offsetTop < window.pageYOffset + window.innerHeight) {
            setTimeout(() => {
                document.getElementsByClassName('gear')[0].style.cssText = `
            top: -95px;

            transition: all 0.2s ease;
            
            `
            }, 200)
        }
        else {

            setTimeout(() => {
                document.getElementsByClassName('gear')[0].style.cssText = `
            top: 95px;

            transition: all 0.2s ease;
            
            `
            }, 200)
        }

        clearTimeout(callback.delay);
        callback.delay = setTimeout(callback, delay);
    });
}

onScrollStopped(window, () => {
    document.getElementsByClassName('f-btn')[0].style.cssText = `
        transition: all 0.2s ease;
        bottom: 0px;
    `
    if (document.getElementsByClassName('point')[0].offsetTop > window.pageYOffset
        && document.getElementsByClassName('point')[0].offsetTop < window.pageYOffset + window.innerHeight - 55) {

    }
    else {
        document.getElementsByClassName('gear')[0].style.cssText =
            `
            position: absolute;
            animation-name: move-gear;
            animation-duration: 0.7s;
            animation-iteration-count: 1;
            animation-timing-function: easeOutQuad;
        `

        let moveGearAnimation = document.createElement('style');
        moveGearAnimation.type = 'text/css';
        let moveGear = document.createTextNode(
            `
        @keyframes move-gear {
            from{
                top: ${window.pageYOffset + 95}px;
                transform:rotate(720deg);
            }
            50%{
                top: ${window.pageYOffset + 160}px;
                transform:rotate(1080deg);
            }
            to{
                
                top: ${window.pageYOffset + 95}px;
                transform:rotate(360deg);
            }
        }
        `

        )
        moveGearAnimation.appendChild(moveGear);
        document.getElementsByClassName('gear')[0].appendChild(moveGearAnimation);



        setTimeout(() => {
            document.getElementsByClassName('gear')[0].style.cssText =
                `
            animation-name: rotation-gear;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
    `
        }, 700)
    }
})
