import "../libs/vanilla-lazyload/lazyload.min.js";

export default () => {
    if (canUseWebp() === false) {
        const lazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]');

        lazyBgItems.forEach((item) => {
            const srcBgFallback = item.getAttribute('data-bg-fallback');
            item.setAttribute('data-bg', srcBgFallback);
        });
    }

    function canUseWebp() {
        const elem = document.createElement('canvas');

        if (elem.getContext && elem.getContext('2d')) {
          return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        return false;
    }

    function logElementEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute("data-src"));
    }

    const callback_error = function (element) {
        logElementEvent("💀 ERROR", element);
        element.src = "../../images/placeholder.png";
    };

    const lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        callback_error: callback_error,
    });


    function refreshLazy() {
        lazyLoadInstance.update();
    }

    window.refreshLazy = refreshLazy;
}
