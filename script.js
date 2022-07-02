let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight;
window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// $(document).mousemove(function (e) {
//   var X = e.pageX;
//   var Y = e.pageY;
//   $(".light").css(
//     "background",
//     "radial-gradient(circle at " + X + "px " + Y + "px, transparent, #000 30%)"
//   );
// });

var pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});
