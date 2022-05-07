const form = document.getElementById('form');
const password = document.getElementById('pWord')
const message = document.getElementById('message')
const upperCase = /[A-Z]/g
const lowerCase = /[a-z]/g
const number = /[0-9]/g
const special = /\W|_/g
let valid = false


form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
})
password.onfocus = () => {
    message.style.display = "block";


}
password.onblur = () => {
    message.style.display = "none";
}
password.onkeyup = () => {
    const passwordValue = password.value

    if (passwordValue.length >= 8) {
        document.getElementById('char').classList.add('valid')
    } else {
        document.getElementById('char').classList.remove('valid')
    }
    if (passwordValue.match(upperCase)) {
        document.getElementById('upper').classList.add('valid')
    } else {
        document.getElementById('upper').classList.remove('valid')
    }
    if (passwordValue.match(lowerCase)) {
        document.getElementById('lower').classList.add('valid')
    } else {
        document.getElementById('lower').classList.remove('valid')
    }
    if (passwordValue.match(number)) {
        document.getElementById('num').classList.add('valid')
    } else {
        document.getElementById('num').classList.remove('valid')
    }
    if (passwordValue.match(special)) {
        document.getElementById('special').classList.add('valid')
    } else {
        document.getElementById('special').classList.remove('valid')
    }
}
const checkInput = () => {

    const passwordValue = password.value

    if (passwordValue === '') {
        valid = false
    } else {
        valid = true
    }
    if (passwordValue.length >= 8) {
        valid = true
    } else {
        valid = false
    }
    if (passwordValue.match(upperCase)) {
        valid = true
    } else {
        valid = false
    }
    if (passwordValue.match(lowerCase)) {
        valid = true
    } else {
        valid = false
    }
    if (passwordValue.match(number)) {
        valid = true
    } else {
        valid = false
    }
    if (passwordValue.match(special)) {
        valid = true
    } else {
        valid = false
    }
    if (valid) {
        window.location = "validation.html"
    } else {
        message.style.display = "block";

    }
}


