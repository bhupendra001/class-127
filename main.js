noseX = 0;
noseY = 0;
difference = 0;
leftwrist = 0;
rightwrist = 0;


function preload(){

}

function draw(){
 background("white")
 
document.getElementById("square_size").innerHTML = "width and height of a square will be = " + difference + " px";   
fill("cyan");   
stroke("cyan");
square(noseX,noseY,difference);

}

function setup(){

    video = createCapture(VIDEO);  
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    
    
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);

}

function modelloaded(){

console.log("poseNet is initialized")


}

function gotposes(results){

if(results.length > 0){

console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

console.log("noseX = " + noseX + "noseY" + noseY);
leftwrist = results[0].pose.leftWrist.x;
rightwrist = results[0].pose.rightWrist.x;
difference = floor(leftwrist-rightwrist);

console.log("leftwrist = " + leftwrist + "rightwrist" + rightwrist + "difference = " + difference);

}

}
