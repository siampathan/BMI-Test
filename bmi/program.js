var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//caluclutaing part
const result = document.getElementById('result');
const input = document.getElementById('input');
const input_ = document.getElementById('input_');
const button = document.getElementById('button');
const col = document.getElementById('col');
const area = document.getElementById('area');
const range = document.getElementById('range');
const ground = document.getElementById('ground');
//photo_part
function photo_1(){
    var photo = document.createElement('img');
    photo.src = 'image/ph1.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_2(){
    var photo = document.createElement('img');
    photo.src = 'image/ph2.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_3(){
    var photo = document.createElement('img');
    photo.src = 'image/ph3.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_4(){
    var photo = document.createElement('img');
    photo.src = 'image/ph4.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_5(){
    var photo = document.createElement('img');
    photo.src = 'image/ph5.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_6(){
    var photo = document.createElement('img');
    photo.src = 'image/ph6.jpg';
    document.getElementById('photo_Show').append(photo);
}
function photo_7(){
    var photo = document.createElement('img');
    photo.src = 'image/ph7.jpg';
    document.getElementById('photo_Show').append(photo);
}
//calculate part
function sum(){
    var bmi = parseFloat(input.value) / Math.pow(parseFloat(input_.value),2);
    input.value = '';
    input_.value = '';
    if(bmi >= 41){
        area.style.backgroundImage = photo_1();
        range.innerHTML = "Obesity third degree"
     }
     else if(bmi >= 35){
         area.style.backgroundImage = photo_2();
         range.innerHTML = "Obesity second degree";
     }
     else if(bmi >= 30){
         area.style.backgroundImage = photo_3();
         range.innerHTML = "Obesity first degree";
     }
     else if(bmi >= 25){
         area.style.backgroundImage = photo_4();
         range.innerHTML = "Weight over";
     }
     else if(bmi >= 18.5){
         area.style.backgroundImage = photo_5();
         range.innerHTML = "Normal";
     }
     else if(bmi >= 16){
         area.style.backgroundImage = photo_6();
         range.innerHTML = "Body weight deficit"
     }
     else if(bmi <= 15){
         area.style.backgroundImage = photo_7();
         range.innerHTML = "Body mass deficit";
     }
    return bmi;
}
//result show part
button.addEventListener('click',() => {
    result.innerHTML ='Your BMI '+'<br>'+sum()+'<br>You Are Look Like';
    area.style.display = sum();
    range.style.display = sum();
    ground.style.display = sum();
});
//Convert feet to meeter part
const conver = document.getElementById('conver');
const conver_ = document.getElementById('conver_');
const button_ = document.getElementById('button_');
const result_Show = document.getElementById('result_Show');

function convert(){
    var converti_;
    if(conver.value == 0 || conver.value == ''){
        return converti_ = parseFloat(conver_.value) * .0254 + ' meters';
    }
    else if(conver_.value == 0 || conver_.value == ''){
        return converti_ = parseFloat(conver.value) * .3048 + ' meters';
    }
    else if(conver.value == '' && conver_.value == ''){
        return 0;
    }
    else{
        return converti_ = parseFloat(conver.value) * .3048 + parseFloat(conver_.value) * .0254 + ' meters';
    }
}
button_.addEventListener('click', () => {
    result_Show.innerHTML = convert();
    conver.value = '';
    conver_.value = '';
});