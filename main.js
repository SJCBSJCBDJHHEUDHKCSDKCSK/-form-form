let form=document.querySelector("form");
let btn=document.querySelector(".btn");
let textarea=document.querySelector(".submit-area span");

form.onsubmit= (e)=>{
e.preventDefault();
textarea.style.color="#0D6EFD";
textarea.style.display="block";

let objrequest= new XMLHttpRequest();
objrequest.open("POST",'message.php',true);
objrequest.onload=()=>{
  if(objrequest.readyState==4 && objrequest.status==200){
    let response=objrequest.response;
    if(response.indexOf(" email and message are  required!")!=-1||" email not vailed"||" sorry , failed to send your email"){
      textarea.style.color="red";
    }else{
      form.reset();
      setTimeout(()=>{
        textarea.style.display="none";
      }
       
      ,3000)
    }
    textarea.innerHTML=response;
  }
}
let formdata=new FormData(form);
objrequest.send(formdata);
}
