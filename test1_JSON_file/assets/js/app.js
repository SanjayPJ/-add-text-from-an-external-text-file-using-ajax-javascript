
function loadText(){
     var oReq = new XMLHttpRequest();
     oReq.addEventListener("load", function(){
          // this.responseText
          document.querySelector('.code-container').innerHTML += this.responseText;

          const paint = JSON.parse(this.responseText);
          paint.forEach(element => {
               var sorted = `<div class="alert alert-info" role="alert">
               Colour : ${element.color}<br>
               Brand : ${element.brand}
             </div>`;  
             document.querySelector('.sorted').innerHTML += sorted;         
          });
     });
     oReq.open("GET", "data.json", true);
     oReq.send();
}
   