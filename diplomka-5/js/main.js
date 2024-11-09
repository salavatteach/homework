(function () {

    // Аккордеон навигации

    const dropBtn = document.querySelector('.dropdown-btn')
    const dropContentOpen = dropBtn.parentElement
    const wrapper = document.querySelector('.wrapper')


    wrapper.addEventListener('click', (e) => {

        if (e.target && e.target.classList.contains('dropdown-btn')) {

            dropContentOpen.classList.toggle('dropdown--active')
        }
        else {
            dropContentOpen.classList.remove('dropdown--active')

        }
    })

    // Бургер меню

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__item')
        const burgerNav = e.target.closest('.body--opened-menu')
        console.log(e.target)
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')
        ) {
            document.body.classList.add('body--opened-menu')
        }
        else {
            document.body.classList.remove('body--opened-menu')
        }

    }
})()