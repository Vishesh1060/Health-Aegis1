
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "assets/js/img/ground.png";

const foodImg = new Image();
foodImg.src = "assets/js/img/food.png";

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 65 && d != "RIGHT"){
        d = "LEFT";
    }else if(key == 87 && d != "DOWN"){
        d = "UP";  
    }else if(key == 68 && d != "LEFT"){
        d = "RIGHT";
    }else if(key == 83 && d != "UP"){
        d = "DOWN";
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){ 
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px mangal";
    
    switch(score){
        case 0:break;
        case 1:ctx.fillText("एकम्",2*box,1.6*box);break;
        case 2:ctx.fillText("द्वे",2*box,1.6*box);break;
        case 3:ctx.fillText("त्रीणि",2*box,1.6*box);break;
        case 4:ctx.fillText("चत्वारि",2*box,1.6*box);break;
        case 5:ctx.fillText("पञ्च",2*box,1.6*box);break;
        case 6:ctx.fillText("षट्",2*box,1.6*box);break;
        case 7:ctx.fillText("सप्त",2*box,1.6*box);break;
        case 8:ctx.fillText("अष्ट",2*box,1.6*box);break;
        case 9:ctx.fillText("नव",2*box,1.6*box);break;
        case 10:ctx.fillText("दश",2*box,1.6*box);break;
        case 11:ctx.fillText("एकादश",2*box,1.6*box);break;
        case 12:ctx.fillText("द्वादश",2*box,1.6*box);break;    
        case 13:ctx.fillText("त्रयोदश",2*box,1.6*box);break;
        case 14:ctx.fillText("चतुर्दश",2*box,1.6*box);break;
        case 15:ctx.fillText("पञ्चदश",2*box,1.6*box);break;
        case 16:ctx.fillText("षोडश",2*box,1.6*box);break;
        case 17:ctx.fillText("सप्तदश",2*box,1.6*box);break;
        case 18:ctx.fillText("अष्टादश",2*box,1.6*box);break;
        case 19:ctx.fillText("नवदश",2*box,1.6*box);break;
        case 20:ctx.fillText("विंशतिः",2*box,1.6*box);break;
        case 21:ctx.fillText("एकविंशतिः",2*box,1.6*box);break;
        case 22:ctx.fillText("द्वाविंशतिः",2*box,1.6*box);break;
        case 23:ctx.fillText("त्रयोविंशतिः",2*box,1.6*box);break;
        case 24:ctx.fillText("चतुर्विंशतिः",2*box,1.6*box);break;
        case 25:ctx.fillText("पञ्चविंशतिः",2*box,1.6*box);break;
        case 26:ctx.fillText("षड्विंशतिः",2*box,1.6*box);break;
        case 27:ctx.fillText("सप्तविंशतिः",2*box,1.6*box);break;
        case 28:ctx.fillText("अष्टाविंशतिः",2*box,1.6*box);break;
        case 29:ctx.fillText("नवविंशतिः",2*box,1.6*box);break;
        case 30:ctx.fillText("त्रिंशत्",2*box,1.6*box);break;
        case 31:ctx.fillText("एकत्रिंशत्",2*box,1.6*box);break;
        case 32:ctx.fillText("द्वात्रिंशत्",2*box,1.6*box);break;
        case 33:ctx.fillText("त्रयस्त्रिंशत्",2*box,1.6*box);break;
        case 34:ctx.fillText("चतुस्त्रिंशत्",2*box,1.6*box);break;
        case 35:ctx.fillText("पञ्चत्रिंशत्",2*box,1.6*box);break;
        case 36:ctx.fillText("षट्त्रिंशत्",2*box,1.6*box);break;
        case 37:ctx.fillText("सप्तत्रिंशत्",2*box,1.6*box);break;
        case 38:ctx.fillText("अष्टत्रिंशत्",2*box,1.6*box);break;
        case 39:ctx.fillText("नवत्रिंशत्",2*box,1.6*box);break;
        case 40:ctx.fillText("चत्वारिंशत्",2*box,1.6*box);break;
        
        default:ctx.fillText("",2*box,1.6*box);
    }
        //window.onscroll = function () { window.scrollTo(0, 0); };    
}

// call draw function every 100 ms

let game = setInterval(draw,100);