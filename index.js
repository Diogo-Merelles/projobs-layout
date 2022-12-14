const targetDiv = document.getElementById("projobs-fencing-banner");
const btn = document.getElementById("toggle-btn");
const arrow = document.getElementById("projobs-fencing-banner-arrow");
const carouselBtn = document.querySelectorAll(".top-carousel-button");
const closeHiddenTab = document.getElementById("fa fa-close");

closeHiddenTab.onclick = () => {
  if (closeHiddenTab) {
    targetDiv.style.display = "none";
    arrow.style.transform = "rotate(45deg)";
  }
};

btn.onclick = () => {
  if (targetDiv.style.display !== "flex") {
    targetDiv.style.display = "flex";
    arrow.style.transform = "rotate(-180deg)";
  } else {
    targetDiv.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
};

// Cant leave the button highlighted on reload
for (button in carouselBtn) {
  carouselBtn[button].onclick = function () {
    let highligthBtn = document.querySelectorAll(".highligth-carousel")[0];
    if (this.className == "top-carousel-button") {
      if (highligthBtn) highligthBtn.className = "top-carousel-button";
      this.className = "highligth-carousel";
    }
  };
}

const slidesContainer = document.getElementById("carousel-container");
const slide = document.getElementById("carousel-card");
const prevButton = document.getElementById("fa-arrow-left");
const nextButton = document.getElementById("fa fa-arrow-right");

nextButton.onclick = () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
};

prevButton.onclick = () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
};


// prevButton.onmouseover = () => {
//   prevButton.style.visibility = "visible";
// }

// prevButton.style.display = "none";

// prevButton.onmouseover = () => {
//   prevButton.style.display = "display";
//   console.log("hey");
// }

