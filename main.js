function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	mario_gameover = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas")
	v1 = createCapture(VIDEO)
	v1.size(800, 400)
	v1.parent("Game_Console")
	pn = ml5.poseNet(v1, ml)
	pn.on('pose', gotposes)
	instializeInSetup(mario);
}
function gotposes(results){
	if(results.length>0){
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	  
	}
  }
function ml(){
	console.log ("modelLoaded")
}
function draw() {
	game()
}