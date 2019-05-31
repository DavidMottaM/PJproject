class LabelText{
	constructor(originX,originY,textString){
		this.originX = originX;
		this.originY = originY;
		this.textS = textString;
	}
	function drawText(){
		World.canvasContext.fillText(textString, originX, originY);
	}
}