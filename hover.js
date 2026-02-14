const numsForHover = document.querySelectorAll('.nums > div')
const operatorsForHover = document.querySelectorAll('.inc-dec-cont > div')
const sumClearForHover = document.querySelectorAll('.sum-cont > div');

function hoverIn(el) {
    el.addEventListener('mouseenter', (i) => {
        i.target.style.backgroundColor = 'rgba(250, 250, 250, 1)';
        i.target.style.cursor = 'pointer';
    })
}

function hoverOut(el) {
    el.addEventListener('mouseleave', (i) => {
        i.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    })
}

function activeBtn(el) {
    el.addEventListener('click', (i) => {
        i.target.style.backgroundColor = 'rgba(240, 240, 240, 1)';
    })
}

numsForHover.forEach(hoverIn)
numsForHover.forEach(hoverOut)
numsForHover.forEach(activeBtn)

operatorsForHover.forEach(hoverIn)
operatorsForHover.forEach(hoverOut)
operatorsForHover.forEach(activeBtn)

sumClearForHover.forEach(hoverIn)
sumClearForHover.forEach(hoverOut)
sumClearForHover.forEach(activeBtn)