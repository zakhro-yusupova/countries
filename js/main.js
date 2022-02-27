  let elBtn = document.querySelector(".btn-changer")
  let elBody = document.querySelector("body")

  elBtn.addEventListener("click", function(){
    elBody.classList.toggle("dark")
  })
