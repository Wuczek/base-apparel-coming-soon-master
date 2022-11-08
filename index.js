const input=document.getElementById("input-field")
const btn=document.getElementById("btn")
const container=document.getElementById("error-container")

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click",function(){
  const email=input.value 
  if(validateEmail(email)){
    container.innerHTML=""
    input.style.borderColor="#ce9797"
  }
  else {
    container.innerHTML=`<p class="error">Please provide a valid email</p><img src="images/icon-error.svg" class="error-icon">`
    input.style.borderColor="red"
  }
})
