(function () {

    // Аккордеон навигации

    const dropBtn = document.querySelector('.dropdown-btn')
    const dropContentOpen = dropBtn.parentElement
    const wrapper = document.querySelector('.wrapper')


    wrapper.addEventListener('click', (e) => {
        const target = e.target
        console.log(target)
        if (target && target.classList.contains('dropdown-btn')) {

            dropContentOpen.classList.add('dropdown--active')
        }
        else if (dropContentOpen.classList.contains('dropdown--active')) {

            dropContentOpen.classList.remove('dropdown--active')

        }
        else {
            dropContentOpen.classList.remove('dropdown--active')

        }
    })

  // Бургер меню
 
})()