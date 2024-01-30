import Swiper from "../libs/swiper/swiper-bundle.min.mjs";

export default () => {
  const menuSwiper = document.querySelector(".js-menu-swiper");

  if (!menuSwiper) return;

  const menusSwiper = new Swiper(menuSwiper, {
    allowTouchMove: false,
    grabCursor: false,
    observer: true,
    observeSlideChildren: true,

    on: {
      init: function () {
        let nextBtn = document.querySelector(".js-menu-next");
        let prevBtn = document.querySelector(".js-menu-back");
        let dropDownBtns = document.querySelectorAll(
          ".js-menu-dropdown-button"
        );

        nextBtn.addEventListener("click", () => {
          menusSwiper.slideNext();
        });

        prevBtn.addEventListener("click", () => {
          Array.from(dropDownBtns).forEach((b) => {
            b.classList.remove("menu-dropdown__button--active");
          });
          menusSwiper.slidePrev();
        });
      },
    },
  });
};
