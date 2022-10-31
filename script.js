// client review js 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// header section 

let navigationBtn = document.querySelector(".heder-menu");
let croseBtn = document.querySelector(".crose-menu");
let headerNavigation = document.querySelector(".header-navigation");

navigationBtn.addEventListener("click", () => {
  headerNavigation.classList.add("sticky");
  navigationBtn.classList.add("removena")
  croseBtn.classList.add("visible")
})

croseBtn.addEventListener("click", () => {
  headerNavigation.classList.remove("sticky");
  croseBtn.classList.remove("visible")
  navigationBtn.classList.remove("removena")
})


// recent portfolio filter section
let portfolioBtn = document.querySelectorAll(".list");
let portImgBtn = document.querySelectorAll(".porfolio-all");

for(let i = 0; i < portfolioBtn.length; i++) {
  portfolioBtn[i].addEventListener("click", function() {
    for(k = 0; k < portfolioBtn.length; k++) {
      portfolioBtn[k].classList.remove("actives")
    }
    portfolioBtn[i].classList.add("actives")

    let dataFilter = this.getAttribute("data-filter");
    for(let j = 0; j < portImgBtn.length; j++) {
      portImgBtn[j].classList.add("hide")
      if(portImgBtn[j].getAttribute("data-item") == dataFilter || dataFilter == "all"){
        portImgBtn[j].classList.remove("hide")
      } 
    }
  })
}

// number animated 
let counter = document.querySelectorAll(".counter");
let speed = 60;

let mainSuccesfulySce = document.querySelector(".complete-project");
let sectionOverser = new IntersectionObserver((entries, observer) => {

  let [entry] = entries;
  if(!entry.isIntersecting) return


  counter.forEach(counters => {
    counters.innerText = "0"
  
    function updateNumber() {
      let targetNumber = +counters.getAttribute("data-number");
      let initailNumber = +counters.innerText;
      let inPerCount = Math.ceil( targetNumber / speed);
      if(initailNumber < targetNumber) {
        counters.innerText = initailNumber + inPerCount
        setTimeout(updateNumber,35)
      }
    }
    updateNumber();
  })

  observer.unobserve(mainSuccesfulySce)

}, {
  root : null,
  threshold : 0,
})

sectionOverser.observe(mainSuccesfulySce);

// back to top section 
let backTop = document.querySelector(".back-top-top");

window.addEventListener("scroll", () => {
  backTop.classList.toggle( "sticky", window.scrollY > 500);
  
})

function backTops() {
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

// create preloader 
let loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
  loader.style.display = "none"
})