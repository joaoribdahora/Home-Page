let control = true;
let control_2 = true;
let dark = true;
let companyControl = true;
let featureControl = true;

document.querySelector('.features').addEventListener('click', openBox1);
document.querySelector('.company').addEventListener('click', openBox2);
document.querySelector('.dark').addEventListener('click', darkMode);
document.querySelector('.m_features_op .dark').addEventListener('click', darkMode);
document.querySelector('.m_company').addEventListener('click', companyMobile);
document.querySelector('.m_features').addEventListener('click', featuresMobile);

document.querySelector('.icon').addEventListener('click', () =>{
    document.querySelector('.menu').style.display = 'flex';
    document.querySelector('.side_menu').style.display = 'block';
});
document.querySelector('.m_header span').addEventListener('click', () =>{
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.side_menu').style.display = 'none';
});


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
        document.querySelector('.m_features_op .dark span').innerHTML = 'ON';
        document.querySelector('.menu').style.backgroundColor = 'hsl(0, 0%, 21%)';
        document.querySelector('.menu').style.color = 'hsl(0, 0%, 90%)';
    }else{
        dark = true;
        document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)';
        document.querySelector('header').style.color = 'hsl(0, 0%, 41%)';
        document.querySelector('.box1').style.backgroundColor = '#FFF';
        document.querySelector('.box2').style.backgroundColor = '#FFF';
        document.querySelector('p').style.color = 'hsl(0, 0%, 41%)';
        document.querySelector('h1').style.color = 'hsl(0, 0%, 8%)';
        document.querySelector('.dark span').innerHTML = 'OFF';
        document.querySelector('.m_features_op .dark span').innerHTML = 'OFF';
        document.querySelector('.menu').style.backgroundColor = 'hsl(0, 0%, 93%)';
        document.querySelector('.menu').style.color = 'hsl(0, 0%, 41%)';
    }
}


function featuresMobile(){
    if(featureControl){
        document.querySelector('.m_features_op').style.display = 'flex';
        document.querySelector('.m_features img').setAttribute('src', 'images/icon-arrow-up.svg');
        featureControl = false;
    }else{ 
        document.querySelector('.m_features_op').style.display = 'none';
        document.querySelector('.m_features img').setAttribute('src', 'images/icon-arrow-down.svg');
        featureControl = true;
    }
}

function companyMobile(){
    if(companyControl){
        document.querySelector('.m_company_op').style.display = 'flex';
        document.querySelector('.m_company img').setAttribute('src', 'images/icon-arrow-up.svg');
        companyControl = false;
    }else{ 
        document.querySelector('.m_company_op').style.display = 'none';
        document.querySelector('.m_company img').setAttribute('src', 'images/icon-arrow-down.svg');
        companyControl = true;
    }
}