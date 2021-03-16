// As a user, I should see the timer increment every second once the page has loaded.
const likeTracker = {}


function incrementTimer(){
  // select the timer element
  const timer = document.querySelector("#counter")
  // select the number
  const stringTime = document.querySelector("#counter").innerText
  // convert to integer
  let newTime = parseInt(stringTime)
  // increment the time
  newTime += 1
  // update text of timer
  timer.innerText = newTime
}

function decrementTimer(){
  // select the timer element
  const timer = document.querySelector("#counter")
  // select the number
  const stringTime = document.querySelector("#counter").innerText
  // convert to integer
  let newTime = parseInt(stringTime)
  // increment the time
  newTime -= 1
  // update text of timer
  timer.innerText = newTime
}

function automaticallyIncrement(){
  // timer to call incrementTimer every second
  setInterval(function(){
    // wrapping in function so isn't invoked on load
    incrementTimer()
  }, 
  1000)
}

// automaticallyIncrement()

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function manuallyIncrement(){
  // select the plus button 
  const plusButton = document.getElementById("+")
  // add an event listener 
  plusButton.addEventListener('click', incrementTimer)
}


function manuallyDecrement(){
  const minusButton = document.getElementById("-")
  minusButton.addEventListener('click', decrementTimer)
}

manuallyIncrement()
manuallyDecrement()

// As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.

function onHeartClick(){
  // select the like button
  const heart = document.getElementById("<3")
  // add an event listener 
  heart.addEventListener('click', likeNumber)
}

function likeNumber(){
  // grab the number we liked
  const timer = document.querySelector("#counter")
  //grab the inner text
  const number = timer.innerText

  // if we already have a key for that number
  // increment that value
  // if we don't have a key for that number
  // add the key
  // set the value to 1
  if (likeTracker[number]){
    //exists
    likeTracker[number] += 1
    // update li
  } else {
    // doesn't exist
    likeTracker[number] = 1
    // create li
  }
}

onHeartClick()