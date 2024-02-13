const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.7,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// $(".elem-container").on("mouseover", function(){
//     $("#fixed-image").css("display","block");
// })
// $(".elem-container").on("mouseleave",function(){
//     $("#fixed-image").css("display","none");
// })
// $("#elem-1").on("mouseover",function(){
//     $("data-image").css("background-image",url({C:\Users\admin\development\Awwsome\converse.webp}));
// })

// var imageurl = 'https://imgs.search.brave.com/JgHwAY7eWQ_idmKacxxzOf1A_FqMayXy8bj39iHp1-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDAxODE1MTYyNjQt/M2VhODA3ZmY0NGI5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGJt/bHJaU1V5TUhOdVpX/RnJaWEo4Wlc1OE1I/eDhNSHg4ZkRBPQ';
// var img = "./nike-sneakers.jpg";
// $("#elem-1").on("mouseover", function(){
//     $(".fixed-image").css("background-image", "url("+ img +")");
// })

// var elem1 = document.querySelectorAll("#elem1");
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = 'url(${image})'
// })

// pure javascript
// var elemC = document.querySelectorAll(".elem-container");
// var fixed = document.querySelectorAll("#fixed-image")
// elemC.addEventListener("mouseenter",function(){
//     fixed.style.display = "block"
// })
// elemC.addEventListener("mouseleave", function(){
//     fixed.style.display = "none"
// })


// var elem1 = document.querySelectorAll("#elem2")
// var image = elem1.getAttribute("data-image")
// elem1.addEventListener("mouseenter",function(){
//     fixed.style.backgroundImage ="./converse.webp"
// });