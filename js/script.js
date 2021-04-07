(function () {

    // begin - catalog menu
    let $catalogBtn = $('.catalog-btn');
    let $catalogMenu = $('.catalog-menu');
    let $closeMenuBtn = $('.close-menu__btn');
    let $body = $('body');
    let $catalogMenuCaption = $('.menu-caption');

    //    клик по кнопке Каталог в десктопной версии
    $catalogBtn.on('click', function () {
        $(this).toggleClass('js__catalog-open');
        $catalogMenu.toggleClass('catalog-menu-open');

        if ($(window).outerWidth() < 850) {
            $body.addClass('fixed');
        } 
    });
    
//    клик по заголовку каталога в версии для смартфонов
    $catalogMenuCaption.on('click', function(){
        if($(window).outerWidth() < 500){
            $(this).next('ul').slideToggle(300);
        }
    })

    //    клик по крестику в меню каталога в мобильной версии
    $closeMenuBtn.on('click', function () {
        $catalogMenu.removeClass('catalog-menu-open');
        $body.removeClass('fixed');
    });

    //  end - catalog menu
//    подключаю слайдер
    $('.brand-sl').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
//подключаю фансибокс
    $('.fancybox').fancybox();

    //    input type number
    (function quantityProducts() {
        var $quantityArrowMinus = $(".minus");
        var $quantityArrowPlus = $(".plus");
        var $quantityNum = $(".quantity");

        $quantityArrowMinus.click(function (e) {
            e.preventDefault();
            quantityMinus();
        });
        $quantityArrowPlus.click(function (e) {
            e.preventDefault();
            quantityPlus();
        });

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();

    //    управление видом каталога
    let $btnGrid = $('.js__grid');
    let $btnRow = $('.js__row');
    let $productBox = $('.product__box');
    let $viewBox = $('.js__view');
    
//    ф-ция делает каталог строками
    function makeARow() {
        $productBox.removeClass('product__grid');
        $productBox.addClass('product__row');
    }
//    ф-ция делает каталог сеткой
    function makeAGrid() {
        $productBox.removeClass('product__row');
        $productBox.addClass('product__grid');
    }
    
//    фукнция слежения за отображением переключателя вида каталога товаров в зависимости от расширения
    function watchView(){
        if ($(window).outerWidth() < 740) {
            makeAGrid();
            $viewBox.hide();
        } else {

            if ($('.product__row').length) {} else {
                if ($('.js__view').attr('style') == 'display: none;') {
                    $('.js__view').attr('style', 'display: flex;')
                }
                $viewBox.show();
                makeAGrid()
            }

        }
    }
    
    watchView();
  
    $btnRow.on('click', function () {
        makeARow();
    });
    $btnGrid.on('click', function () {
        makeAGrid();
    });
    // конец   управление видом каталога 

//    функция адаптации шапки сайта
    function headerTransformMobile() {
        if ($(window).outerWidth() < 850) {
            let mailLogo = $('.logo').delay();
            let headerTop = $('.header__top .inner');
            headerTop.prepend(mailLogo);

            let storeMenu = $('.store-menu__wr');
            let catalogMenu = $('.catalog-menu');
            catalogMenu.append(storeMenu);
            
        } else {
            if ($('.header__top .logo').length) {
                let mailLogo = $('.logo').delay();
                $('.header__middle .inner').prepend(mailLogo);
                
                let storeMenu = $('.store-menu__wr');
                $('.header__top .inner').prepend(storeMenu);
            }
        }
    }
    
    headerTransformMobile()
    $(window).resize(function () {
        watchView();
        headerTransformMobile(); 
        if($(window).outerWidth() >= 500){
            console.log('Вали инлафные стили!')
            $('.catalog-menu ul').removeAttr('style'); //чищу инлайновые стили которые могли остаться у внутренних меню каталога
        }
    });

})();
