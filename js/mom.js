/**
 * Created by Administrator on 2016/12/11.
 */
var momObj = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.bigBody = new Image();

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeIntval = 1000;

    this.momBodyCount=0;
};
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigBody.src = 'images/bigSwim0.png';
};
momObj.prototype.draw = function () {

    //lerp x,y
    this.x = lerpDistance(mx, this.x, 0.97);
    this.y = lerpDistance(my, this.y, 0.97);

    // delta angle
    //Math.atan2(y.x);
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI,PI

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.7);

    //tail
    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }

    //eye
    this.momEyeTimer += deltaTime;
    if (this.momEyeTimer > this.momEyeIntval) {

        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeIntval;
        if (this.momEyeCount == 0) {
            this.momEyeIntval = Math.random() * 2000 + 2000;//[2000,3500)
        } else {
            this.momEyeIntval = 200;
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    var momTailCount = this.momTailCount;
    ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);
    var momBodyCount=this.momBodyCount;
    if(data.double==1){//ora
        ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5);

    }else{//blue
        ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);
    }

    var momEyeCount=this.momEyeCount;
    ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);
    ctx1.restore();
};