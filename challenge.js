document.addEventListener("DOMContentLoaded", () => {

let likeTracker = {}
let paused = false;


  const incrementTimer = event => {
    if (!paused) {
      let timer = document.getElementById('counter')
      //right now timer is string and can't add
      let newTime = parseInt(timer.innerText) //before was changing value of timer to this, but then lost relation to html/wasn't refilling
      newTime += 1
      timer.innerText = newTime
    }

  }

  const decrementTimer = event => {
    if (!paused) {
      console.log("minus")
      let timer = document.getElementById('counter')
      //right now timer is string and can't add
      let newTime = parseInt(timer.innerText) //before was changing value of timer to this, but then lost relation to html/wasn't refilling
      newTime -= 1
      timer.innerText = newTime
    }

  }

  function manuallyIncrement() {
    const plus = document.getElementById('+')
    plus.addEventListener('click', incrementTimer);
  }

  function automaticallyIncrement() {
    //timer to call function every second
    if (!paused) {
      setInterval(function(){
        incrementTimer()
      }, 1000);
    }

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
    let counter = document.getElementById('counter').innerText;
      //only want to set counter on click, otherwise will always be 0
    let likeCounter = 0;
    //likeTrackeris hash we created above to keep track of all the numbers' likes
    if (!paused) {
      if (likeTracker[counter]) {
        likeTracker[counter] += 1;
        let currentLi = document.getElementById(counter)
        currentLi.innerText = counter + ' has ' +  likeTracker[counter] + ' likes.'
      } else {
        likeTracker[counter] = {};
        likeTracker[counter] = 1;
        let newLi = document.createElement("LI");
        let phrase = counter + ' has ' +  likeTracker[counter] + ' likes.'
        let text = document.createTextNode(phrase);
        newLi.appendChild(text);
        newLi.setAttribute("id", counter)//setting id so can select and change li later
        const likes = document.querySelector('.likes')
        likes.appendChild(newLi)
      }
    }

  }

  function clickPause() {
    const pause = document.getElementById('pause')
    pause.addEventListener('click', pauseCounter);
  }

  function pauseCounter() {
    paused = !paused; //opposite of whatever currently is
  }

  function handleCommentSubmit() {
    const button = document.getElementById('comment-form')
    button.addEventListener('submit', function(e) {
      e.preventDefault(); //wasn't doing this and page was refreshing-console.log would just briefly appear
      submitComment();
    });
  }

  function submitComment() {

      if (!paused) {
        const button = document.getElementById('comment-form')
        let commentText = button.querySelector('input').value;
        let commentList = document.querySelector('.comments')
        let newP = document.createElement("P");
        let text = document.createTextNode(commentText);
        newP.appendChild(text);
        commentList.appendChild(newP);

      }

  }







  manuallyIncrement() //wasn't working before b/c never called function
  automaticallyIncrement()
  manuallyDecrementTimer()
  onHeartClick()
  clickPause()
  handleCommentSubmit()




});
