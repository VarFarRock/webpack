
import './map.js'
import './swiper__header.js'
import './swiper__news.js'
//scroll element//
let btn = document.querySelector('.hero__btn').onclick = () => {
    window.scrollTo(0, 1000);
}
// modal-img//
let img = document.querySelectorAll('.gallery__content-item');
let popup = document.querySelector('.credits__popup')
let out = document.querySelector('.credits__popup-contain')
let wrap = document.querySelector('.wrapper')
document.querySelector('.gallery__content').addEventListener('click', (e) => {
    // if(e.target.src){
        console.log(e.target.src);
        let img = document.createElement('img')
        img.setAttribute('src', e.target.src)
        img.classList.add('credits__popup-item')
        out.appendChild(img)
        popup.classList.add('credits__popup--visible')
        wrap.style.overflow = "hidden"
    // }
    document.querySelector('.credits__popup-close').addEventListener('click', () => {
        out.removeChild(img)
        document.querySelector('.credits__popup').classList.remove('credits__popup--visible')
        document.querySelector('.wrapper').style.overflow = "visible"
    })
    
})

