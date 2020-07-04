const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimiter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimiter)
let duration

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      perimiter * timeRemaining / duration - perimiter
    )
  },
  onComplete() {
    console.log('its finished')
  },
})
