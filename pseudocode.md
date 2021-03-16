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