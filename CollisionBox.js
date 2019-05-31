class CollisionBox{
	constructor(originX,originY,width,height){
		this.originX = originX;
		this.originY = originY;
		this.width = width;
		this.height = height;
		
		this.cornerNW = [originX, originY];
		this.cornerNE = [originX+width, originY];
		this.cornerSW = [originX, originY+height];
		this.cornerSE = [originX+width, originY+height]
	}
	//detect self collision with 'theOther'
	function detectCollision(theOther){
		if(this.originX < theOther.originX + theOther.width &&
			this.originX + this.width > theOther.originX &&
			this.originY < theOther.originY + theOther.height &&
			this.originY + this.height > theOther.originY){
				return true;	
			} else{
				return false;
			}
		
	}
	


}