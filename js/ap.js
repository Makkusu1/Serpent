
const TAILLE = document.querySelector('#taille')
const COULEUR = document.querySelector('#couleur')
const COULEUR_PREVIEW = document.querySelector('.colorbutton')
const BURGER = document.querySelector('.burger-menu')
const PARAM = document.querySelector('.settings')
const TRAIT = document.querySelector('#trait')
 

COULEUR.addEventListener('change',()=>{
    if (COULEUR.value == 'Multicolor')
    {
        
        COULEUR_PREVIEW.style.background = ''
        COULEUR_PREVIEW.style.backgroundImage = 'url("img/multicolor.jpg")'
    }
    else {
         COULEUR_PREVIEW.style.background = COULEUR.value
         COULEUR_PREVIEW.style.backgroundImage = ''
    }
   

})

document.addEventListener('mousemove', (e)=> {
    const ROND = document.createElement('div')
    ROND.classList.add('rond')
    document.querySelector('body').append(ROND)
     if (COULEUR.value == 'Multicolor')
    {
        if(TRAIT.value == 'solid')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorP ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'solid 6px')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorPG ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'solid 1.5px')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorPF ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorD ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed 6px')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorDG ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed 1.5px')
        {
            ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : multicolorDF ${TAILLE.value}0ms linear forwards;`)

        }

    }
    else {
        ROND.setAttribute('style', `top : ${e.pageY}px; left : ${e.pageX}px; animation : ret ${TAILLE.value}0ms linear forwards; border: ${TRAIT.value} ${COULEUR.value};`)
    }
      setTimeout(() => {
        ROND.remove()
    }, `${TAILLE.value}0`);
})

document.addEventListener('touchmove',(e)=> {
    const ROND = document.createElement('div')
    ROND.classList.add('rond')
    document.querySelector('body').append(ROND)
        if(TRAIT.value == 'solid')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorP ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'solid 6px')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorPG ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'solid 1.5px')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorPF ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorD ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed 6px')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorDG ${TAILLE.value}0ms linear forwards;`)

        }
        else if (TRAIT.value == 'dashed 1.5px')
        {
            ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : multicolorDF ${TAILLE.value}0ms linear forwards;`)

        }


    }
    else {
        ROND.setAttribute('style', `top : ${e.targetTouches[0].pageY}px; left : ${e.targetTouches[0].pageX}px; animation : ret ${TAILLE.value}0ms linear forwards; border: ${TRAIT.value} ${COULEUR.value};`)
    }
      setTimeout(() => {
        ROND.remove()
    }, `${TAILLE.value}0`);

})

BURGER.addEventListener('click',()=> {
    if(PARAM.style.transform == 'translateX(100%)'){
        PARAM.style.transform = 'translateX(0vw)'
    }
    else{
        PARAM.style.transform = 'translateX(100%)'
    }
})
