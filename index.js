const targetDiv = document.getElementById("hidden-tab");
const btn = document.getElementById("toggle-btn");

btn.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};
