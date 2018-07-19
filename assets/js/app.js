
function loadText(){
     var oReq = new XMLHttpRequest();
     oReq.addEventListener("load", function(){
          // this.responseText
          document.querySelector('.container').innerHTML += this.responseText;
     });
     oReq.open("GET", "data.txt", true);
     oReq.send();
}
   