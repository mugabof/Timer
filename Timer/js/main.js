//DOM Elements
const time= document.getElementById('time');
const greeting= document.getElementById('greeting');
const Name= document.getElementById('name');
const focus= document.getElementById('focus');

//Show time
function showTime(){
    let today= new Date, 
    hour= today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    //set AM or PM
    const amPM= hour >=12 ? 'PM' :'Am';

    hour = hour % 12 || 12;
    //Output Time 
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime,1000);
}

// Add zero to the number less than 10
function addZero(n){
    return(parseInt(n,10) <10 ? '0':'') + n;
}


//Set Background Image or color due to time
function setBckColor(){
    let today = new Date(), hour= today.getHours();
    if(hour<12){
        document.body.style.backgroundImage="url('../image/morning.jpg')";
        greeting.textContent='Good Morning';
    }
    else if(hour<18){
        document.body.style.backgroundColor='yellow';
        greeting.textContent='Good Afternoon';
    }
    else {
        document.body.style.backgroundImage="url('../image/Evening.jpg')"
        greeting.textContent='Good Evening ';
        document.body.style.color='White'
    }
}

// Get Name
function getName(){
    

    if(localStorage.getItem('name')===null){
        Name.textContent='[Enter your Name]';
    }
    else{
        Name.textContent=localStorage.getItem('name');
    }
}

function getFocus(){

    if(localStorage.getItem('focus')===null){
        focus.textContent='[Enter your focus]';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
}




// Run
showTime();
setBckColor();
getName();
getFocus();