import gsap from "../libs/gsap/src/all.js";
import {ScrollTrigger} from "../libs/gsap/src/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const textWrappers = document.querySelectorAll('.animated-text');

    if(textWrappers.length > 0) {
        Array.from(textWrappers).forEach( textWrapper => {
            let pDiv = textWrapper.querySelector('.animated-text__colored');
            let arr = Array.from(pDiv.innerText.split(' '));
            pDiv.textContent = "";
            arr.forEach( item => {
                let spanOuter = document.createElement('span');
                spanOuter.classList.add('span-outer');
                let spanInner = document.createElement('span');
                spanInner.classList.add('span-inner');

                spanOuter.textContent = item + ' ';
                spanInner.textContent = item + ' ';

                spanOuter.append(spanInner);
                pDiv.append(spanOuter);
            })
        })

        gsap.set('.span-inner', { width: '0'});

        gsap.timeline({
            scrollTrigger:{
                    trigger: '.js-animated-text-trigger',
                    scrub: 4,
                    start: "top bottom",
                    end: "top 50px"
                }
            })
            .to('.span-inner', {
                width: '100%', 
                duration: 2.5, 
                ease: "power1.in",
                stagger: 2.5
            })
    } else {
        return;
    }
}