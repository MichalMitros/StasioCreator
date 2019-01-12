
class Stasio {

  constructor(scale) {
    this.scale = scale;
  }

  changePose() {
    present_pose++;
    if(present_pose == dance.poses.length) {
      present_pose = 0;
    }

    setHtmlElementsValues();
  }

  prevPose() {
    present_pose--;
    if(present_pose == -1) {
      present_pose = dance.poses.length-1;
    }

    setHtmlElementsValues();
  }

  show() {
    let pose = dance.poses[present_pose];

    strokeWeight(this.scale/7);
    noFill();
    stroke(0);

    // HANDS
    line(pose.left_arm_shoulder_x*this.scale, pose.left_arm_shoulder_y*this.scale,
         pose.left_arm_elbow_x*this.scale, pose.left_arm_elbow_y*this.scale);
    line(pose.left_arm_elbow_x*this.scale, pose.left_arm_elbow_y*this.scale,
         pose.left_arm_hand_x*this.scale, pose.left_arm_hand_y*this.scale);
    line(pose.right_arm_shoulder_x*this.scale, pose.right_arm_shoulder_y*this.scale,
         pose.right_arm_elbow_x*this.scale, pose.right_arm_elbow_y*this.scale);
    line(pose.right_arm_elbow_x*this.scale, pose.right_arm_elbow_y*this.scale,
         pose.right_arm_hand_x*this.scale, pose.right_arm_hand_y*this.scale);

    // LEGS
    line(pose.left_leg_hip_x*this.scale, pose.left_leg_hip_y*this.scale,
         pose.left_leg_knee_x*this.scale, pose.left_leg_knee_y*this.scale);
    line(pose.left_leg_knee_x*this.scale, pose.left_leg_knee_y*this.scale,
         pose.left_leg_foot_x*this.scale, pose.left_leg_foot_y*this.scale);
    line(pose.right_leg_hip_x*this.scale, pose.right_leg_hip_y*this.scale,
         pose.right_leg_knee_x*this.scale, pose.right_leg_knee_y*this.scale);
    line(pose.right_leg_knee_x*this.scale, pose.right_leg_knee_y*this.scale,
         pose.right_leg_foot_x*this.scale, pose.right_leg_foot_y*this.scale);

    // BODY AND HEAD
    line(pose.body_top_x*this.scale, pose.body_top_y*this.scale,
         pose.body_bottom_x*this.scale, pose.body_bottom_y*this.scale);
    ellipse(pose.head_center_x*this.scale, pose.head_center_y*this.scale,
            this.scale*4, this.scale*4);
  }
}
