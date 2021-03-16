- start by opening up `index.html`
- Has all the elements there, but clicking doesn't do anything (for students with newer version, might work already then need to comment out link to index.min)

## 1. As a user, I should see the timer increment every second once the page has loaded.

- define function, increment timer
```
function incrementTimer(){

}
```
- select the timer
(Start by testing in console)
```
function incrementTimer(){
    const timer = document.getElementById('counter')
}
```
- grab current time from timer and convert to integer
(Start by testing in console)
```
function incrementTimer(){
    const timer = document.getElementById('counter')
    let newTime = parseInt(timer.innerText)
}
```
- increment the time
```
function incrementTimer(){
    const timer = document.getElementById('counter')
    let newTime = parseInt(timer.innerText)
     newTime += 1
}
```
- update text of timer
```
function incrementTimer(){
    const timer = document.getElementById('counter')
    let newTime = parseInt(timer.innerText)
     newTime += 1
     timer.innerText = newTime
}
```
- refresh page and test function in the browser
- make a function that uses set interval to call above function in interval
First, test using setInterval to console.log something
```
 function automaticallyIncrement() {
        //timer to call function every second
          setInterval(function(){
            incrementTimer()
          }, 1000)
    
      }
```
- call the function at bottom of file
```
automaticallyIncrement()
```
- refresh browser and make sure working

## As a user, I can manually increment and decrement the counter using the plus and minus buttons.

### manuallyIncrement
- Will be able to use incrementTimer for this
- define function
```
function manuallyIncrement() {
        
}
```
- grab the plus button (test in browser)
```
function manuallyIncrement() {
        const plus = document.getElementById('+')
        
}
```
- add event listener
```
function manuallyIncrement() {
        const plus = document.getElementById('+')
        plus.addEventListener('click', incrementTimer);
      }
```
- call manuallyIncrement at bottom
- commment out automaticallyIncrement for now
- refresh and test

### manuallyDecrement
```
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

      manuallyDecrementTimer()
    
```

## As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.