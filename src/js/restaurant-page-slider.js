const swiper = new Swiper ('.kitchen-slider', {

    // Стрілки
    navigation: {
        nextEl: '#button-next-kitchen',
        prevEl: '#button-prev-kitchen'
    },
    
        // Перемикання при кліку на слайд
        slideToClickedSlide: true,
        // Курсор перетягування
        grabCursor: true,
    
        // Керування клавіатурою
        keyboard: {
            // Вмикання/вимикання
            enabled: true,
            // Вмикання/вимикання, коли слайдер у вьюпорті
            onlyInViewport: true,
        },
                 
        // Брейк поінти (адаптив)
        // Ширина єкрану
        // slidesPerView - кількість слайдів на екрані
        // spaceBetween - відступ між слайдами
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },
    
        // Відключення функціоналу, якщо слайдів меньше ніж треба
        watchOverflow: true,
    
        // Активний слайд по центру
        centeredSlides: false,
    
        // Безкінечність
        loop: true,
    
        // Вмикання/вимикання перетягування на ПК
        simulateTouch: true,
        // Чутливість свайпу 
        touchRatio: 1,
    
    });