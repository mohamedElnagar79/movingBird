function moveRight (left, imgObj) {
  let timerId = setInterval(() => {
    left += 10
    if (left < innerWidth - imgObj.width) {
      imgObj.style.left = left + 'px'
    } else {
      imgObj.classList.add('flip')
      clearInterval(timerId)
      moveLeft(left, imgObj)
    }
  }, 50)
}

function moveLeft (left, imgObj) {
  let timerId = setInterval(() => {
    left -= 10
    if (left > 0) {
      imgObj.style.left = left + 'px'
    } else {
      imgObj.classList.remove('flip')
      clearInterval(timerId)
      moveRight(left, imgObj)
    }
  }, 50)
}

window.addEventListener('load', function () {
  let imgObj = document.images[0]
  let left = 0
  moveRight(left, imgObj)
})
