
p1y = 0;
p2y = 0;
vel = 4;

score1 = 0;
score2 = 0;

px_b = 75;
py_b = 32;

var bx_speed = -6;
var by_speed = -6;
var level = 3;

//Variaveis para contagem do tempo
let segundos = 0;
let minutos = 0;

//Variaveis booleanas para estagios do jogo
var start = false;
var win = false;
var flag = true;

function setup() {
  count=0;
  red=  '#FF0000', blue= ' #0000FF', green = '#00FF00', yellow='#FFFF00';
  createCanvas(1200, 900);
  colors= [red, blue, green, yellow];
  bg = loadImage(
    'https://raw.githubusercontent.com/talesjoabe/reaction-time-test/master/background2.png?token=AHKANJOCMPYYTBD4EDMJHTK7PYLJG'
  );
}

function newDrawing(data) {
  noStroke();


}

function draw() {
  background(bg);
  
  x_center= random(300,850);
  y_center= random(150,700); 
  x_center<400 || x_center>800 ? x_size= random(10,50) : x_size=random(10,300);
  y_center<400 || y_center>800 ? y_size= random(10,50) : y_size=random(10,300);
  cor = random(colors);
  fill(cor);
  text(segundos,325, 150);
  time_random= random(1,5);
  
  if(flag){
  	ellipse(x_center, y_center, x_size, y_size);
	flag = false;
  }
  counting_time()
}

// function Score() {
//   textSize(24);
//   fill(255, 204, 0);
//   text(' Jogador 1: ' + score1, 20, 985);
//   fill(255, 0, 0);
//   text('Jogador 2: ' + score2, 1000, 985);
//   fill(255, 255, 255);
//   text('DIFICULDADE: ' + level, 500, 930);
//   counting_time();
//   fill(255, 255, 255);
//   text('TEMPO '+minutos+':'+segundos, 500, 90);
// }

//Tela de vencedor
function tela_win(){
  fill(255, 255, 255);
  text("RESTART",350, height/2+200);
  text("EXIT",650, height/2+200);
  if (mouseIsPressed) {
    //Restart do Jogo
    if ((mouseX>=(350) && mouseX<=(350+220)) && (mouseY>=(height/2+160) && mouseY<=height/2+200)) {
      win=false;
      score1 = 0;
      score2 = 0;
      minutos = 0;
      segundos = 0;
    }
    //Exit do jogo
    if ((mouseX>=(650) && mouseX<=(650+110)) && (mouseY>=(height/2+160) && mouseY<=height/2+200)) {
      remove();
    }
  }
}

//Funcao para contagem do tempo de jogo
function counting_time(){
	if(frameCount % 60 == 0){ 
	    if(segundos < 60){
		      segundos++	    
	    }
	    if(segundos == 60){
          segundos = 0;
		      minutos++;
	    }
	}
}

