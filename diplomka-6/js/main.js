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

    //Табы
    document.addEventListener('click', () => {

        const tabList = document.querySelectorAll('.service__tabs-list')

        tabList.forEach((tab) => {

            tab.addEventListener('click', e => {
                e.preventDefault()

                const target = e.target
                const tabItem = target.parentElement

                document.querySelector('.service--tabs-active').classList.remove('service--tabs-active')
                tabItem.classList.add('service--tabs-active')

                const tabId = target.getAttribute('href')
                const tabContent = document.querySelector(tabId)

                document.querySelector('.service--content-active').classList.remove('service--content-active')
                tabContent.classList.add('service--content-active')
            })
        })

    })




})()