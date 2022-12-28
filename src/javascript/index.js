import "../style.css"

const formInputs = document.querySelectorAll("form input")
const formSelect = document.querySelector("select")

function inputValidation() {
    formInputs.forEach((input) => {
        input.onblur = (e) => {
            if (!e.target.value) {
                e.target.style.border = "2px solid red"
            } else {
                e.target.style.border = "none"
            }
        }
    })
}

function stateValidation() {
    formSelect.onblur = (e) => {
        if (!formSelect.value) {
            formSelect.style.color = "red"
        }
    }
}

function formValidation() {
    inputValidation()
    stateValidation()
}

formValidation()
