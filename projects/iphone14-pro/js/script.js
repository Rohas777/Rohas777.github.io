// Menu burger

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

// Smooth scroll to blocks

const navLinks = document.querySelectorAll('[data-goto]')

if (navLinks.length > 0) {
    navLinks.forEach(elem => {
        elem.addEventListener('click', onNavLinkClick)
    })
    function onNavLinkClick(e) {
        const navLink = e.target
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            })
            e.preventDefault()
        }
    }
}

//Copy phone number to clipboard

const number = document.querySelectorAll('._number')
const successMessage = document.querySelector('.success-message')

if (number) {
    number.forEach(elem =>
        elem.addEventListener("click", function (e) {
            navigator.clipboard.writeText(elem.innerText)
            successMessage.classList.add('_active')
            setTimeout(() => {
                successMessage.classList.remove('_active')
            }, 3000)
            e.preventDefault()
        }))
}