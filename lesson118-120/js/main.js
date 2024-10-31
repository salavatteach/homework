(function () {

    // Бургер

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

    // Модалка

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
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            modal.classList.remove('modal--opened')
        }
    }

    //Табы

    const tabControls = document.querySelector('.programm__tabs-list')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.programm__tabs-btn')

        if (!tabControl) return

        e.preventDefault()

        const tabContentID = tabControl.getAttribute('href')



        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')


        document.querySelector('.programm__tabs-btn--active').classList.remove('programm__tabs-btn--active')
        tabControl.classList.add('programm__tabs-btn--active')

    }

    // Аккордеон

    const accordList = document.querySelectorAll('.programm__accord-list')

    accordList.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordList = e.currentTarget
            const accordOpenedItem = accordList.querySelector('.accord__button--active')
            const accordOpenedContent = accordList.querySelector('.accord__button--active .accord__content')

            const accordControll = e.target.closest('.accord__button')

            if (!accordControll) return

            e.preventDefault()
            const accordItem = accordControll.parentElement;
            const accordContent = accordControll.nextElementSibling;

            if (accordOpenedItem && accordItem != accordOpenedItem) {
                accordOpenedItem.classList.remove('accord__button--active')
                accordOpenedContent.style.maxHeight = null

            }


            accordItem.classList.toggle('accord__button--active')

            if (accordItem.classList.contains('accord__button--active')) {
                accordContent.style.maxHeight = accordContent.scrollHeight + 'px'
            } else {
                accordContent.style.maxHeight = null
            }


        })
    })


    // Слайд фотогалереии

    const swiper = new Swiper('.gallery__slider', {
        loop: true,

        slidesPerView: 2,
        spaceBetween: 32,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
        451: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1101: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }

    })



})()