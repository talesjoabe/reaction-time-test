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
let time_off = 0;

//Variaveis booleanas para estagios do jogo
let count_menu = 0; // 1. Start 2. Instruçoes 3.Fim
let button_flag = false; // False = Não criou os botoes // True = criou
var start = false;
var win = false;
var flag_game = true;
let time_aux = 0;

let initial_time = 0;
let last_time = 0;
let total_time = 0;
let erros = 0;
let acertos = 0;


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
    text('Duração do jogo: ' + segundos + 's', 50, 50);
    text('Score: ' + (acertos-erros), 1000, 50);

    if (flag_game) {
      if (frameCount % 60 == 0) time_off++;
      if (time_off>=int(random(2,4))) {
        flag_game=0;
        time_off = 0;
      }
      time_aux = 0;
      x_center = random(300, 850);
      y_center = random(150, 700);
      x_center < 400 || x_center > 800 ? x_size = random(10, 50) : x_size = random(10, 300);
      y_center < 400 || y_center > 800 ? y_size = random(10, 50) : y_size = random(10, 300);
      time_random = int(random(2, 6));
      cor = random(colors);
      initial_time = segundos;
    } else {
      text('Duração da bola: ' + time_random + 's', 50, 80);

      fill(cor);
      ellipse(x_center, y_center, x_size, y_size);
      check();
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
  } else if (count_menu == 4) {
    fill(255);
    textSize(28);
    text('Quantidade de acertos: ' + acertos, 300, 420);
    text('Quantidade de erros: ' + erros, 300, 450);
    text('Pontuação total: ' + (acertos-erros), 300, 480);
    media= total_time/acertos;
    text('Seu tempo médio de reação foi (acertos): ' + (media.toFixed(2)) +'s', 300, 510);
    buttonStart = createButton('JOGAR NOVAMENTE');
    buttonStart.position(300, 530);
    buttonStart.mousePressed(menu_start);
    
     buttonInstruction = createButton('INSTRUÇOES');
     buttonInstruction.position(450, 530);
     buttonInstruction.mousePressed(menu_instruction);
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

function check() {

  // acertos rules
  var yellow_rule = keyIsDown(LEFT_ARROW) && cor == Yellow;
  var red_rule = keyIsDown(UP_ARROW) && cor == Red;
  var green_rule = keyIsDown(DOWN_ARROW) && cor == Green;
  var blue_rule = keyIsDown(RIGHT_ARROW) && cor == Blue;

  var acertos_rule = yellow_rule || green_rule || red_rule || blue_rule;


  // erros rules
  var wrong_yellow_rule = (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW)) && cor == Yellow;
  var wrong_red_rule = (keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) && cor == Red;
  var wrong_green_rule = (keyIsDown(UP_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) && cor == Green;
  var wrong_blue_rule = (keyIsDown(DOWN_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) && cor == Blue;

  var wrong_rule = wrong_yellow_rule || wrong_red_rule || wrong_green_rule || wrong_blue_rule;


  if (flag_game == false && time_aux > time_random || wrong_rule || acertos_rule) {
    flag_game = true;
    if(acertos_rule){
      acertos++;
      last_time= segundos;
      total_time = total_time+last_time-initial_time;
    }else erros++;

  } else {
    if (frameCount % 60 == 0) time_aux++;
  }

}
