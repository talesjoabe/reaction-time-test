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
var flag02 = true;

round = 0;


let doing;
let startTime, finishTime, answTime;
let point;

function setup() {
  count = 0;
  doing = true;
  startTime = 0;
  finishTime = 0;
  answTime = 0;
  point = 0;
  red=  '#FF0000', blue= ' #0000FF', green = '#00FF00', yellow='#FFFF00';
  createCanvas(1200, 900);
  colors= [red, blue, green, yellow];
  bg = loadImage(//'C:\Users\julia\Documents\STR- Primeira Atv\background2');
   'https://raw.githubusercontent.com/talesjoabe/reaction-time-test/master/background2.png?token=AHKANJOCMPYYTBD4EDMJHTK7PYLJG'
	);
}

function newDrawing(data) {
  noStroke();


}

function draw() {
	
	if(flag == false && segundos == 5) clear();
	if(flag == true && segundos == 10) clear();
	if(flag == false && segundos == 15) clear();

	background(bg);
	counting_ball()
  
	x_center= random(300,850);
	y_center= random(150,700); 
	x_center<400 || x_center>800 ? x_size= random(10,50) : x_size=random(10,300);
	y_center<400 || y_center>800 ? y_size= random(10,50) : y_size=random(10,300);

	cor = random(colors);
	fill(cor);
	text(segundos,325, 150);
	time_random= random(1,5);
	
	if(doing){
	
		if(round = 1 && segundos <5 && minutos <1 && flag == true){
			counting_ball()	
			ellipse(x_center, y_center, x_size, y_size);
			flag=false;
			
		}
		
		if(round = 2 && segundos > 5 && segundos <10 && minutos < 1 && flag == false){
			counting_ball()	
			ellipse(x_center, y_center, x_size, y_size);
			flag=true;	
			
		}
		
		if(round = 3 && segundos >10 && segundos < 15 && minutos < 1 && flag == true){
			counting_ball()	
			ellipse(x_center, y_center, x_size, y_size);
			flag=false;	
		}

		if(round = 4 && segundos >15 && segundos < 20 && minutos < 1 && flag == false){
			counting_ball()	
			ellipse(x_center, y_center, x_size, y_size);
			flag=true;	
		}
		
	}	
		counting_time()
		
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

//Funcao para contagem de cada rodada (bola) 
function counting_ball(){
	round ++;
}
// Funcao que confere se a tecla precionada conrresponde com a cor da bola
function check(){
	
	if(keyIsDown(LEFT_ARROW) && colors == yellow){
		finishTime= millis() - startTime;	
		answTime= answTime + finishTime;
		score1 ++; // testando para 1 jogador
		point ++;		
	}
	
	if (keyIsDown(RIGHT_ARROW) && colors == blue){
		finishTime= millis() - startTime;	
		answTime= answTime + finishTime;
		score1 ++; // testando para 1 jogador
		point ++;		
	}
	
	if (keyIsDown(UP_ARROW) && colors== red) {
		finishTime= millis() - startTime;	
		answTime= answTime + finishTime;
		score1 ++; // testando para 1 jogador
		point ++;		
	} 
	
	if (keyIsDown(DOWN_ARROW) && colors == green) {
		finishTime= millis() - startTime;	
		answTime= answTime + finishTime;
		score1 ++; // testando para 1 jogador
		point ++;		
	}

 }

