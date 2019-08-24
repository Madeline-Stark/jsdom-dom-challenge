document.addEventListener("DOMContentLoaded", () => {

  const incrementTimer = event => {

    let timer = document.getElementById('counter')
    //right now timer is string and can't add
    let newTime = parseInt(timer.innerText) //before was changing value of timer to this, but then lost relation to html/wasn't refilling
    newTime += 1
    timer.innerText = newTime

  }

  const decrementTimer = event => {
    console.log("minus")
    let timer = document.getElementById('counter')
    //right now timer is string and can't add
    let newTime = parseInt(timer.innerText) //before was changing value of timer to this, but then lost relation to html/wasn't refilling
    newTime -= 1
    timer.innerText = newTime

  }

  function manuallyIncrement() {
    const plus = document.getElementById('+')
    plus.addEventListener('click', incrementTimer);
  }

  function automaticallyIncrement() {
    //timer to call function every second
    setInterval(function(){
      incrementTimer()
    }, 1000);
  }

  function manuallyDecrementTimer() {
    const minus = document.getElementById('-')
    minus.addEventListener('click', decrementTimer);
  }



  manuallyIncrement() //wasn't working before b/c never called function
  automaticallyIncrement()
  manuallyDecrementTimer()




});
