// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorContainer = document.querySelector('#modal');
function errorToggle(){
  errorContainer.classList.add('hidden');
}

const likes = document.querySelectorAll('.like');
likes.forEach(like => {
  like.addEventListener('click', function(e){
    mimicServerCall()
    .then(()=>{
      console.log('sucess');
      if(e.target.textContent === EMPTY_HEART){
        e.target.textContent = FULL_HEART;
        e.target.classList.add('activated-heart');
      }else if(e.target.textContent === FULL_HEART){
        e.target.textContent = EMPTY_HEART;
        e.target.classList.remove('activated-heart');
      }
      
    })
    .catch(()=>{
      console.log('error');
      errorContainer.classList.remove('hidden');
      setTimeout(errorToggle, 3000);
    })
    //console.log(e.target.textContent);
  });
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
//console.log(mimicServerCall());