const saDefaultMargin = 10;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
 for (const element of saElementList) {
   if (!element.classList.contains('show')) {
     if (element.dataset.saMargin) {
       saTriggerMargin = parseInt(element.dataset.saMargin);
     } else {
       saTriggerMargin = saDefaultMargin;
     }

     if (element.dataset.saTrigger) {
       saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
     } else {
       saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
     }

     if (window.innerHeight > saTriggerHeight) {
       element.classList.add('show');
     }
   }
 }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

