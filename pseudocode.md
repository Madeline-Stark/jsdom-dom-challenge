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
### Select heart and add event listener
```
      function onHeartClick() {
        //event listener for counter
        let heart = document.getElementById('<3')
    
        heart.addEventListener('click', likeNumber);
    
    
    
        //selector for number to see which number
    
      }
```

### Define likeNumber, function to be called when heart clicked
```
 function likeNumber(){
    console.log("liked!")
  }
  // call at bottom:
  onHeartClick()
```
### Define object (at top) to use to keep track of likes
```
const likeTracker = {}
```
### Build out likeNumber
```
      function likeNumber(){
        let counter = document.getElementById('counter').innerText; // this is the number we're liking

          //only want to set counter on click, otherwise will always be 0
        let likeCounter = 0;

        //likeTracker is object we created above to keep track of all the numbers' likes
    
    
      }
```
- increment counter value in likeTracker depending on what counter was when clicked:
- test in browser, see that likeTracker updating
```
      function likeNumber(){
        let counter = document.getElementById('counter').innerText; // this is the number we're liking

          //only want to set counter on click, otherwise will always be 0
        let likeCounter = 0;

        //likeTracker is object we created above to keep track of all the numbers' likes

        if (likeTracker[counter]) {
            likeTracker[counter] += 1;
        } else {
            likeTracker[counter] = {};
        likeTracker[counter] = 1;
        }
    
      }
```
#### Display likes 
##### Add li when number first added to likes object:
```
      function likeNumber(){
        let counter = document.getElementById('counter').innerText; // this is the number we're liking

          //only want to set counter on click, otherwise will always be 0
        let likeCounter = 0;

        //likeTracker is object we created above to keep track of all the numbers' likes

        if (likeTracker[counter]) {
            likeTracker[counter] += 1;
        } else {
            likeTracker[counter] = {};
            likeTracker[counter] = 1;

            //new 
            let newLi = document.createElement("li");
            let phrase = counter + ' has ' +  likeTracker[counter] + ' likes.'
            let text = document.createTextNode(phrase); // want to be able to append later
            newLi.appendChild(text);
            newLi.setAttribute("id", counter)//setting id so can select and change li later

            // select likes container
            const likes = document.querySelector('.likes')
            likes.appendChild(newLi)
        }
    
      }
```
##### Update li if counter already exists:
```
      function likeNumber(){
        let counter = document.getElementById('counter').innerText; // this is the number we're liking

          //only want to set counter on click, otherwise will always be 0
        let likeCounter = 0;

        //likeTracker is object we created above to keep track of all the numbers' likes

        if (likeTracker[counter]) {
            likeTracker[counter] += 1;

            // NEW
            let currentLi = document.getElementById(counter)
            currentLi.innerText = counter + ' has ' +  likeTracker[counter] + ' likes.'

        } else {
            likeTracker[counter] = {};
            likeTracker[counter] = 1;
 
            let newLi = document.createElement("li");
            let phrase = counter + ' has ' +  likeTracker[counter] + ' likes.'
            let text = document.createTextNode(phrase); // want to be able to append later
            newLi.appendChild(text);
            newLi.setAttribute("id", counter)//setting id so can select and change li later

            // select likes container
            const likes = document.querySelector('.likes')
            likes.appendChild(newLi)
        }
    
      }
```


# To add later:
## As a user, I can pause the counter, which should
- pause the counter
- disable all buttons except the pause button
- the pause button should then show the text "resume."
- When 'resume' is clicked, it should restart the counter and re-enable the buttons. 5. 

## Comments
- As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


