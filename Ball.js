class Ball {
	constructor(posX,posY,speedX,speedY,radius,color) {
		
		this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
		this.originalSpeedX = this.speedX;
	}
	
	resetPos(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}
	
	move(deltaTime) {
		this.posX += this.speedX*deltaTime;
		this.posY += this.speedY*deltaTime;
		
		if(this.posX < 0) { //left
			this.speedX *= -1;
		}
		if(this.posX > 800) { // canvas.width
			this.speedX *= -1;
		}
		if(this.posY < 0) { // top
			this.speedY *= -1;
		}
		if(this.posY > 600) { // canvas.height
			this.resetPos(400,300); //canvas width and height / 2
		}
		
		//this.paddleCollision();
	}
	
	paddleCollision(paddle) {
		//var paddleTopEdgeY = canvas.height-PADDLE_DIST_FROM_EDGE;
		var paddleTopEdgeY = 600-paddle.distFromEdge;
		var paddleBottomEdgeY = paddleTopEdgeY + paddle.thickness;
		var paddleLeftEdgeX = paddle.posX;
		var paddleRightEdgeX = paddleLeftEdgeX + paddle.width;
		if( this.posY > paddleTopEdgeY && // below the top of paddle
			this.posY < paddleBottomEdgeY && // above bottom of paddle
			this.posX > paddleLeftEdgeX && // right of the left side of paddle
			this.posX < paddleRightEdgeX) { // left of the left side of paddle
			
			this.speedY *= -1;

			var centerOfPaddleX = paddle.posX+paddle.width/2;
			var ballDistFromPaddleCenterX = this.posX - centerOfPaddleX;
			this.speedX = ballDistFromPaddleCenterX * this.originalSpeedX/(paddle.width/4);
		}
	}

	
	draw() {
		Utils.colorCircle(this.posX,this.posY,this.radius,this.color);
	}
}


/*
function ballBrickHandling(deltaTime) {
	var ballBrickCol = Math.floor(ballX / BRICK_W);
	var ballBrickRow = Math.floor(ballY / BRICK_H);
	var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);

	if(ballBrickCol >= 0 && ballBrickCol < BRICK_COLS &&
		ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS) {

		if(brickGrid[brickIndexUnderBall]) {
			brickGrid[brickIndexUnderBall] = false;
			
			var prevBallX = ballX - ballSpeedX*deltaTime;
			var prevBallY = ballY - ballSpeedY*deltaTime;
			var prevBrickCol = Math.floor(prevBallX / BRICK_W);
			var prevBrickRow = Math.floor(prevBallY / BRICK_H);

			if(prevBrickCol != ballBrickCol) {
				ballSpeedX *= -1;
			}
			if(prevBrickRow != ballBrickRow) {
				ballSpeedY *= -1;
			}
		}
	
	}
}
*/