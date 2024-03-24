console.log("hello world");

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

let bg_color = "space";
console.log(bg_color);

document.addEventListener("click", function (event) {
  document.getElementById("light_or_dark");
  if ((bg_color = "space")) {
    var elements = document.getElementById("images");
    visibility = hidden;
    let bg_color = "white";
    console.log(bg_color);
  }
  if ((bg_color = "white")) {
    document.body.style.backgroundColor = "white";
    let bg_color = "white";
    console.log(bg_color);
  }
});
