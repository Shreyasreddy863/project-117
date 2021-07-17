function prelod (){
    clown_nose = loadImage('https://i.postimg.cc/7ZcjDqp/clownnose.png')
    }

function setup(){
    canavas= createCnavas(300,300);
    canavas.center();
    video = createCapture (video);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log('poseNet is Initialized');
}
 
function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results);
noseX= results[0].pose.nose.noseX;
noseY= results[0].pose.nose.noseY;
console.log("nose x ="+noseX);
console.log("nose Y ="+noseX);
}
}
function draw (){
    Image(video,0,0,300,300);
   fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,30, 30);
}

function take_snapshot(){
    Save('myFilterImage.png')
}

