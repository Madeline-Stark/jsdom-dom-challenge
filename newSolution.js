const likeTracker = {}

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

  function onHeartClick() {
    //event listener for counter
    let heart = document.getElementById('<3')

    heart.addEventListener('click', likeNumber);



    //selector for number to see which number

  }


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

   

// automaticallyIncrement()
manuallyIncrement()
manuallyDecrementTimer()
onHeartClick()