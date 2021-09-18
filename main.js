noseX = 0;
noseY = 0;
function preload(){
    moustache = loadImage("m.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is Initialized, dudes.Don't waste your time before it's shut down")
}

function draw(){
    image(video, 0, 0, 300, 300)
    image(moustache,noseX,noseY,30,30)
}

function take_snapshot(){
    save('filtered_img.png')
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x -12;
    noseY = results[0].pose.nose.y -12;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}