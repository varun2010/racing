canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1="c1.png";
car1_x=10;
car1_y=10;
car1_width=130;
car1_height=85;
car2="c2.png";
car2_x=10;
car2_y=100;
car2_width=130;
car2_height=85;
background_racing="racing.jpg"
function add(){
    background_img=new Image();
    background_img.onload=upload_background;
    background_img.src=background_racing;

    car1_img=new Image();
    car1_img.onload=upload_c1;
    car1_img.src=car1;
    car2_img=new Image();
    car2_img.onload=upload_c2;
    car2_img.src=car2;
}
function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function upload_c1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function upload_c2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var KeyPress = e.keyCode;
    console.log(KeyPress);
    if(KeyPress=='38'){
        car1up();
        console.log("c1up");
    }
    if(KeyPress=='40'){
        car1down();
        console.log("c1down");
    }
    if(KeyPress=='37'){
        car1left();
        console.log("c1left");
    }
    if(KeyPress=='39'){
        car1right();
        console.log("c1right");
    }
    if(KeyPress=='87'){
        car2up();
        console.log("c2up");
    }
    if(KeyPress=='83'){
        car2down();
        console.log("c2down");
    }
    if(KeyPress=='65'){
        car2left();
        console.log("c2left");
    }
    if(KeyPress=='68'){
        car2right();
        console.log("c2right");
    }
    if(car1_x > 700){
        document.getElementById("status").innerHTML="car-1 wins";
    }
    else if(car2_x > 700){
        document.getElementById("status").innerHTML="car-2 wins";
    }
}
function car1up(){
    if(car1_y > 0){
        car1_y=car1_y-10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car1down(){
    if(car1_y <= 500){
        car1_y=car1_y+10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car1left(){
    if(car1_x > 0){
        car1_x=car1_x-10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car1right(){
    if(car1_x <= 700){
        car1_x=car1_x+10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car2up(){
    if(car2_y > 0){
        car2_y=car2_y-10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car2down(){
    if(car2_y <= 500){
        car2_y=car2_y+10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car2left(){
    if(car2_x > 0){
        car2_x=car2_x-10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
function car2right(){
    if(car2_x <= 700){
        car2_x=car2_x+10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
