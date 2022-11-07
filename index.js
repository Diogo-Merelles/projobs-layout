const targetDiv = document.getElementById("hidden-tab");
const btn = document.getElementById("toggle-btn");
const arrow = document.getElementById("arrow-up");

btn.onclick = () => {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
    arrow.style.transform = "rotate(45deg)";

  } else {
    targetDiv.style.display = "none";
    arrow.style.transform = "rotate(-135deg)";
    // targetDiv.style.transition = "5s ease-in-out";

  }
};
