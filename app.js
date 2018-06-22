




document.querySelector('.btn').addEventListener('click',loadData);

function loadData(){

    // creating the objects

    const xhr= new XMLHttpRequest();

    // open

    xhr.open('GET','data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            document.querySelector('.output').innerHTML = this.responseText;
        }
    }

    xhr.send();
    
};