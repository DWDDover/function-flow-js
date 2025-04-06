// TODO: In the browser, create a canvas to visualize function steps
// TODO: Write 'drawFlowStep' to display a step
// TODO: Write 'animateFlow' to loop through steps and call drawFlowStep

const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const steps = ["Start", "Process", "Decision", "Action", "End"];

function drawFlowStep(step) {
  console.log(steps[step]);
}

function animateFlow() {
  for (let i = 0; i < steps.length; i++) {
    drawFlowStep(i);
  }
}



module.exports = { animateFlow };
