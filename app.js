let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const myStyles = e.currentTarget.classList;

        if(myStyles.contains("decrease")){
            count--;
        }
        else if(myStyles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }


        value.textContent = count;
    })
})
