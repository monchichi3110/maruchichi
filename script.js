const images =
document.querySelectorAll(".carousel-img");

let current = 0;

function updateCarousel(){

  images.forEach(img=>{
    img.classList.remove("center","side");
    img.style.display = "none";
  });

  const prev =
  (current - 1 + images.length) % images.length;

  const next =
  (current + 1) % images.length;

  images[prev].style.display = "block";
  images[current].style.display = "block";
  images[next].style.display = "block";

  images[prev].classList.add("side");
  images[current].classList.add("center");
  images[next].classList.add("side");
}

document.querySelector(".right")
.addEventListener("click",()=>{

  current =
  (current + 1) % images.length;

  updateCarousel();
});

document.querySelector(".left")
.addEventListener("click",()=>{

  current =
  (current - 1 + images.length)
  % images.length;

  updateCarousel();
});

setInterval(()=>{

  current =
  (current + 1) % images.length;

  updateCarousel();

},3000);

updateCarousel();