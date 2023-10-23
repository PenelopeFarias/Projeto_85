canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

carWidth = 75;
carHeight = 150;

bgImg = "parkingLot.jpg";
carImg = "car.png";

carX = 5;
carY = 400;

function add()
{
    bgImgTag = new Image();
    bgImgTag.onload = uploadBg;
    bgImgTag.src = bgImg;

    carImgTag = new Image();
    carImgTag.onload = uploadCar;
    carImgTag.src = carImg;
}

function uploadBg()
{
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar()
{
    ctx.drawImage(carImgTag, carX, carY, carWidth, carHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        up();
        console.log("cima");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("baixo");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("esquerda");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("direita");
    }

}

function up()
{
    if(carY >= 0)
    {
        carY = carY - 10;
        console.log("Quando cima é pressionado, x = " + carX + " | y = " + carY);
        uploadBg();
        uploadCar();
    }
}

function down()
{
    if(carY <= 500)
    {
        carY = carY + 10;
        console.log("Quando baixo é pressionado, x = " + carX + " | y = " + carY);
        uploadBg();
        uploadCar();
    }
}

function left()
{
    if(carX >= 0)
    {
        carX = carX - 10;
        console.log("Quando esquerda é pressionado, x = " + carX + " | y = " + carY);
        uploadBg();
        uploadCar();
    }
}

function right()
{
    if(carX <= 700)
    {
        carX = carX + 10;
        console.log("Quando direita é pressionado, x = " + carX + " | y = " + carY);
        uploadBg();
        uploadCar();
    }
}
