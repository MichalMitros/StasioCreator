
// INPUTS
var left_arm_shoulder_x;
var left_arm_shoulder_y;
var left_arm_elbow_x;
var left_arm_elbow_y;
var left_arm_hand_x;
var left_arm_hand_y;
var right_arm_shoulder_x;
var right_arm_shoulder_y;
var right_arm_elbow_x;
var right_arm_elbow_y;
var right_arm_hand_x;
var right_arm_hand_y;
var left_leg_hip_x;
var left_leg_hip_y;
var left_leg_knee_x;
var left_leg_knee_y;
var left_leg_foot_x;
var left_leg_foot_y;
var right_leg_hip_x;
var right_leg_hip_y;
var right_leg_knee_x;
var right_leg_knee_y;
var right_leg_foot_x;
var right_leg_foot_y;
var body_top_x;
var body_top_y;
var body_bottom_x;
var body_bottom_y;
var head_center_x;
var head_center_y;

// SPANS
var span_left_arm_shoulder;
var span_left_arm_elbow;
var span_left_arm_hand;
var span_right_arm_shoulder;
var span_right_arm_elbow;
var span_right_arm_hand;
var span_left_leg_hip;
var span_left_leg_knee;
var span_left_leg_foot;
var span_right_leg_hip;
var span_right_leg_knee;
var span_right_leg_foot;
var span_body_top;
var span_body_bottom;
var span_head_center;
var span_x;
var span_y;
var span_pose;


// BUTTONS
var next;
var prev;
var add_pose;
var remove_pose;
var download_button;

// input1 = createInput('asd');
// input1.input(myInputEvent);
// input1.position(windowWidth/2+100, 50);
// input1.size(100, 35);

function createHtmlElements() {
  left_arm_shoulder_x = createInput(dance.poses[present_pose].left_arm_shoulder_x+'');
  left_arm_shoulder_y = createInput(dance.poses[present_pose].left_arm_shoulder_y+'');
  left_arm_elbow_x = createInput(dance.poses[present_pose].left_arm_elbow_x+'');
  left_arm_elbow_y = createInput(dance.poses[present_pose].left_arm_elbow_y+'');
  left_arm_hand_x = createInput(dance.poses[present_pose].left_arm_hand_x+'');
  left_arm_hand_y = createInput(dance.poses[present_pose].left_arm_hand_y+'');
  right_arm_shoulder_x = createInput(dance.poses[present_pose].right_arm_shoulder_x+'');
  right_arm_shoulder_y = createInput(dance.poses[present_pose].right_arm_shoulder_y+'');
  right_arm_elbow_x = createInput(dance.poses[present_pose].right_arm_elbow_x+'');
  right_arm_elbow_y = createInput(dance.poses[present_pose].right_arm_elbow_y+'');
  right_arm_hand_x = createInput(dance.poses[present_pose].right_arm_hand_x+'');
  right_arm_hand_y = createInput(dance.poses[present_pose].right_arm_hand_y+'');
  left_leg_hip_x = createInput(dance.poses[present_pose].left_leg_hip_x+'');
  left_leg_hip_y = createInput(dance.poses[present_pose].left_leg_hip_y+'');
  left_leg_knee_x = createInput(dance.poses[present_pose].left_leg_knee_x+'');
  left_leg_knee_y = createInput(dance.poses[present_pose].left_leg_knee_y+'');
  left_leg_foot_x = createInput(dance.poses[present_pose].left_leg_foot_x+'');
  left_leg_foot_y = createInput(dance.poses[present_pose].left_leg_foot_y+'');
  right_leg_hip_x = createInput(dance.poses[present_pose].right_leg_hip_x+'');
  right_leg_hip_y = createInput(dance.poses[present_pose].right_leg_hip_y+'');
  right_leg_knee_x = createInput(dance.poses[present_pose].right_leg_knee_x+'');
  right_leg_knee_y = createInput(dance.poses[present_pose].right_leg_knee_y+'');
  right_leg_foot_x = createInput(dance.poses[present_pose].right_leg_foot_x+'');
  right_leg_foot_y = createInput(dance.poses[present_pose].right_leg_foot_y+'');
  body_top_x = createInput(dance.poses[present_pose].body_top_x+'');
  body_top_y = createInput(dance.poses[present_pose].body_top_y+'');
  body_bottom_x = createInput(dance.poses[present_pose].body_bottom_x+'');
  body_bottom_y = createInput(dance.poses[present_pose].body_bottom_y+'');
  head_center_x = createInput(dance.poses[present_pose].head_center_x+'');
  head_center_y = createInput(dance.poses[present_pose].head_center_y+'');

  left_arm_shoulder_x.input(handleValuesChanges);
  left_arm_shoulder_y.input(handleValuesChanges);
  left_arm_elbow_x.input(handleValuesChanges);
  left_arm_elbow_y.input(handleValuesChanges);
  left_arm_hand_x.input(handleValuesChanges);
  left_arm_hand_y.input(handleValuesChanges);
  right_arm_shoulder_y.input(handleValuesChanges);
  right_arm_shoulder_x.input(handleValuesChanges);
  right_arm_elbow_x.input(handleValuesChanges);
  right_arm_elbow_y.input(handleValuesChanges);
  right_arm_hand_x.input(handleValuesChanges);
  right_arm_hand_y.input(handleValuesChanges);
  left_leg_hip_x.input(handleValuesChanges);
  left_leg_hip_y.input(handleValuesChanges);
  left_leg_knee_x.input(handleValuesChanges);
  left_leg_knee_y.input(handleValuesChanges);
  left_leg_foot_x.input(handleValuesChanges);
  left_leg_foot_y.input(handleValuesChanges);
  right_leg_hip_x.input(handleValuesChanges);
  right_leg_hip_y.input(handleValuesChanges);
  right_leg_knee_x.input(handleValuesChanges);
  right_leg_knee_y.input(handleValuesChanges);
  right_leg_foot_x.input(handleValuesChanges);
  right_leg_foot_y.input(handleValuesChanges);
  body_top_x.input(handleValuesChanges);
  body_top_y.input(handleValuesChanges);
  body_bottom_x.input(handleValuesChanges);
  body_bottom_y.input(handleValuesChanges);
  head_center_x.input(handleValuesChanges);
  head_center_y.input(handleValuesChanges);

  span_left_arm_shoulder = createSpan('Left arm: shoulder');
  span_left_arm_elbow = createSpan('Left arm: elbow');
  span_left_arm_hand = createSpan('Left arm: hand');
  span_right_arm_shoulder = createSpan('Right arm: shoulder');
  span_right_arm_elbow = createSpan('Right arm: elbow');
  span_right_arm_hand = createSpan('Right arm: hand');
  span_left_leg_hip = createSpan('Left leg: hip');
  span_left_leg_knee = createSpan('Left leg: knee');
  span_left_leg_foot = createSpan('Left leg: foot');
  span_right_leg_hip = createSpan('Right leg: hip');
  span_right_leg_knee = createSpan('Right leg: knee');
  span_right_leg_foot = createSpan('Right leg: foot');
  span_body_top = createSpan('Body: top');
  span_body_bottom = createSpan('Body: bottom');
  span_head_center = createSpan('Head: center');
  span_x = createSpan('X');
  span_y = createSpan('Y');
  span_pose = createSpan('Pose: '+(present_pose+1)+'/'+dance.poses.length);

  if(next === undefined) {
    next = createButton('>>');
    prev = createButton('<<');
    add_pose = createButton('Add pose');
    remove_pose = createButton('Remove pose');
    download_button = createButton('Download');
    download_button.mousePressed(downloadJSON);
    next.mousePressed(stasio.changePose);
    prev.mousePressed(stasio.prevPose);
    add_pose.mousePressed(addPose);
    remove_pose.mousePressed(removePose);
    remove_pose.attribute('disabled', 'true');
  }
}

function setHtmlElementsValues() {
  left_arm_shoulder_x.value(dance.poses[present_pose].left_arm_shoulder_x+'');
  left_arm_shoulder_y.value(dance.poses[present_pose].left_arm_shoulder_y+'');
  left_arm_elbow_x.value(dance.poses[present_pose].left_arm_elbow_x+'');
  left_arm_elbow_y.value(dance.poses[present_pose].left_arm_elbow_y+'');
  left_arm_hand_x.value(dance.poses[present_pose].left_arm_hand_x+'');
  left_arm_hand_y.value(dance.poses[present_pose].left_arm_hand_y+'');
  right_arm_shoulder_x.value(dance.poses[present_pose].right_arm_shoulder_x+'');
  right_arm_shoulder_y.value(dance.poses[present_pose].right_arm_shoulder_y+'');
  right_arm_elbow_x.value(dance.poses[present_pose].right_arm_elbow_x+'');
  right_arm_elbow_y.value(dance.poses[present_pose].right_arm_elbow_y+'');
  right_arm_hand_x.value(dance.poses[present_pose].right_arm_hand_x+'');
  right_arm_hand_y.value(dance.poses[present_pose].right_arm_hand_y+'');
  left_leg_hip_x.value(dance.poses[present_pose].left_leg_hip_x+'');
  left_leg_hip_y.value(dance.poses[present_pose].left_leg_hip_y+'');
  left_leg_knee_x.value(dance.poses[present_pose].left_leg_knee_x+'');
  left_leg_knee_y.value(dance.poses[present_pose].left_leg_knee_y+'');
  left_leg_foot_x.value(dance.poses[present_pose].left_leg_foot_x+'');
  left_leg_foot_y.value(dance.poses[present_pose].left_leg_foot_y+'');
  right_leg_hip_x.value(dance.poses[present_pose].right_leg_hip_x+'');
  right_leg_hip_y.value(dance.poses[present_pose].right_leg_hip_y+'');
  right_leg_knee_x.value(dance.poses[present_pose].right_leg_knee_x+'');
  right_leg_knee_y.value(dance.poses[present_pose].right_leg_knee_y+'');
  right_leg_foot_x.value(dance.poses[present_pose].right_leg_foot_x+'');
  right_leg_foot_y.value(dance.poses[present_pose].right_leg_foot_y+'');
  body_top_x.value(dance.poses[present_pose].body_top_x+'');
  body_top_y.value(dance.poses[present_pose].body_top_y+'');
  body_bottom_x.value(dance.poses[present_pose].body_bottom_x+'');
  body_bottom_y.value(dance.poses[present_pose].body_bottom_y+'');
  head_center_x.value(dance.poses[present_pose].head_center_x+'');
  head_center_y.value(dance.poses[present_pose].head_center_y+'');

  span_pose.remove();
  span_pose = createSpan('Pose: '+(present_pose+1)+'/'+dance.poses.length);
  span_pose.position(width+25, 15);

  if(dance.poses.length == 1) {
    remove_pose.attribute('disabled', 'true');
    next.attribute('disabled', 'true');
    prev.attribute('disabled', 'true');
  } else {
    remove_pose.removeAttribute('disabled');
    next.removeAttribute('disabled');
    prev.removeAttribute('disabled');
  }
}

function setHtmlElementsPositions() {
  left_arm_shoulder_x.position(width+200, 120);
  left_arm_shoulder_y.position(width+280, 120);
  left_arm_elbow_x.position(width+200, 155);
  left_arm_elbow_y.position(width+280, 155);
  left_arm_hand_x.position(width+200, 190);
  left_arm_hand_y.position(width+280, 190);
  right_arm_shoulder_y.position(width+280, 225);
  right_arm_shoulder_x.position(width+200, 225);
  right_arm_elbow_x.position(width+200, 260);
  right_arm_elbow_y.position(width+280, 260);
  right_arm_hand_x.position(width+200, 295);
  right_arm_hand_y.position(width+280, 295);
  left_leg_hip_x.position(width+200, 330);
  left_leg_hip_y.position(width+280, 330);
  left_leg_knee_x.position(width+200, 365);
  left_leg_knee_y.position(width+280, 365);
  left_leg_foot_x.position(width+200, 400);
  left_leg_foot_y.position(width+280, 400);
  right_leg_hip_x.position(width+200, 435);
  right_leg_hip_y.position(width+280, 435);
  right_leg_knee_x.position(width+200, 470);
  right_leg_knee_y.position(width+280, 470);
  right_leg_foot_x.position(width+200, 505);
  right_leg_foot_y.position(width+280, 505);
  body_top_x.position(width+200, 540);
  body_top_y.position(width+280, 540);
  body_bottom_x.position(width+200, 575);
  body_bottom_y.position(width+280, 575);
  head_center_x.position(width+200, 610);
  head_center_y.position(width+280, 610);

  span_left_arm_shoulder.position(width+25, 125);
  span_left_arm_elbow.position(width+25, 160);
  span_left_arm_hand.position(width+25, 195);
  span_right_arm_shoulder.position(width+25, 230);
  span_right_arm_elbow.position(width+25, 265);
  span_right_arm_hand.position(width+25, 300);
  span_left_leg_hip.position(width+25, 335);
  span_left_leg_knee.position(width+25, 370);
  span_left_leg_foot.position(width+25, 405);
  span_right_leg_hip.position(width+25, 440);
  span_right_leg_knee.position(width+25, 475);
  span_right_leg_foot.position(width+25, 510);
  span_body_top.position(width+25, 545);
  span_body_bottom.position(width+25, 580);
  span_head_center.position(width+25, 615);
  span_x.position(width+230, 90);
  span_y.position(width+312, 90);
  span_pose.position(width+25, 15);

  next.position(width+110, 80);
  prev.position(width+25, 80);
  add_pose.position(width+200, 15);
  remove_pose.position(width+280, 15);
  download_button.position(width+25, 45);
}

function setHtmlElementsSizes() {
  left_arm_shoulder_x.size(75, 30);
  left_arm_shoulder_y.size(75, 30);
  left_arm_elbow_x.size(75, 30);
  left_arm_elbow_y.size(75, 30);
  left_arm_hand_x.size(75, 30);
  left_arm_hand_y.size(75, 30);
  right_arm_shoulder_y.size(75, 30);
  right_arm_shoulder_x.size(75, 30);
  right_arm_elbow_x.size(75, 30);
  right_arm_elbow_y.size(75, 30);
  right_arm_hand_x.size(75, 30);
  right_arm_hand_y.size(75, 30);
  left_leg_hip_x.size(75, 30);
  left_leg_hip_y.size(75, 30);
  left_leg_knee_x.size(75, 30);
  left_leg_knee_y.size(75, 30);
  left_leg_foot_x.size(75, 30);
  left_leg_foot_y.size(75, 30);
  right_leg_hip_x.size(75, 30);
  right_leg_hip_y.size(75, 30);
  right_leg_knee_x.size(75, 30);
  right_leg_knee_y.size(75, 30);
  right_leg_foot_x.size(75, 30);
  right_leg_foot_y.size(75, 30);
  body_top_x.size(75, 30);
  body_top_y.size(75, 30);
  body_bottom_x.size(75, 30);
  body_bottom_y.size(75, 30);
  head_center_x.size(75, 30);
  head_center_y.size(75, 30);

  next.size(80, 30);
  prev.size(80, 30);
  add_pose.size(75, 60);
  remove_pose.size(75, 60);
  download_button.size(165, 30);
}

function hideHtmlElements() {
  left_arm_shoulder_x.hide();
  left_arm_shoulder_y.hide();
  left_arm_elbow_x.hide();
  left_arm_elbow_y.hide();
  left_arm_hand_x.hide();
  left_arm_hand_y.hide();
  right_arm_shoulder_x.hide();
  right_arm_shoulder_y.hide();
  right_arm_elbow_x.hide();
  right_arm_elbow_y.hide();
  right_arm_hand_x.hide();
  right_arm_hand_y.hide();
  left_leg_hip_x.hide();
  left_leg_hip_y.hide();
  left_leg_knee_x.hide();
  left_leg_knee_y.hide();
  left_leg_foot_x.hide();
  left_leg_foot_y.hide();
  right_leg_hip_x.hide();
  right_leg_hip_y.hide();
  right_leg_knee_x.hide();
  right_leg_knee_y.hide();
  right_leg_foot_x.hide();
  right_leg_foot_y.hide();
  body_top_x.hide();
  body_top_y.hide();
  body_bottom_x.hide();
  body_bottom_y.hide();
  head_center_x.hide();
  head_center_y.hide();

  span_left_arm_shoulder.hide();
  span_left_arm_elbow.hide();
  span_left_arm_hand.hide();
  span_right_arm_shoulder.hide();
  span_right_arm_elbow.hide();
  span_right_arm_hand.hide();
  span_left_leg_hip.hide();
  span_left_leg_knee.hide();
  span_left_leg_foot.hide();
  span_right_leg_hip.hide();
  span_right_leg_knee.hide();
  span_right_leg_foot.hide();
  span_body_top.hide();
  span_body_bottom.hide();
  span_head_center.hide();
  span_x.hide();
  span_y.hide();
  span_pose.hide();

  next.hide();
  prev.hide();
  add_pose.hide();
  remove_pose.hide();
  download_button.hide();
}

function showHtmlElements() {
  left_arm_shoulder_x.show();
  left_arm_shoulder_y.show();
  left_arm_elbow_x.show();
  left_arm_elbow_y.show();
  left_arm_hand_x.show();
  left_arm_hand_y.show();
  right_arm_shoulder_x.show();
  right_arm_shoulder_y.show();
  right_arm_elbow_x.show();
  right_arm_elbow_y.show();
  right_arm_hand_x.show();
  right_arm_hand_y.show();
  left_leg_hip_x.show();
  left_leg_hip_y.show();
  left_leg_knee_x.show();
  left_leg_knee_y.show();
  left_leg_foot_x.show();
  left_leg_foot_y.show();
  right_leg_hip_x.show();
  right_leg_hip_y.show();
  right_leg_knee_x.show();
  right_leg_knee_y.show();
  right_leg_foot_x.show();
  right_leg_foot_y.show();
  body_top_x.show();
  body_top_y.show();
  body_bottom_x.show();
  body_bottom_y.show();
  head_center_x.show();
  head_center_y.show();

  span_left_arm_shoulder.show();
  span_left_arm_elbow.show();
  span_left_arm_hand.show();
  span_right_arm_shoulder.show();
  span_right_arm_elbow.show();
  span_right_arm_hand.show();
  span_left_leg_hip.show();
  span_left_leg_knee.show();
  span_left_leg_foot.show();
  span_right_leg_hip.show();
  span_right_leg_knee.show();
  span_right_leg_foot.show();
  span_body_top.show();
  span_body_bottom.show();
  span_head_center.show();
  span_x.show();
  span_y.show();
  span_pose.show();

  next.show();
  prev.show();
  add_pose.show();
  remove_pose.show();
  download_button.show();
}
