const targetDiv = document.getElementById("hidden-tab");
const btn = document.getElementById("toggle-btn");
const arrow = document.getElementById("arrow-up");
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
    arrow.style.transform = "rotate(-135deg)";
  //   arrow.animate([
  //   `@Keyframes arrow-up {
  //     from {
  //       rotate(-135deg);
  //     }
  //     to {
  //       rotate(45deg)
  //     }
  //   }`
  // ], {
  //   duration: 2000
  // });
  } else {
    targetDiv.style.display = "none";
    arrow.style.transform = "rotate(45deg)";
    // targetDiv.style.transition = "5s ease-in-out";
  }
};

// Cant leave the button highlighted on reload
for (button in carouselBtn) {
  carouselBtn[button].onclick = function () {
    //console.log("test");
    let highligthBtn = document.querySelectorAll(".highligth-carousel")[0];
    if (this.className == "top-carousel-button") {
      if (highligthBtn) highligthBtn.className = "top-carousel-button";
      this.className = "highligth-carousel";
    }
  };
}
