class ImageSprite{
	constructor(spr_image, originX, originY, width, height){
		this.spr_image = spr_image;
		this.originX = originX;
		this.originY = originY;
		this.width = width;
		this.height = height;
	}
	function drawImageSprite(){
		World.canvasContext.drawImage(this.spr_image, this.originX, this.originY, this.width, this.height);
	}
}