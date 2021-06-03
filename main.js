let val = 0
Loop()

async function Loop(){
  await sleep(100)
  val++
    
  anime({
  targets: ".line:nth-child(" + val + ")",
  translateX: [0, 300],
  easing: 'easeInOutSine',
  loop: true,
  direction: 'alternate',
  backgroundColor: [
    "#03071e",
    "#ffba08",
    "#d00000",
    "#03071e",
    "#03071e",
    "#52b788",
    "#d00000",
    "#03071e",
  ]
})
  Loop()
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
