//Xinyi Du 
//15104 Section B
//xinyidu@andrew.cmu.edu
//Final Project

/*
Project Introduction
Click mouse to Switch between the four weather conditions:
1. Normal day
2. Rainy day
3. Sunny day
4. Windy day 
(I changed the fourth condition because I feel like 
it is better to set all condtions to weather conditions)

You may need to wait for a while for the project to load.
*/

//arrays for the fish
var filenames = [];
var swimImage = [];
var KoiFish = [];
var filenames2 = [];
var swimImage2 = [];
var KoiFish2 = [];
var LotusLeaves = [];
var LotusFlower;
var PetalF;
var PetalF2;
var Petal;

var rainyDay = [];
var raindrops = [];
var sunnyDay = [];
var windyDay = [];

var click = 0;

function preload() {
    filenames[0] = "https://i.imgur.com/7aVxER1.png";
    filenames[1] = "https://i.imgur.com/eaATRVU.png";
    filenames[2] = "https://i.imgur.com/C3QQINX.png";
    filenames[3] = "https://i.imgur.com/iwpoC63.png";
    filenames[4] = "https://i.imgur.com/8o1y6Ct.png";
    filenames[5] = "https://i.imgur.com/TQV5kdA.png";
    filenames[6] = "https://i.imgur.com/3Uie5en.png";
    filenames[7] = "https://i.imgur.com/JhGYdUJ.png";
    filenames[8] = "https://i.imgur.com/wAgDojU.png";
    for (var i = 0; i < filenames.length; i++) {
        swimImage[i] = loadImage(filenames[i]);
    }

    filenames2[0] = "https://i.imgur.com/Fk4PXpv.png";
    filenames2[1] = "https://i.imgur.com/CwRNyvN.png";
    filenames2[2] = "https://i.imgur.com/Fpa6ybP.png";
    filenames2[3] = "https://i.imgur.com/hIz8jf5.png";
    filenames2[4] = "https://i.imgur.com/FuA7CB7.png";
    filenames2[5] = "https://i.imgur.com/BNsY3Ya.png";
    filenames2[6] = "https://i.imgur.com/8teahim.png";
    filenames2[7] = "https://i.imgur.com/z2ROkts.png";
    filenames2[8] = "https://i.imgur.com/9IuQeZJ.png";
    for (var i = 0; i < filenames2.length; i++) {
        swimImage2[i] = loadImage(filenames2[i]);
    }
    lotusFlower = loadImage("https://i.imgur.com/kxZaAi7.png");
    PetalF = loadImage("https://i.imgur.com/8MRwm40.png");
    PetalF2 = loadImage("https://i.imgur.com/6eapwRp.png");
}

//-----------------------makeFish1-------------------------//
function makeFish1(fx, fy, fdx, fdy) {
    var c = {x: fx, y: fy, dx: fdx, dy: fdy,
             walkingRight: true, 
             imageNum: 0,
             stepFunction: stepFish1,
             drawFunction: drawFish1
         }
    return c;
}
function stepFish1() {
    this.x += this.dx; //increase x by dx
    this.y += this.dy; //increase y by dy
    this.imageNum ++; //increase imageNum

    //if reaches 7 (go over 8 images), start from 0 again
    if (this.imageNum > 7) { 
        this.imageNum = 0;
    }
    //if the walking character reach the end of the red line
    if (this.x >= width+200) {
        this.walkingRight =! this.walkingRight; //flip the canvas
        this.x = -200; //start from 50 again
    } 
}
function drawFish1() {
    push();
    //if walking towards left, flip the canvas
    if (this.walkingRight == false) { 
        translate(800, 0); //tranlate the origin
        scale(-1,1); //flip the canvs
    }
    image(swimImage[this.imageNum], this.x, this.y, 170, 90); //draw the image
    pop();  
}
//-----------------------makeFish2-------------------------//
function makeFish2(fx, fy, fdx, fdy) {
    var c = {x: fx, y: fy, dx: fdx, dy: fdy,
             walkingRight: true, 
             imageNum: 0,
             stepFunction: stepFish2,
             drawFunction: drawFish2
         }
    return c;
}
function stepFish2() {
    this.x += this.dx; //increase x by dx
    this.y += this.dy; //increase y by dy
    this.imageNum ++; //increase imageNum

    //if reaches 7 (go over 8 images), start from 0 again
    if (this.imageNum > 7) { 
        this.imageNum = 0;
    }

    if (this.x >= width+200) {
        this.walkingRight =! this.walkingRight; //flip the canvas
        this.x = -200; 
    } 
}
function drawFish2() {
    push();
    //if walking towards left, flip the canvas
    if (this.walkingRight == false) { 
        translate(800, 0); //tranlate the origin
        scale(-1,1); //flip the canvs
    }
    image(swimImage2[this.imageNum], this.x, this.y, 170, 90); //draw the image
    pop();  
}

//RAINY DAY//
//-----------------------makeRipples-------------------------//
function makeRipples() {
    var c = {x: random(width), y: random(height), 
             size: random(3, 20), max_size: random(40, 50),
             stepFunction: stepRipples,
             drawFunction: drawRipples,
             arrayFunction: arrayRipples
         }
    return c;
}
function stepRipples() {
    this.size = this.size + 3;  
}
function drawRipples() {
    noFill();
    stroke(87-30, 125-30, 127-30);
    strokeWeight(1.2);

    if (this.size <= this.max_size) {
        ellipse(this.x, this.y, this.size, this.size);
        if (this.size > 6) {
            stroke(87-15, 125-15, 127-15);
            var size2 = 0.6*this.size;
            ellipse(this.x, this.y, size2, size2);
        } 
        if (size2 > 6){
            var size3 = 0.4*size2;
            stroke(87, 125, 127);
            ellipse(this.x, this.y, size3, size3);
        } 
    }    
}
function arrayRipples() {
    for (var i = 0; i < 100; i++) {
        rainyDay.push(makeRipples());
        var maxSize = random(40, 50);
        if (rainyDay[i].size > maxSize) {
            this.x = random(width);
            this.y = random(height);
            this.size = random(3, 20);
            rainyDay[i] = makeRipples();
        }
    } 
}
//-----------------------makeRaindrops-------------------------//
function makeRaindrops() {
    var c = {x: random(width), y: random(height), 
             size: random(3, 10), 
             drawFunction: drawRaindrops,
             arrayFunction: arrayRaindrops
         }
    return c;
}

function drawRaindrops() {
    //fill(255, 1);
    fill(LotusLeaves[0].r+50, LotusLeaves[0].g+50, LotusLeaves[0].b+50, 10);
    //stroke(255, 10);
    stroke(LotusLeaves[0].r+80, LotusLeaves[0].g+80, LotusLeaves[0].b+80);
    strokeWeight(1);
    for (i = 0; i < 6; i++) {
        var dropToLeaves = dist(this.x, this.y, LotusLeaves[i].x, LotusLeaves[i].y);
        if (dropToLeaves < (LotusLeaves[i].w)/2) {
            ellipse(this.x, this.y, this.size, this.size);
        }  
    }
}   
function arrayRaindrops() {
    for (var i = 0; i < 100; i++) {
        raindrops.push(makeRaindrops());
        if (frameCount % 1.5 == 0) {
            raindrops.unshift(makeRaindrops());
            raindrops.push(makeRaindrops());
        }
    } 
}   

//SUNNY DAY//
//-----------------------makeGlinting-------------------------//
function makeGlinting() {
    var c = {x: random(width), y: random(height), 
             s: random(8, 20), max_size: random(20, 40),
             stepFunction: stepGlinting,
             drawFunction: drawGlinting,
             drawFunction2: drawGlinting2,
             arrayFunction: arrayGlinting
         }
    return c;
}
function stepGlinting() {
    this.w += 3;  
    this.x += random(-4, 4);
    this.y += random(-4, 4);
}
function drawGlinting() {
    noStroke();
    fill(87+10, 125+10, 127+10);
    ellipse(this.x+random(-10,10), this.y+random(-10,10), this.s*1.2, this.s*0.5*1.2);  
    ellipse(this.x+random(-15,15), this.y+random(-2,2), this.s*0.7*1.2, this.s*0.5*0.7*1.2); 
    ellipse(this.x+random(-15,15), this.y+random(-2,2), this.s*0.8, this.s*0.5*0.8);  
    
    fill(87+30, 125+30, 127+30);
    ellipse(this.x, this.y, this.s, this.s*0.5);  
    ellipse(this.x+random(5,15), this.y+random(-2,2), this.s*0.7, this.s*0.5*0.7); 
    ellipse(this.x+random(-15,-8), this.y+random(-2,2), this.s*0.8, this.s*0.5*0.8);

}
function drawGlinting2() {
    noStroke();
    fill(255, 241, 138, 200);
    ellipse(this.x+random(-15,15), this.y+random(-15,15), this.s, this.s*0.5);  
    ellipse(this.x+random(-15,15)+random(5,15), this.y+random(-15,15)+random(-2,2), this.s*0.7, this.s*0.5*0.7); 
    ellipse(this.x+random(-15,15)+random(-15,-8), this.y+random(-15,15)+random(-2,2), this.s*0.8, this.s*0.5*0.8); 
}
function arrayGlinting() {
    for (var i = 0; i < 100; i++) {
        sunnyDay.push(makeGlinting());
    } 
}

//WINDY DAY//
//-----------------------makeRipples2-------------------------//
function makeRipples2(rx) {
    var c = {x: rx, y: 0, w: 30, h: 40,
             dx: 3,
             drawFunction: drawRipples2,
             stepFunction: stepRipples2,
             arrayFunction: arrayRipples2,
            }
    return c;
}
function stepRipples2() {
    this.x += this.dx;
}
function drawRipples2() {
    noFill();
    stroke(87-30, 125-30, 127-30);
    strokeWeight(1.5);
    for (r = 0; r < 12; r++) {

        if (r % 2 == 0) {
            arc(this.x, this.y+r*40, this.w, this.h, PI*3/2, PI/2); 
        }
        else {
            arc(this.x, this.y+r*40, this.w, this.h, PI/2, PI*3/2); 
        }
    }
}
function arrayRipples2() {
    for (var i = 0; i < 31; i++) {
        windyDay.push(makeRipples2(i*20));
        if (windyDay[i].x > width) {
            windyDay[i].x = -20;
        }
    } 
}

//-----------------------makePetal-------------------------//
function makePetal(px, py, px2, py2) {
    var c = {x: px, y: py, x2: px2, y2: py2,
             stepFunction: stepPetal,
             drawFunction: drawPetal,
            }
    return c;
}
function stepPetal() {
    if (this.x < 60+110) {
        this.x += 7;
    }
    this.x += 3;

    if (this.x > 170 && this.x2 < 150+10) {
        this.x2 += 6;
    }
    this.x2 += 3;
}
function drawPetal() {
    image(PetalF, this.x, this.y, 42, 25); 
    image(PetalF2, this.x2, this.y2, 30, 30); 
}

//-----------------------makeLotusLeaf-------------------------//
function makeLotusLeaf(lx, ly, ldx, ldy, lw, lh, lg, lr, lg, lb) {
    var lf = {x: lx, y: ly, dx: ldx, dy: ldy, w: lw, h: lh, angle: lg,
              r: lr, g: lg, b: lb,
              stepFunction: updateLotusLeaf,
              drawFunction: drawLotusLeaf
            }
    return lf;
}
function updateLotusLeaf() {
    this.x += this.dx;
    if (this.x < -width/3) {
        this.x = width*4/3;
    }
    if (this.x > width*4/3) {
        this.x = -width/3;
    }
}
function drawLotusLeaf() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.w, this.h);
    stroke(this.r+40, this.g+40, this.b+40);
    strokeWeight(1.4);
    for (i = 0; i < 15; i++) {
        push();
        translate(this.x, this.y);
        var xx = (this.w*0.85/2)*cos(radians(this.angle+24*i));
        var yy = (this.w*0.85/2)*sin(radians(this.angle+24*i));
        line(0,0, xx, yy);
        pop();
    }
    ellipse(this.x, this.y, this.w*0.06, this.h*0.06);
}

//-----------------------makeLotusFlower-------------------------//
function makeLotusFlower(fx, fy, fdx, fdy) {
    var lf = {x: fx, y: fy, dx: fdx, dy: fdy,
              stepFunction: updateLotusFlower,
              drawFunction: drawLotusFlower
            }
    return lf;
}
function updateLotusFlower() {
    this.x += this.dx;
    if (this.x < -width/3) {
        this.x = width*4/3;
    }
    if (this.x > width*4/3) {
        this.x = -width/3;
    }
}
function drawLotusFlower() {
    image(lotusFlower, this.x, this.y, 110, 110); 
    stroke(255-50, 233-50, 131-50);
    fill(255, 233, 131);
    ellipse(this.x, this.y, 25, 25);

    for (i = 0; i < 8; i++) {
        push();
        translate(this.x, this.y);
        fill(255-30, 233-30, 131-30);
        noStroke();
        var xx = (8)*cos(radians(45*i));
        var yy = (8)*sin(radians(45*i));
        ellipse(xx, yy, 5, 5);
        pop();
    }
}

//----------------------------setup & draw------------------------------//
function setup() {
    createCanvas(600, 400);
    frameRate(10);
    imageMode(CENTER);
    //store the characters info to the characters array
    for (var i = 0; i < 3; i++) {
        var fish = makeFish1(random(width), random(10, height-10), random(5, 30), 0);
        KoiFish.push(fish);  
    }

    for (var i = 0; i < 2; i++) {
        var fish2 = makeFish2(random(width), random(10, height-10), random(5, 30), 0);
        KoiFish2.push(fish2);  
    }

    LotusLeaves[0]= makeLotusLeaf(100, 320, 0.2, 0, 80, 80, 10,
                                  71, 106, 44);
    LotusLeaves[1]= makeLotusLeaf(60, 220, 0.2, 0, 180, 180, 0,
                                  89, 129, 58);
    LotusLeaves[2]= makeLotusLeaf(800, 150, 0.2, 0, 120, 120, 0, 
                                  69, 114, 62);
    LotusLeaves[3]= makeLotusLeaf(490, 50, 0.2, 0, 250, 250, 0, 
                                  87, 134, 79);
    LotusLeaves[4]= makeLotusLeaf(290, 50, 0.2, 0, 80, 80, 0, 
                                  120, 160, 100);
    LotusLeaves[5]= makeLotusLeaf(370, 420, 0.2, 0, 220, 220, 0, 
                                  96, 130, 38);
    LotusFlower = makeLotusFlower(60, 220, 0.2, 0);
    Petal = makePetal(LotusFlower.x, LotusFlower.y, LotusFlower.x-10, LotusFlower.y+40);
}

function draw() {
    background(37, 75, 77);
    //update the steps and draw the elements
    for (var i = 0; i < 3; i++) {
        KoiFish[i].stepFunction();
        KoiFish[i].drawFunction();
    }
    for (var i = 0; i < 2; i++) {
        KoiFish2[i].stepFunction();
        KoiFish2[i].drawFunction();
    }

    if (click % 4 == 1) {
        arrayRipples();
        for (var i = 0; i < 100; i++) {
            rainyDay[i].stepFunction();
            rainyDay[i].drawFunction();
        }
    }
    if (click % 4 == 2) {
        arrayGlinting();
        for (var i = 0; i < 100; i++) {
            sunnyDay[i].stepFunction();
            sunnyDay[i].drawFunction();
            sunnyDay[i].drawFunction2();
        }
    }
    if (click % 4 == 3) {
        arrayRipples2();
        for (var i = 0; i < 31; i++) {
            windyDay[i].stepFunction();
            windyDay[i].drawFunction();
        }
    }

    for (var i = 0; i < 6; i++) {
        LotusLeaves[i].stepFunction();
        LotusLeaves[i].drawFunction();
    }

    if (click % 4 == 1) {
        arrayRaindrops();
        for (var i = 0; i < 100; i++) {
            raindrops[i].drawFunction();
        }
    }

    if (click % 4 == 3) {
        Petal.stepFunction();
        Petal.drawFunction();
    }

    LotusFlower.stepFunction();
    LotusFlower.drawFunction();

    if (click % 4 == 2) {
        arrayGlinting();
    }
}

//-----------------------mousePressed-------------------------//
function mousePressed() {
    click ++; //if mouse is pressed, increase number of clicks
}

