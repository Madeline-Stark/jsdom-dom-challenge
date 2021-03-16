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

automaticallyIncrement()