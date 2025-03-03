const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let animationId;

function drawPattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const time = Date.now() * 0.002;
    const x = Math.sin(time) * 200 + canvas.width / 2;
    const y = Math.cos(time) * 200 + canvas.height / 2;

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    animationId = requestAnimationFrame(drawPattern);
}

function startAnimation() {
    if (!animationId) {
        drawPattern();
    }
}

function stopAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

canvas.addEventListener('mouseenter', startAnimation);
canvas.addEventListener('mouseleave', stopAnimation);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
