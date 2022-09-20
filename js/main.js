$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const reviewSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  //Открытие меню
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  //Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  //Обработка формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least two letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        emailModal: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "The number must be 11 digits long",
        },
      },
    });
  });

  //Валидация
  $("#phoneModal").mask("+7 (000) 000-00-00");
  $("#phoneFooter").mask("+7 (000) 000-00-00");

  //Анимация
  AOS.init();

  //Ховеры
  var hoverButton = $(".hover-button");
  var hoverLink = $(".hover-link");
  var hoverImage = $(".hover-image");
  $(window)
    .resize(function () {
      if ($(window).width() > 992) {
        hoverLink.addClass("hover-link--hover");
        hoverButton.addClass("hover-button--hover");
        hoverImage.addClass("hover-image--hover");
      } else {
        hoverLink.removeClass("hover-link--hover");
        hoverButton.removeClass("hover-button--hover");
        hoverImage.removeClass("hover-image--hover");
      }
    })
    .resize();

  let searchBtn = document.querySelector(".search__button ");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search__input").value = "";
  });
});
