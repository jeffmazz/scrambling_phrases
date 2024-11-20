const button = document.querySelector('.button')
const scrambled_text = document.querySelector('.scrambled_text')

const phrases = ["Hello, World!", "You're Welcome!", "Coding is fun!", "Let's build something great!", "Code. Test. Repeat.", "Never stop learning."]
const characters = "abcdefghijklmnopqrstuvwxyz ,'"

let selectedPhrase = []
let scrambledArray = []

const pickPhrase = () => {

    selectedPhrase = []

    let picked = phrases[Math.floor(Math.random()*phrases.length)]
    let pickedArray = picked.split('')

    pickedArray.forEach(char => {
        selectedPhrase.push(char)
    })

}

const handlePhrase = (array) => {

    scrambled_text.innerHTML = ""

    array.forEach(char => {
        scrambled_text.innerHTML += char
    })

}

const scrambleText = () => {

    scrambledArray = []

    selectedPhrase.forEach(el => {
        scrambledArray.push(el.replace(el,characters[Math.floor(Math.random() * characters.length)]))
    })
    
    console.log(scrambledArray)

}

button.addEventListener('click', () => {

    button.disabled = true

    pickPhrase()
    scrambleText()

    scrambledArray.forEach((el, index, array) => {

        const delay = index * 200

        setTimeout(() => {
            let interval = setInterval(() => {
                scrambledArray[index] = characters[Math.floor(Math.random()*characters.length)]
                handlePhrase(scrambledArray)
            }, 100)

            setTimeout(() => {
                clearInterval(interval)
                scrambledArray[index] = selectedPhrase[index]
                handlePhrase(scrambledArray)
            }, 2000)

        }, delay)

    })

    setTimeout(() => {
        button.disabled = false
    }, scrambledArray.length * 200 + 2000)

})