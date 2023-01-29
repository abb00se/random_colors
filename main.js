let ground = document.querySelector('.ground');
const amountOfBoxes = 725;
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];



// append() - указывает что появится внутри элемента к которому вы обращаетесь

for (let i = 0; i < amountOfBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = 'rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')'
}



function removeColor(asd) {
    asd.style.background = ''
}

// function randColor() {
//     let index = Math.floor(Math.random() * colors.length)
//     return colors[index]
// }
function randColor() {
    return Math.floor(Math.random() * 256)

}

console.log('rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')');