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
  ctx.font = "20px Arial";
  ctx.fillText(steps[step], 50, 100 + step * 40)
}

function animateFlow() {
  if (currentStep < steps.length) {
    drawFlowStep(currentStep);
    currentStep++;
    setTimeout(animateFlow, 1000);
  }
}



module.exports = { animateFlow };
