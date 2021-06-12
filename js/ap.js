document.addEventListener('mousemove', (e)=> {
    const raoul = document.createElement('div')
    raoul.classList.add('rond')
    document.querySelector('body').append(raoul)
    raoul.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px;`)
    setTimeout(() => {
        raoul.remove()
    }, 1000);
})