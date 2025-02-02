let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');
let score = document.getElementById('score');
let result = document.querySelector('.result');



button.addEventListener('click',function(){
    let newHeight = parseFloat(height.value);
    let newweight = parseFloat(weight.value);
    newHeight = newHeight/100;
    let sqrHeight = newHeight*newHeight;

    let bmi = newweight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if(score.textContent<18.6){
score.style.background = '#f6e58d'
    }
    else if(score.textContent<24.9){
score.style.background = '#badc58'
    }
   else{
score.style.background = '#eb4d4b'
    }


    let form= document.getElementById('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
    })

    

})