(function () {

    // Аккордеон навигации

    const dropBtn = document.querySelector('.dropdown-btn')
    const dropContentOpen = dropBtn.parentElement


    document.addEventListener('click', (e) => {

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
    const tabList = document.querySelector('.service__tabs-list')

    tabList.addEventListener('click', (e) => {

        const target = e.target
        const tabItem = target.parentElement
        e.preventDefault()

        document.querySelector('.service--tabs-active').classList.remove('service--tabs-active')
        tabItem.classList.add('service--tabs-active')

        const tabId = target.getAttribute('href')
        const tabContent = document.querySelector(tabId)

        document.querySelector('.service--content-active').classList.remove('service--content-active')
        tabContent.classList.add('service--content-active')
    })

    //Аккордион

    document.querySelectorAll('.accord__content-heading').forEach((el) => {
        el.addEventListener('click', () => {
            const accordActive = el.parentElement
            if (accordActive && accordActive.classList.contains('accord--open-active')
            ) {
                accordActive.classList.remove('accord--open-active')

            } else {
                accordActive.classList.add('accord--open-active')

            }


            const accordContent = el.nextElementSibling;

            if (accordContent.style.maxHeight) {

                accordContent.style.maxHeight = null;
            } else {
                accordContent.style.maxHeight = accordContent.scrollHeight + 'px';
            }

        })

    })

    //  Кейс-слайдер

    new Swiper('.case__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        slidesPerGroup: 1,


        navigation: {
            nextEl: '.case__nav-next',
            prevEl: '.case__nav-prev',
        },

        breakpoints: {

            401: {
                slidesPerView: 1.1,
                
            },
            501: {
                slidesPerView: 1.3,
            },
            601: {
                slidesPerView: 1.5,
            },
            701: {
                slidesPerView: 1.7,
            },
            801: {
                slidesPerView: 1.8,
            },
            901: {
                slidesPerView: 2,
                centeredSlides: false,
                slidesPerGroup: 2,

            },
            1101: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                centeredSlides: false,
                slidesPerGroup: 2,


            },
            1261: {
                slidesPerView: 3,
                spaceBetween: 15,
                centeredSlides: false,
                slidesPerGroup: 3,
            }
        }

    })


})()