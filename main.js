const toggleBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const toggleBtnIcon = document.querySelector(".menu-toggle img");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
  if (mobileMenu.classList.contains("show-menu")) {
    toggleBtnIcon.src = "./assets/mobile/icon-cross.svg";
  } else {
    toggleBtnIcon.src = "./assets/mobile/icon-hamburger.svg";
  }
});

window.addEventListener("resize", () => {
  if (this.window.innerWidth >= 768) {
    mobileMenu.classList.remove("show-menu");
    toggleBtnIcon.src = "./assets/mobile/icon-hamburger.svg";
  }
});

const content = [
  {
    slide: "slide-1",
    main: "Brand naming & guidelines",
    title: "Lean Product Roadmap",
    desc: "2019 project",
  },
  {
    slide: "slide-2",
    main: "Brand identity & merchandise",
    title: "New Majestic Hotel",
    desc: "2018 Project",
  },
  {
    slide: "slide-3",
    main: "Brand identity & web design",
    title: "Crypto Dashboard",
    desc: "2016 Project",
  },
];

const guideline = document.getElementById("guideline");
guideline.innerHTML = `<div id="guideline-bg" class="roadmap-bg">
          <div class="roadmap-text text-white">
            <h4 id="guideline-title" class="sml-heading"></h4>
            <p id="guideline-desc"></p>
          </div>
        </div>
        <div class="bg-dark guideline-container ">
            <div class="guideline-group flex">
              <h2  id="main-title" class="text-white med-heading extra-bold"></h2>
              <div class="guideline-btns flex">
                <img src="./assets/desktop/icon-arrow-previous.svg" alt="previous btn" class="prev-btn">
                <img src="./assets/desktop/icon-arrow-next.svg" alt="next btn" class="next-btn">
              </div>
            </div>
        </div>`;
const heading = document.getElementById("main-title");
const title = document.getElementById("guideline-title");
const desc = document.getElementById("guideline-desc");
const guidelineBg = document.getElementById("guideline-bg");

let baseIndex = 0;

function updateContent() {
  heading.innerHTML = content[baseIndex].main;
  title.innerHTML = content[baseIndex].title;
  desc.innerHTML = content[baseIndex].desc;
  guidelineBg.style.backgroundImage = `url(./assets/mobile/image-${content[baseIndex].slide}.jpg)`;
  if (window >= 768) {
    guidelineBg.style.backgroundImage = `url(./assets/tablet/image-${content[baseIndex].slide}.jpg)`;
  } else if (window >= 1200) {
    guidelineBg.style.backgroundImage = `url(./assets/desktop/image-${content[baseIndex].slide}.jpg)`;
  }
}

updateContent();

const previous = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

previous.addEventListener("click", () => {
  baseIndex = (baseIndex - 1 + content.length) % content.length;
  updateContent();
});

next.addEventListener("click", () => {
  baseIndex = (baseIndex + 1) % content.length;
  updateContent();
});
