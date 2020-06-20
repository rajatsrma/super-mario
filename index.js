document.querySelector("body").addEventListener("click", () => {
  document.getElementById("super-mario").animate(
    [
      // keyframes
      { top: "-40px" },
      { top: "-180px" },
      { top: "-40px" },
    ],
    {
      // timing options
      duration: 300,
      iterations: 1,
    }
  );
});

// click by pressing space bar
document.querySelector("body").addEventListener("keyup", () => {
  if (event.keyCode === 32) {
    console.log("clicked");
    document.querySelector("body").click();
  }
});

var score = 1;
setInterval(function () {
  document.querySelector(".grass h3").innerHTML = score;
  score++;
}, 50);
