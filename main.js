var stasio;
var scl;
var present_pose = 0;
var min_width = 800;
var min_height = 660;

function setup() {
  createCanvas(windowWidth-380, windowHeight);
  scl = windowHeight/16.5;
  stasio = new Stasio(scl);
  createDefaultPose();
  createHtmlElements();
  setHtmlElementsPositions();
  setHtmlElementsSizes();
  setHtmlElementsValues();
}

function draw() {
  if(windowWidth > min_width && windowHeight > min_height) {
    background(255);
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(2, 2, width-4,height-4);
    stroke(192);
    strokeWeight(1);
    translate(width/2, height/2);
    for(let i=0; i<width/2; i+=scl) {
      line(i, -height/2, i, height/2);
    }
    for(let i=0; i>-width/2; i-=scl) {
      line(i, -height/2, i, height/2);
    }
    for(let i=0; i<height/2; i+=scl) {
      line(-width/2, i, width/2, i);
    }
    for(let i=0; i>-height/2; i-=scl) {
      line(-width/2, i, width/2, i);
    }
    strokeWeight(4);
    line(-width/1.5, 0, width/1.5, 0);
    line(0, -height/2, 0, height/2);

    stasio.show();

    translate(-width/2, -height/2);
    noFill();
    stroke(0);
    strokeWeight(4);
    rect(2, 2, width-4,height-4);
  } else {
    background(0);
    textAlign(CENTER);
    fill(255);
    stroke(255);
    strokeWeight(1);
    if(height < width) {
      textSize(height/10);
    } else {
      textSize(width/10);
    }
    if(height < width) {
    text('Screen is too small', width/2, height/2 + height/24);
    } else {
      text('Screen is too small', width/2, height/2 + width/24);
    }
  }
}

function windowResized() {
  if(windowWidth > min_width && windowHeight > min_height) {
    resizeCanvas(windowWidth-380, windowHeight);
    scl = windowHeight/16.5;
    stasio = new Stasio(scl);
    setHtmlElementsPositions();
    showHtmlElements();
  } else {
    hideHtmlElements();
    resizeCanvas(windowWidth, windowHeight);
  }
}

function addPose() {
  dance.poses.push(JSON.parse(JSON.stringify(dance.poses[dance.poses.length-1])));
  setHtmlElementsValues();
}

function removePose() {
  dance.poses.splice(present_pose, 1);
  if(present_pose == dance.poses.length) {
    present_pose--;
  }
  setHtmlElementsValues();
}

function downloadJSON() {
  download(new Blob([JSON.stringify(dance)]), 'dance_'+floor(random(1, 100000))+'.json', 'text/plain');
}

function handleValuesChanges() {
  let value = Number(this.value());

  switch(this) {
    case left_arm_shoulder_x:
      dance.poses[present_pose].left_arm_shoulder_x = value;
      break;
    case left_arm_shoulder_y:
      dance.poses[present_pose].left_arm_shoulder_y = value;
      break;
    case left_arm_elbow_x:
      dance.poses[present_pose].left_arm_elbow_x = value;
      break;
    case left_arm_elbow_y:
      dance.poses[present_pose].left_arm_elbow_y = value;
      break;
    case left_arm_hand_x:
      dance.poses[present_pose].left_arm_hand_x = value;
      break;
    case left_arm_hand_y:
      dance.poses[present_pose].left_arm_hand_y = value;
      break;
    case right_arm_shoulder_x:
      dance.poses[present_pose].right_arm_shoulder_x = value;
      break;
    case right_arm_shoulder_y:
      dance.poses[present_pose].right_arm_shoulder_y = value;
      break;
    case right_arm_elbow_x:
      dance.poses[present_pose].right_arm_elbow_x = value;
      break;
    case right_arm_elbow_y:
      dance.poses[present_pose].right_arm_elbow_y = value;
      break;
    case right_arm_hand_x:
      dance.poses[present_pose].right_arm_hand_x = value;
      break;
    case left_arm_hand_y:
      dance.poses[present_pose].left_arm_hand_y = value;
      break;
    case left_leg_hip_x:
      dance.poses[present_pose].left_leg_hip_x = value;
      break;
    case left_leg_hip_y:
      dance.poses[present_pose].left_leg_hip_y = value;
      break;
    case left_leg_knee_x:
      dance.poses[present_pose].left_leg_knee_x = value;
      break;
    case left_leg_knee_y:
      dance.poses[present_pose].left_leg_knee_y = value;
      break;
    case left_leg_foot_x:
      dance.poses[present_pose].left_leg_foot_x = value;
      break;
    case left_leg_foot_y:
      dance.poses[present_pose].left_leg_foot_y = value;
      break;
    case right_arm_hand_y:
      dance.poses[present_pose].right_arm_hand_y = value;
      break;
    case right_leg_hip_x:
      dance.poses[present_pose].right_leg_hip_x = value;
      break;
    case right_leg_hip_y:
      dance.poses[present_pose].right_leg_hip_y = value;
      break;
    case right_leg_knee_x:
      dance.poses[present_pose].right_leg_knee_x = value;
      break;
    case right_leg_knee_y:
      dance.poses[present_pose].right_leg_knee_y = value;
      break;
    case right_leg_foot_x:
      dance.poses[present_pose].right_leg_foot_x = value;
      break;
    case right_leg_foot_y:
      dance.poses[present_pose].right_leg_foot_y = value;
      break;
    case body_top_x:
      dance.poses[present_pose].body_top_x = value;
      break;
    case body_top_y:
      dance.poses[present_pose].body_top_y = value;
      break;
    case body_bottom_x:
      dance.poses[present_pose].body_bottom_x = value;
      break;
    case body_bottom_y:
      dance.poses[present_pose].body_bottom_y = value;
      break;
    case head_center_x:
      dance.poses[present_pose].head_center_x = value;
      break;
    case head_center_y:
      dance.poses[present_pose].head_center_y = value;
      break;
  }
}
