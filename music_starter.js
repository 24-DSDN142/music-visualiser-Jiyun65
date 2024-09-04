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
Cat.push(loadImage('cat.guitar3.png'));
Cat.push(loadImage('cat.guitar4.png'));
Cat.push(loadImage('cat.guitar1.png'));
Cat.push(loadImage('cat.guitar2.png'));

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


// Stage platform
fill(60); 
noStroke(50);
ellipse(width / 2, height - 200, width - 50, 70); 





// Spotlight 
fill(100);
beginShape();
vertex(width / 3, height - 200);        // Bottom left of the spotlight
vertex(width / 2 - 70, 0);              // Top left focus point
vertex(width / 3 + 70, 0);              // Top right focus point
vertex(width / 3 + 150, height - 210);  // Bottom right of the spotlight
quadraticVertex(width / 3 + 130, height - 190, width / 3 + 100, height - 190); // Rounded bottom curve
quadraticVertex(width / 3 + 50, height - 180, width / 3, height - 200); // Connect back to the left side
endShape(CLOSE);

  


  last_words = words;

  textFont('Gagalin');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(70);
  noStroke();
  fill(245, 255, 133, int(last_words_opacity));
  text(words, width/2, height/2);
  



 
    let bassFrame = int(map(bass, 10, 100, 0, 4));
console.log(bassFrame);
push();
scale(0.13);
image(Cat[bassFrame], - 300, height/2 + 3900)
pop();
 

 var drumFrame = int(map(drum, 0, 100, 0, 6));
  console.log(drumFrame);
  push();
  scale(0.23);
  image(Cat2[drumFrame], width / 0.5, height / 2 + 1250); 
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
  image(Cat3[vocalFrame], 600, height / 2 + 2100); 
  pop();

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


}
  


  