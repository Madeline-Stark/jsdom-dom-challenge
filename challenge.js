function incrementTimer(){
  const timer = document.getElementById('counter')
  let newTime = parseInt(timer.innerText)
   newTime += 1
   timer.innerText = newTime
}

function automaticallyIncrement() {
  //timer to call function every second
    setInterval(function(){
      incrementTimer()
    }, 1000)

}

function manuallyIncrement() {
  const plus = document.getElementById('+')
  plus.addEventListener('click', incrementTimer);
}

function decrementTimer(){
  console.log("minus")
        let timer = document.getElementById('counter')
        //right now timer is string and can't add
        let newTime = parseInt(timer.innerText) 
        newTime -= 1
        timer.innerText = newTime
}

  
  function manuallyDecrementTimer() {
    const minus = document.getElementById('-')
    minus.addEventListener('click', decrementTimer);
  }

   

// automaticallyIncrement()
manuallyIncrement()
manuallyDecrementTimer()