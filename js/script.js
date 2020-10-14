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
let count_menu = 0; // 1. Start 2. Instruçoes 3.Fim
let button_flag = false; // False = Não criou os botoes // True = criou
var start = false;
var win = false;
var flag_game = true;
let time_aux=0;

function setup() {
  count = 0;
  Red = '#FF0000', Blue = ' #0000FF', Green = '#00FF00', Yellow = '#FFFF00';
  createCanvas(1200, 900);
  colors = [Red, Blue, Green, Yellow];
  bg = '#808080';

}

function draw() {
  background(bg);

  if (count_menu == 0) {
    clear();
    if (!button_flag) {
      buttonStart = createButton('START');
      buttonStart.position(470, 520);
      buttonStart.mousePressed(menu_start);

      buttonInstruction = createButton('INSTRUÇOES');
      buttonInstruction.position(450, 550);
      buttonInstruction.mousePressed(menu_instruction);
      button_flag = true;
    }
  } else if (count_menu == 1) {
    counting_time();
    fill(255);
    textSize(28);
    text('Duração do jogo: ' + segundos, 50, 50);
    
    if(flag_game){
      time_aux=0;
      x_center = random(300, 850);
      y_center = random(150, 700);
      x_center < 400 || x_center > 800 ? x_size = random(10, 50) : x_size = random(10, 300);
      y_center < 400 || y_center > 800 ? y_size = random(10, 50) : y_size = random(10, 300);
      time_random = int(random(2, 6));
      flag_game = false;
      cor = random(colors);
    } else{
        fill(cor);
        text('Duração da bola: ' + time_random, 50, 80);
        ellipse(x_center, y_center, x_size, y_size);
        if(time_aux<=time_random){
          if(frameCount % 60 == 0) time_aux++;
        } else{ 
          flag_game = true;
        }
      if(check()) flag_game = true;
    }
  } else if (count_menu == 2) {
    fill('#000000');
    textSize(28);
    text('O objetivo desse jogo  avaliar o tempo de reação do usuário.\nAo longo de 1 minuto irá aparecer círculos de dimensoes di- \nferentes e o usuário deve pressionar a sete correspondente\na cada cor.\n\n↑ Vermelho  \n→ Azul \n↓ Verde \n← Amarelo', 260, 350);
    if (button_flag) {
      buttonStart = createButton('START');
      buttonStart.position(260, 650);
      buttonStart.mousePressed(menu_start);
      button_flag = false;
    }
  } else if (count_menu == 4){
    fill(255);
    textSize(28);
    text('FIM!!!!', 470, 520);
  }
}


function menu_start() {
  count_menu = 1;
  buttonStart.hide();
  buttonInstruction.hide();
}

function menu_instruction() {
  count_menu = 2;
  buttonStart.hide();
  buttonInstruction.hide();
}

//Funcao para contagem do tempo de jogo
function counting_time() {
  if (frameCount % 60 == 0) {
    if (segundos < 60) {
      segundos++;
    }
    if (segundos == 60) {
      segundos = 0;
      count_menu = 4;
    }    
  }
}

function check(){
	
	if(keyIsDown(LEFT_ARROW) && cor == Yellow){
	    flag_game = true;
	}
	
	if (keyIsDown(RIGHT_ARROW) && cor == Blue){
		flag_game = true;
	}
	
	if (keyIsDown(UP_ARROW) && cor== Red) {
		flag_game = true;	
	} 
	
	if (keyIsDown(DOWN_ARROW) && cor == Green) {
		flag_game = true;			
	}

 }
