(function () {

    // Аккордеон навигации

    const accordList = document.querySelectorAll('.nav__list')

    accordList.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordList = e.currentTarget
            const accordOpenedItem = accordList.querySelector('.nav__accord--active')
            const accordOpenedContent = accordList.querySelector('.nav__accord--active.nav__accord-list')

            const accordControll = e.target.closest('.nav__link-btn')

            if (!accordControll) return

            e.preventDefault()
            const accordItem = accordControll.parentElement;
            const accordContent = accordControll.nextElementSibling;

            // if (accordOpenedItem && accordItem != accordOpenedItem) {
            //     accordOpenedItem.classList.remove('nav__accord--active')
            //     accordOpenedContent.style.maxHeight = null

            // }


            accordItem.classList.toggle('nav__accord--active')

            if (accordItem.classList.contains('nav__accord--active')) {
                accordContent.style.maxHeight = accordContent.scrollHeight + 'px'
            } else {
                accordContent.style.maxHeight = null
            }


        })
    })

})()