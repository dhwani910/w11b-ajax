let target = document.querySelector('.new');
let joke = document.querySelector('.joke');

let button = document.querySelector('.button');
button.addEventListener('click', function(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 1){
            target.innerHTML = 'Loading...'
        }
        else if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            let text = JSON.parse(this.responseText);
            console.log(text.joke);
            joke.innerHTML = text.joke;
            target.innerHTML = text.setup;
        }
    }

    ajax.open("GET", "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke", true);
    ajax.send();
});
button.click();





