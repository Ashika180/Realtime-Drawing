var noseX = 0;
var noseY = 0;
var leftwristX = 0;
var rightwristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(520, 420);
    canvas.position(600, 205);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet model is loaded.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);
        console.log("Nose X = " + noseX + " and Y = " + noseY + " Left Wrist's X coordinates are = " + leftwristX + " and y coordinates are " + rightwristX + " and the difference is " + difference);
    
    }
}

function draw(){
    background("#808080");
    document.getElementById("square_side").innerHTML = "Width and height of the square is " + difference + "px";
    fill("#0000FF");
    stroke("#ADD8E6");
    square(noseX, noseY, difference);
}