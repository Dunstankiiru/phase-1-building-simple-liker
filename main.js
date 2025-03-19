// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  const errorModal = document.getElementById("modal");
  const hearts =document.querySelectorAll("like-glyph");

  errorModal.classList.add("hidden");
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
      .then(() => {
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
        .catch((error) => {
          // Show error modal with message
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").innerText = error;

          // Hide modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
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
