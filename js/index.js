// window.addEventListener("scroll" , function(){
//     const topMenu = document.querySelector("#topmenu")
//     if(window.scrollY > 0 )
//     {
//         // topMenu.style.display = "none";
//     }
// })

const item1 = document.querySelectorAll(".item1")[0];
const text1 = document.querySelectorAll(".text")[0];
const item2 = document.querySelectorAll(".item1")[1];
const text2 = document.querySelectorAll(".text")[1];
const item3 = document.querySelectorAll(".item1")[2];
const text3 = document.querySelectorAll(".text")[2];
const item4 = document.querySelectorAll(".item1")[3];
const text4 = document.querySelectorAll(".text")[3];

item1.addEventListener("mouseover", function(){
    text1.classList.remove('d-none');
})

item1.addEventListener("mouseout",()=>{
    text1.classList.add('d-none');
})



item2.addEventListener("mouseover", function(){
    text2.classList.remove('d-none');
})

item2.addEventListener("mouseout",()=>{
    text2.classList.add('d-none');
})



item3.addEventListener("mouseover", function(){
    text3.classList.remove('d-none');
})

item3.addEventListener("mouseout",()=>{
    text3.classList.add('d-none');
})

item4.addEventListener("mouseover", function(){
    text4.classList.remove('d-none');
})
item4.addEventListener("mouseout",()=>{
    text4.classList.add('d-none');
})
