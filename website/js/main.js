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


const btnModal = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')




btnModal.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)  

   function openModal(e) {
    e.preventDefault()
    modal.classList.add('modal--opened')
}

function closeModal(e) {
    e.preventDefault()

    const target = e.target
    if ( target.closest('.modal__cancel') ||target.classList.contains('modal')){
        modal.classList.remove('modal--opened')}
}


})()