const parallax_el = document.querySelectorAll<HTMLElement>('.parallax')

let xValue = 0,
  yValue = 0

let rotateDegree = 0

const animate = (mouseEvent: MouseEvent) => {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx || 0
    let speedy = el.dataset.speedy || 0
    let speedz = el.dataset.speedz || 0
    let rotateSpeed = el.dataset.rotation || 0

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
    let zValue =
      (mouseEvent.clientX - parseFloat(getComputedStyle(el).left)) *
      isInLeft *
      0.1
    el.style.transform = `
        perspective(2300px)
        translateZ(${zValue * +speedz}px)
        rotateY(${rotateDegree * +rotateSpeed}deg)
        translateX(calc(-50% + ${-xValue * +speedx}px))
        translateY(calc(-50% + ${-yValue * +speedy}px))
     `
  })
}
const touchAnimate = (mouseEvent: Touch) => {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx || 0
    let speedy = el.dataset.speedy || 0
    let speedz = el.dataset.speedz || 0
    let rotateSpeed = el.dataset.rotation || 0

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
    let zValue =
      (mouseEvent.clientX - parseFloat(getComputedStyle(el).left)) *
      isInLeft *
      0.1
    el.style.transform = `
        perspective(2300px)
        translateZ(${zValue * +speedz}px)
        rotateY(${rotateDegree * +rotateSpeed}deg)
        translateX(calc(-50% + ${-xValue * +speedx}px))
        translateY(calc(-50% + ${-yValue * +speedy}px))
     `
  })
}

window.addEventListener('mousemove', (e) => {
  xValue = e.clientX - window.innerWidth / 2
  yValue = e.clientY - window.innerHeight / 2
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20

  animate(e)
})
