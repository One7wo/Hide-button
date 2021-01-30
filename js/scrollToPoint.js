const scrollToPoint = () => {
    const point = document.getElementsByClassName('point')[0].offsetTop - window.innerHeight/2;
    window.scroll({
        top: point,
        left: 0,
        behavior: 'smooth'
    })
}