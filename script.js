let control = true;
let control_2 = true;
let dark = true;

document.querySelector('.features').addEventListener('click', openBox1);
document.querySelector('.company').addEventListener('click', openBox2);
document.querySelector('.dark').addEventListener('click', darkMode);

function openBox1(){

    if(control){
        document.querySelector('.box1').style.display = 'flex';
        document.querySelector('.features img').setAttribute('src', 'images/icon-arrow-up.svg');
        control = false;
    }else{ 
        document.querySelector('.box1').style.display = 'none';
        document.querySelector('.features img').setAttribute('src', 'images/icon-arrow-down.svg');
        control = true;
    }
}

function openBox2(){
    if(control_2){
        document.querySelector('.box2').style.display = 'flex';
        document.querySelector('.company img').setAttribute('src', 'images/icon-arrow-up.svg');
        control_2 = false;
    }else{ 
        document.querySelector('.box2').style.display = 'none';
        document.querySelector('.company img').setAttribute('src', 'images/icon-arrow-down.svg');
        control_2 = true;
    }
}

function darkMode(){
    if(dark){
        dark = false;
        document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 21%)';
        document.querySelector('header').style.color = 'hsl(0, 0%, 90%)';
        document.querySelector('.box1').style.backgroundColor = 'rgb(49, 49, 49)';
        document.querySelector('.box2').style.backgroundColor = 'rgb(49, 49, 49)';
        document.querySelector('p').style.color = 'hsl(0, 0%, 90%)';
        document.querySelector('h1').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('.dark span').innerHTML = 'ON';

    }else{
        dark = true;
        document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)';
        document.querySelector('header').style.color = 'hsl(0, 0%, 41%)';
        document.querySelector('.box1').style.backgroundColor = '#FFF';
        document.querySelector('.box2').style.backgroundColor = '#FFF';
        document.querySelector('p').style.color = 'hsl(0, 0%, 41%)';
        document.querySelector('h1').style.color = 'hsl(0, 0%, 8%)';
        document.querySelector('.dark span').innerHTML = 'OFF';
    }
}
