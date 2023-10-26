const clickableDiv = document.getElementById("clickableDiv");
const hiddenContent = document.getElementById("hiddenContent");
let isHidden = true;
let isDiv = true;

clickableDiv.addEventListener("click", function () {
    if (isHidden) {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
    isHidden = !isHidden;
});
hiddenContent.addEventListener("click", function () {
    if (isDiv) {
        hiddenContent.style.display = "none";
    } else {
        hiddenContent.style.display = "block";
    }
    isDiv = !isDiv;
});

const menubar = document.querySelector('header .header-top .menu .tour')
menubar.addEventListener("click",function(){
document.querySelector('header .header-between').classList.toggle('active')
})

const column_one_1 = document.querySelector('main .content-three .note-information .column-one .one-row-one')
column_one_1.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-one .one-row-one .read').classList.toggle('active')
})
const column_one_2 = document.querySelector('main .content-three .note-information .column-one .one-row-two')
column_one_2.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-one .one-row-two .read').classList.toggle('active')
})
const column_one_3 = document.querySelector('main .content-three .note-information .column-one .one-row-three')
column_one_3.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-one .one-row-three .read').classList.toggle('active')
})
const column_one_4 = document.querySelector('main .content-three .note-information .column-one .one-row-four')
column_one_4.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-one .one-row-four .read').classList.toggle('active')
})
const column_one_5 = document.querySelector('main .content-three .note-information .column-one .one-row-five')
column_one_5.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-one .one-row-five .read').classList.toggle('active')
})

const column_two_1 = document.querySelector('main .content-three .note-information .column-two .two-row-one')
column_two_1.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-two .two-row-one .read').classList.toggle('active')
})
const column_two_2 = document.querySelector('main .content-three .note-information .column-two .two-row-two')
column_two_2.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-two .two-row-two .read').classList.toggle('active')
})
const column_two_3 = document.querySelector('main .content-three .note-information .column-two .two-row-three')
column_two_3.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-two .two-row-three .read').classList.toggle('active')
})
const column_two_4 = document.querySelector('main .content-three .note-information .column-two .two-row-four')
column_two_4.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-two .two-row-four .read').classList.toggle('active')
})
const column_two_5 = document.querySelector('main .content-three .note-information .column-two .two-row-five')
column_two_5.addEventListener("click",function(){
document.querySelector('main .content-three .note-information .column-two .two-row-five .read').classList.toggle('active')
})

