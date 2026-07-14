const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelector(".dots");

let current = 0;

// ドット生成
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dots.appendChild(dot);
});

const dotList = document.querySelectorAll(".dots span");

function showSlide(index){
  slides[current].classList.remove("active");
  dotList[current].classList.remove("active");

  current = index;

  slides[current].classList.add("active");
  dotList[current].classList.add("active");
}

next.onclick = () => {
  showSlide((current + 1) % slides.length);
};

prev.onclick = () => {
  showSlide((current - 1 + slides.length) % slides.length);
};

// 3秒ごとに自動再生
setInterval(() => {
  showSlide((current + 1) % slides.length);
}, 3000);