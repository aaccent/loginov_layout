import Modal from "./modules/Modal.js";
import Map from "./modules/Map.js";

import {validation} from './modules/validation.js';
import masks from './modules/masks.js';
// import lazyload from './modules/lazyload.js';

import fancybox from './modules/fancybox.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import setFixedHeader from './modules/setFixedHeader.js';
import dropdownOpenOnClick from './modules/dropdownOpenOnHover.js';
import dropdownListControl from './modules/dropdownListControl.js';
import menuDropdownsOpens from './modules/menuDropdownsOpens.js';
import menuSwiperControl from './modules/menuSwiperControl.js';
import openMobileMenu from './modules/openMobileMenu.js';

import heroMainSwiper from './modules/heroMainSwiper.js';
import reviewsSwiperControl from './modules/reviewsSwiperControl.js';
import partnershipSwiperAnimation from './modules/partnershipSwiperAnimation.js';
import pressCenterSwiper from './modules/pressCenterSwiper.js';
import seoTextExpand from './modules/seoTextExpand.js';
import inputFileTextSet from './modules/inputFileTextSet.js';
import tipsAnmation from './modules/tipsAnmation.js';
import selectContol from './modules/selectContol.js';
import gallerySwiperControl from './modules/gallerySwiperControl.js';
import youtubeVideoControl from './modules/youtubeVideoControl.js';
import autoCounterAnimatiion from './modules/autoCounterAnimatiion.js';
import textParallax from './modules/textParallax.js';
import preventSubmitEvent from './modules/preventSubmitEvent.js';
import textScrollAnimation from './modules/textScrollAnimation.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // activate animation:
    setTimeout(() => {
        body.classList.remove('animate-trigger');
    }, 1000);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    // inits map:
    if(document.getElementById('yamapsId')) {
        const mediaQuery = window.matchMedia('(max-width: 992px)');
        let coords,
            center,
            data = document.getElementById('yamapsId').dataset.coords;

        data ? (coords = Array.from(data.split(', '))) : (coords = [43.237163, 76.945654]);
        mediaQuery.matches ? (center = coords) : (center = [43.256456, 76.880005]);

        const map = new Map('yamapsId', {
            // map center:
            center: center,
            // map zoom value:
            zoom: 12,
            // placemarks:
            coords: [
                coords
            ],
            // map control elements:
            controls: [

            ]
        })
    }

    // inits partrners swiper:
    setTimeout(() => {
        partnershipSwiperAnimation();
    }, 1000)

    // masks and validation:
    validation();
    masks();

    // lazyload for images, videos, iframes and objects:
    // lazyload();

    // fancybox images modals:
    fancybox();

    // other scripts:
    setHeaderPadding();
    dropdownOpenOnClick();
    dropdownListControl();
    menuDropdownsOpens();
    menuSwiperControl();
    openMobileMenu();
    setFixedHeader();

    textParallax();
    autoCounterAnimatiion();
    heroMainSwiper();
    reviewsSwiperControl();
    pressCenterSwiper();
    seoTextExpand();
    inputFileTextSet();
    tipsAnmation();
    selectContol();
    gallerySwiperControl();
    youtubeVideoControl();
    preventSubmitEvent();
    textScrollAnimation();
})
