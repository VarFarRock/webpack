
import './map.js'
import './swiper__header.js'
import './swiper__news.js'
//scroll element//
let btn = document.querySelector('.hero__btn').onclick = () => {
    window.scrollTo(0, 1000);
}
//modal-img//
// let img = document.querySelectorAll('.gallery__content-item');
// let popup = document.querySelector('.credits__popup')
// let out = document.querySelector('.credits__popup-contain')
// let wrap = document.querySelector('.wrapper')
// document.querySelector('.gallery__content-works').addEventListener('click', (e) => {
//     // if(e.target.className === 'gallery__content-item'){
//         console.log(e.target);
//         popup.classList.add('credits__popup--visible')
//         wrap.style.overflow = "hidden"
//     // }
// })
// // for(let i = 0;i < img.length;i++ ){
// //     img[i].addEventListener('target', () => {
// //             popup.classList.add('credits__popup--visible')
// //             wrap.style.overflow = "hidden"
// //     })
// // }
// document.querySelector('.credits__popup-close').addEventListener('click', (e) => {
//     document.querySelector('.credits__popup').classList.remove('credits__popup--visible')
//     document.querySelector('.wrapper').style.overflow = "visible"
// })
