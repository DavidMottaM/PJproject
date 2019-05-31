const BRICK_W = 80;
const BRICK_H = 60;
const BRICK_GAP = 2;
const BRICK_COLS = 10;
const BRICK_ROWS = 3;
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);


function brickReset() {
	for(var i=0; i<BRICK_COLS * BRICK_ROWS; i++) {
		brickGrid[i] = true;
	} // end of for each brick
} // end of brickReset func

function rowColToArrayIndex(col, row) {
	return col + BRICK_COLS * row;
}

function drawBricks() {

	for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<BRICK_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 

			if(brickGrid[arrayIndex]) {
				Utils.colorRect(BRICK_W*eachCol,BRICK_H*eachRow,
					BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'blue');
			} // end of is this brick here
		} // end of for each brick
	} // end of for each row

} // end of drawBricks func

