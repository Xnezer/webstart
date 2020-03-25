$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.addClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });

  $(document).mouseup(function (e){
    var div = $(".modal__dialog");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      modal.removeClass('modal--visible');
    };
  }); 

  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      modal.removeClass('modal--visible');
    };
  })

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  
  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();
  
  //Валидация формы
  $('.modal__form').validate({
    errorClass: 'invalid',
    wrapper: 'span',
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      modalCheckbox: "required",
      userName: "required",
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      modalCheckbox: "Подтвердите отправку данных",
      userName: "Имя обязательно",
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Введите email",
        email: "Введите в формате name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: 'invalid',
    wrapper: 'span',
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      controlCheckbox: "required",
      userName: "required",
      userPhone: "required",
    },
    messages: {
      controlCheckbox: "Подтвердите отправку данных",
      userName: "Имя обязательно",
      userPhone: "Телефон обязателен",
    }
  });

  $('.control__form').validate({
    errorClass: 'invalid',
    wrapper: 'span',
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      controlCheckbox: "required",
      userName: "required",
      userPhone: "required",
    },
    messages: {
      controlCheckbox: "Подтвердите отправку данных",
      userName: "Имя обязательно",
      userPhone: "Телефон обязателен",
    }
  })

  // маска для телефона
  $('[type=tel]').mask('+7-(000)-000-00-00', {placeholder: "+7-(___)-___-__-__"});

  // Яндекс карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/myIcon.svg',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
});
});