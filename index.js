var parallax_el = document.querySelectorAll('.parallax')
var xValue = 0,
  yValue = 0
var rotateDegree = 0
var animate = function (mouseEvent) {
  parallax_el.forEach(function (el) {
    var speedx = el.dataset.speedx || 0
    var speedy = el.dataset.speedy || 0
    var speedz = el.dataset.speedz || 0
    var rotateSpeed = el.dataset.rotation || 0
    var isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
    var zValue =
      (mouseEvent.clientX - parseFloat(getComputedStyle(el).left)) *
      isInLeft *
      0.1
    el.style.transform = '\n        perspective(2300px)\n        translateZ('
      .concat(zValue * +speedz, 'px)\n        rotateY(')
      .concat(
        rotateDegree * +rotateSpeed,
        'deg)\n        translateX(calc(-50% + '
      )
      .concat(-xValue * +speedx, 'px))\n        translateY(calc(-50% + ')
      .concat(-yValue * +speedy, 'px))\n     ')
  })
}
var touchAnimate = function (mouseEvent) {
  parallax_el.forEach(function (el) {
    var speedx = el.dataset.speedx || 0
    var speedy = el.dataset.speedy || 0
    var speedz = el.dataset.speedz || 0
    var rotateSpeed = el.dataset.rotation || 0
    var isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
    var zValue =
      (mouseEvent.clientX - parseFloat(getComputedStyle(el).left)) *
      isInLeft *
      0.1
    el.style.transform = '\n        perspective(2300px)\n        translateZ('
      .concat(zValue * +speedz, 'px)\n        rotateY(')
      .concat(
        rotateDegree * +rotateSpeed,
        'deg)\n        translateX(calc(-50% + '
      )
      .concat(-xValue * +speedx, 'px))\n        translateY(calc(-50% + ')
      .concat(-yValue * +speedy, 'px))\n     ')
  })
}
window.addEventListener('mousemove', function (e) {
  xValue = e.clientX - window.innerWidth / 2
  yValue = e.clientY - window.innerHeight / 2
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20
  animate(e)
})
