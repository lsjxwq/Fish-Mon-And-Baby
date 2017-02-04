/**
 * Created by Administrator on 2016/12/11.
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.double = 0;// 保留字
    this.score = 0;
    this.gameOver = false;
    this.alpha=0;
};
/*dataObj.prototype.reset = function () {
 this.fruitNum = 0;
 this.double = 1;
 };*/
dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.shadowBlur=10;
    ctx1.shadowColor='white';
    ctx1.fillStyle = 'white';
    ctx1.font = '30px verdana';
    ctx1.textAlign = 'center';//left center right
    /*ctx1.fillText("Num" + this.fruitNum, w * 0.5, h - 50);
     ctx1.fillText("Double" + this.double, w * 0.5, h - 80);*/
    ctx1.fillText("SCORE: " + this.score, w * 0.5, h - 20);

    if(this.gameOver){
        this.alpha+=deltaTime*0.0005;
        if(this.alpha>1){
            this.alpha=1;
        }
        ctx1.fillStyle='rgba(255,255,255,'+this.alpha+')';
        ctx1.fillText("GAME OVER" , w * 0.5, h * 0.45);
    }
    ctx1.restore();
};
dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 + this.double*500;
    this.fruitNum = 0;
    this.double = 0;
};