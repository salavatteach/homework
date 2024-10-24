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


)

const openModal = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')

openModal.addEventListener('click', () => {
    modal.classList.add('modal--opened')
})
modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('modal__cancel') ||  target && target.classList.contains('modal')){
        modal.classList.remove('modal--opened')}
})
