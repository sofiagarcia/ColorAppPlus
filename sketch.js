var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var topBoundary = 0;
var bottomBoundary = 0;

var buttonSize = 100;

var brushColor = 'black';
var brushSize = 10;

CurrentArea = " ";

areaColor= ["#e54341", "#60b896","#9b84af","#f7b320"];

function setup() {
  createCanvas(400, 600);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;
  topBoundary = 400;
  bottomBoundary = height;
}

function draw() {
  //background(255);
  //interface

  fill(areaColor[0]);
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill(areaColor[1]);
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill(areaColor[2]);
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill(areaColor[3]);
  rect(boundary3, topBoundary, buttonSize, buttonSize);
  
  
  if(mouseY > topBoundary && mouseY < bottomBoundary){
    if(mouseX > boundary0 && mouseX < boundary1){
      currentArea = "area1";
    } if(mouseX > boundary1 && mouseX < boundary2){
        currentArea = "area2";
    } if(mouseX > boundary2 && mouseX < boundary3){
       currentArea = "area3";
    } if(mouseX > boundary3 && mouseX < boundary4){
       currentArea = "area4";
    }
  } 
  

  
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  
  
}

function mousePressed() {
  
  
  console.log(currentArea);
  if(currentArea == "area1"){
     brushColor = areaColor[0];
  } if(currentArea == "area2"){
     brushColor = areaColor[1];
  } if(currentArea == "area3"){
    brushColor = areaColor[2];
  }if(currentArea == "area4") {
     brushColor = areaColor[3];
  }
}