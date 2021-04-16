function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(134, 233,198);
  stroke(134, 233,198);
  circle(50, 50, 80);

  circle(50, 480, 80);

  circle(590, 60, 80);

  circle(590, 420, 80);

  fill(0, 199, 0);
  stroke(0, 199, 0);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('img.png');
}
