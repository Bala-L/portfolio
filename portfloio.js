let name=document.getElementById("ename")
let phone=document.getElementById("phnum")
let email=document.getElementById("email")
let button=document.getElementById("ss")
let error1=document.getElementById("Nerror")
let error2=document.getElementById("Eerror")
let error3=document.getElementById("PNerror")


//navbar
let menu=document.querySelector(".menu")
let ullist=document.querySelector("nav ul")
menu.addEventListener("click",()=>{
ullist.classList.toggle("showmenu")
})
//
button.addEventListener( "click",(e)=>{
e.preventDefault();
 let nameval=name.value.trim();
 let phval=phone.value.trim();
 let emailval=email.value.trim();
 regex=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  
 console.log(nameval)
  valid1(nameval);
  valid2(phval);
  valid3(emailval);

  if(valid1(nameval)==true&&
  valid2(phval)==true&&
  valid3(emailval)==true){
    alert(nameval,
    emailval,
    phval)
    name.value="";
    phone.value="";
    email.value="";
  }
})
function valid1(nameval ){
  if( nameval==""){
    console.log('empty')
    error1.innerHTML="Fill The Name"
    name.style.border="2px solid red"
    return false
  }
   else {
    error1.innerHTML=" "
    name.style.border="2px solid green"
     return true
  }
}
function valid2( phval){
 if(phval==""){
  error2.innerHTML="Fill The Number"
  phone.style.border="2px solid red"
  return false
 }
 else if(!(/^[0-9\s(-)]*$/).test(phval)){
  error2.innerHTML=" Enter Number only"
  phone.style.border="2px solid red"
  return false
 }
 else if(!(/^[0-9]{10}$/).test(phval)){
  error2.innerHTML=" Enter Your Number Properly"
  phone.style.border="2px solid red"
  return false
 }
 else{
  error2.innerHTML=" "
  phone.style.border="2px solid green"
  return true
 }


}
function valid3(emailval){
  if( emailval==""){
    error3.innerHTML="Fill The Email"
    email.style.border="2px solid red"
    return false
  }
  else if(!regex.test(emailval)){
  error3.innerHTML="Enter your mail properly"
   email.style.border="2px solid red"
    return false;
        }
else{
  error3.innerHTML=""
    email.style.border="2px solid green"
    return true
}}

// let acc=0;
// for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         acc+=i;
//     }
// }
// console.log(acc);




