const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
    radius: 20,
    color: 'rgb(33, 150, 243)',
    x: 0,
    y: 0,
    speed: 0.1
};

// Update circle position when mouse is moved
function updateCirclePosition(event) {
    circle.x = event.clientX;
    circle.y = event.clientY;
}

// Animation function to update circle position
function animate() {
    // Check if the screen is mobile (<= 768px)
    if (window.innerWidth <= 768) {
        canvas.style.display = 'none'; // Hide the canvas on mobile
        return; // Skip the animation
    } else {
        canvas.style.display = 'block'; // Ensure canvas is visible on larger screens
    }

    // Clear the canvas each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle at the current mouse position
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.closePath();

    // Request a new frame to animate
    requestAnimationFrame(animate);
}

// Set up the event listener for mouse movement
document.addEventListener("mousemove", updateCirclePosition);

// Start the animation loop
animate();

// Resize listener to adjust for screen size changes
window.addEventListener("resize", function() {
    animate(); // Re-trigger the animation on resize
});
