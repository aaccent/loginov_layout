import Modal from "./modules/Modal.js";
import Map from "./modules/Map.js";

import {validation} from './modules/validation.js';
import masks from './modules/masks.js';
// import lazyload from './modules/lazyload.js';

import fancybox from './modules/fancybox.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import dropdownOpenOnClick from './modules/dropdownOpenOnClick.js';
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

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    // inits map:
    if(document.getElementById('yamapsId')) {
        const map = new Map('yamapsId', {
            // map center:
            center: [55.77, 49.15],
            // map zoom value:
            zoom: 14,
            // placemarks:
            coords: [
                [55.767398, 49.150961]
            ],
            // map control elements:
            controls: [

            ]
        })
    }

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

    heroMainSwiper();
    reviewsSwiperControl();
    partnershipSwiperAnimation();
    pressCenterSwiper();
    seoTextExpand();
    inputFileTextSet();
    tipsAnmation();
    selectContol();
    gallerySwiperControl();
})
