// TODO: Create a function 'animateSteps' that logs one step from a list every second
// TODO: Use 'setTimeout' or 'setInterval' to log the steps in order

const steps = [
  "Step 1: Create empty cart",
  "Step 2: Add item to cart",
  "Step 3: Calculate total",
  "Step 4: Apply discount",
  "Step 5: Checkout"
];

function animateSteps() {
  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      console.log(steps[i])
    }, i * 1000);
    
  
  }
}

module.exports = { animateSteps };
