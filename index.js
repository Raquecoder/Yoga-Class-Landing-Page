const closebtn = document.getElementById('closebtn')
//console.log(closebtn)
const popUpWindow = document.getElementById('pop-upWindow')
console.log(popUpWindow)

setTimeout(function(){
    popUpWindow.style.display='block';
   },1500)

closebtn.addEventListener ('click', function(){
 popUpWindow.style.display ="none";
})