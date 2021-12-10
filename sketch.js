let webcam;
let clickSound;
let hearts;
let colors = [];
let flowers;
function setup() {
  createCanvas(630,450);
  webcam = createCapture(VIDEO);
  webcam.size(800,600);
  webcam.hide();
  clickSound = loadSound('camera-shutter-click-03.mp3');
  hearts = loadImage('hearts.jpg');
  flowers = loadImage('lotus-flower-images.jpg');


}

function draw() { 
  //background(255);
  image(webcam,100,0);
  
  // filters
  if(key == 't'){
    filter(THRESHOLD);
  }
  if(key == 'g'){
    filter(GRAY);
  }
  if(key == 'i'){
    filter(INVERT);
  }
  if(key == 'p'){ // pixel
      loadPixels();
      for(i = 0; i < height; i++){
         for(j = 0; j < width; j++){
            let index = (i + j * width) * 3;
            pixels[index * 5] = 255;
         }
      }
      updatePixels();
  }
  if(key == 'w'){
     textSize(32);
     stroke(0,255,0);
     strokeWeight(3);
     text('AWESOME!!!',50,50,100,100);
    
     textSize(32);
     stroke(255,0,255);
     strokeWeight(3);
     text('COOL!!!',500,400,100,100);
    
  }
  if(key == 'h'){
    image(hearts,540,350,100,100);
    image(hearts,0,350,100,100);
    image(hearts,540,0,100,100);
    image(hearts,0,0,100,100);
  }
  if(key == 'f'){
    image(flowers,540,350,100,100);
    image(flowers,0,350,100,100);
    image(flowers,540,0,100,100);
    image(flowers,0,0,100,100);
  }
  

  
  // change tint by pressing right arrow
  if (keyIsDown(RIGHT_ARROW)) {
      for (i = 0; i < 3; i++){
        colors[i] = random(255); // assigns random color in each color spectrum
  }
  tint(colors[0], colors[1], colors[2]);

  }
  

}


//function that saves picture and plays clicking sound
function mousePressed(){
  saveCanvas();
  clickSound.play();

}








  


  

