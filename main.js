const contenitore= document.querySelector(".container");
for(let i=1;i<=100;i++){
     if ((i % 3) == 0  && (i % 5) == 0){
        const element= `<div class="box box${i}">FizzBuzz</div>`;
        contenitore.innerHTML+=element; 
        let color=document.querySelector(`.box${i}`);
        color.style.backgroundColor = "#f0466f"
        }
    else if ((i % 5) == 0){
        const element= `<div class="box box${i}">Buzz</div>`;
        contenitore.innerHTML+=element;
        let color=document.querySelector(`.box${i}`);
        color.style.backgroundColor = "#ffd166"
    }
    else if((i % 3) == 0){
        const element= `<div class="box box${i}">Fizz</div>`;
        contenitore.innerHTML+=element;
        let color=document.querySelector(`.box${i}`);
        color.style.backgroundColor = "#0cd4a0"
   
       }
    else{
        const element= `<div class="box box${i}">${i}</div>`;
        contenitore.innerHTML+=element;
    }
    
}