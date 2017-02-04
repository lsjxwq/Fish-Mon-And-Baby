/**
 * Created by Administrator on 2016/12/11.
 */
var can1;
var can2;
var can3;
var can4;

var canWidth;
var canHeight;

var ctx1;
var ctx2;
var ctx3;
var ctx4;

var lastTime;
var deltaTime;

var bgpic = new Image();

var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var data;

var wave;
var halo;
var start;

var dust;
var dustPic=[];
function init() {

    //获得canvas context
    can1 = document.getElementById('canvas1');//fishes,dust,ui,circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');//background,ane,fruits
    ctx2 = can2.getContext('2d');
    can4 = document.getElementById('canvas3');//background,ane,fruits
    ctx4 = can4.getContext('2d');

    can1.addEventListener('mousemove', onMouseMove, false);

    bgpic.src = 'images/background.jpg';
    bgpic[i].onload=function(){}

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = 'images/babyTail' + i + '.png';
        babyTail[i].onload=function (){}
    }

    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = 'images/babyEye' + i + '.png';
        babyEye[i].onload=function (){}
    }
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = 'images/babyFade' + i + '.png';
        babyBody[i].onload=function(){}
    }
    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = 'images/bigTail' + i + '.png';
        momTail[i].onload=function(){}
    }
    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = 'images/bigEye' + i + '.png';
        momEye[i].onload=function(){}
    }
    data = new dataObj();
    for (var i = 0; i < 8; i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = 'images/bigSwim' + i + '.png';
        momBodyOra[i].onload=function(){};
        momBodyBlue[i].src = 'images/bigSwimBlue' + i + '.png';
        momBodyBlue[i].onload=function(){}

    }
    wave=new waveObj;
    wave.init();

    halo=new haloObj();
    halo.init();



    for(var i=0;i<7;i++){
        dustPic[i]=new Image();
        dustPic[i].src='images/dust' + i + '.png';
    }
    dust=new dustObj();
    dust.init();

    start=new startObj();
    start.draw();

}

function gameloop() {

    requestAnimationFrame(gameloop);//setInterval,setTimeout  frame per second
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) {
        deltaTime = 40;
    }


    background();
    ane.draw();

    fruitMonitor();

    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    momFruitCollision();
    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();

}
function onMouseMove(e) {
    if (!data.gameOver && (e.offsetX || e.layerX)) {
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;

    }
}