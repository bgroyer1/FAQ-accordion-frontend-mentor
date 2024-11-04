const buttons = document.querySelectorAll('.card-expand-btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('negative-svg')
        const paragraph = button.nextElementSibling
        paragraph.classList.toggle('hidden')
    })
})

