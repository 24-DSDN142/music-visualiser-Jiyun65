let firstRun = true


let Cat = [];
let Cat2 = [];
let Cat3 = [];
let words_cat = [];

let last_words = "";
let last_words_opacity = 0;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 if (firstRun) {
rectMode(CENTER);
Cat.push(loadImage('cat.bass3.png'));
Cat.push(loadImage('cat.bass4.png'));
Cat.push(loadImage('cat.bass1.png'));
Cat.push(loadImage('cat.bass2.png'));

Cat2.push(loadImage('cat.drum1.png'));
Cat2.push(loadImage('cat.drum5.png'));
Cat2.push(loadImage('cat.drum3.png'));
Cat2.push(loadImage('cat.drum4.png'));
Cat2.push(loadImage('cat.drum2.png'));
Cat2.push(loadImage('cat.drum6.png'));

Cat3.push(loadImage('cat.vocal0.png'));
Cat3.push(loadImage('cat.vocal1.png'));
Cat3.push(loadImage('cat.vocal2.png'));
Cat3.push(loadImage('cat.vocal3.png'));
Cat3.push(loadImage('cat.vocal4.png'));


firstRun = false
 }
 function setup() {
  createCanvas(1200, 800);
  
}

background(20, 20, 40); 
  let vocalHue = map(vocal, 0, 100, 30, 50); 
  let drumHue = map(drum, 0, 100, 60, 90);   
  let bassHue = map(bass, 0, 100, 60, 90);   

  let vocalOpacity = map(vocal, 0, 100, 80, 100); 
  let drumOpacity = map(drum, 0, 100, 80, 100);   
  let bassOpacity = map(bass, 0, 100, 80, 100);  


// shadow for the stage platform
fill(60);  
noStroke();
ellipse(width / 2, height - 130, width + 300, 100)

// stage platform 
  fill(100);  
noStroke();
ellipse(width / 2, height - 170, width + 300, 100)



  noStroke();
  colorMode(HSB, 100);

// left spotlight 
fill(bassHue, 100, 30, bassOpacity);
beginShape();
vertex(width / 4 - 100, height - 200);  // bottom left 
vertex(width / 4 + 40, height - 200);  // bottom right 
vertex(width / 4 - 10, 0); // top right of the light beam
vertex(width / 5 - 40, 0); // top left of the light beam
endShape(CLOSE);
ellipse(width / 4 - 30, height - 200, 140, 50); 

// center spotlight 
fill(vocalHue, 100, 30, vocalOpacity);
beginShape();
vertex(width / 2 - 70, height - 200);  // bottom left 
vertex(width / 2 + 70, height - 200);  // bottom right 
vertex(width / 2 + 30, 0); // top right 
vertex(width / 2 - 30, 0); // top left 
endShape(CLOSE);
ellipse(width / 2, height - 200, 140, 50); 

// right spotlight 
fill(drumHue, 100, 30, drumOpacity);
beginShape();
vertex(3 * width / 4 - 40, height - 200);  // bottom left 
vertex(3 * width / 4 + 100, height - 200);  // bottom right 
vertex(3 * width / 4 + 60, 0); // top right 
vertex(3 * width / 3.8 - 20, 0); // top left 
endShape(CLOSE);
ellipse(3 * width / 4 + 30, height - 200, 140, 50);



colorMode(RGB);
last_words = words;

  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(70);
  noStroke();
  fill(245, 255, 133, int(last_words_opacity));
  text(words, width/2, height/2);
  

  if(words == "") {
    last_words_opacity = last_words_opacity * 0.95;
    words = last_words;
  }
  else {
    last_words_opacity = (1 + last_words_opacity) * 1.1;
    if(last_words_opacity > 255) {
      last_words_opacity = 255;
    }
  }


    let bassFrame = int(map(bass, 10, 100, 0, 4));
console.log(bassFrame);
push();
scale(0.13);
image(Cat[bassFrame], - 250, height/2 + 3900)
pop();
 

 var drumFrame = int(map(drum, 0, 100, 0, 6));
  console.log(drumFrame);
  push();
  scale(0.23);
  image(Cat2[drumFrame], width / 0.48, height / 2 + 1250); 
  pop();


  let vocalFrame;   
  if (vocal < 60) {
    vocalFrame = 0; 
  } else if (vocal < 70) {
    vocalFrame = 1; 
  }  else if (vocal < 80) {
    vocalFrame = 2;  
  } else if (vocal < 90) {
    vocalFrame = 3; 
  } else if (vocal < 100) {
    vocalFrame = 4;  
  } else {
    vocalFrame = Cat3.length - 1; 
  }
  
  console.log(vocalFrame);
  push();
  scale(0.18);
  image(Cat3[vocalFrame], 700, height / 2 + 2100); 
  pop();



}
  


  