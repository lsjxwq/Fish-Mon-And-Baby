/**
 * Created by Administrator on 2016/12/13.
 */
var startObj = function () {
    this.fruitNum = 0;
    this.double = 0;// 保留字
    this.score = 0;
    this.gameOver = false;
    this.alpha=0;
};

startObj.prototype.draw = function () {
    var w = ctx4.width;
    var h = ctx4.height;
    ctx4.save();


    ctx4.save();
    ctx4.shadowBlur=10;
    ctx4.shadowColor='white';
    ctx4.fillStyle = 'white';
    ctx4.font = '30px verdana';
    ctx4.textAlign = 'center';
    ctx4.fillText("you need energy to make it", w * 0.5, h - 20);

    if(this.gameOver){
        this.alpha+=deltaTime*0.0005;
        if(this.alpha>1){
            this.alpha=1;
        }
        ctx1.fillStyle='rgba(255,255,255,'+this.alpha+')';
        ctx1.fillText("GAME OVER" , w * 0.5, h * 0.45);
    }
    ctx4.restore();
};
startObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 + this.double*500;
    this.fruitNum = 0;
    this.double = 0;
};