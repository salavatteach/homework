(function () {
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const butgerIcon = e.target.closest('.burger-icon')
        const butgerNavLink = e.target.closest('.nav__link')

        if (!butgerIcon && !butgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')
        ) {
            document.body.classList.add('body--opened-menu')

        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

}


)()
// const body = document.querySelector('.body')
// const buttonBurger = document.querySelector('.burger-icon')
// const navLink = document.querySelector('.nav__list')

// buttonBurger.addEventListener('click', () => {
//     body.classList.add('body--opened-menu')
// })

// const closeNav = () => {
//     body.classList.remove('body--opened-menu')
// }

// navLink.addEventListener('click', () => {
//     closeNav()
// }
// )