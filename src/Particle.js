export class Particle {
    constructor(x, y, size, color, alpha, duration) {
        this.x = x;
        this.y = y;
        this.alpha = alpha;
        this.size = size;
        this.color = color;
        this.duration = duration;
        this.opacityStep = ((1000/60) / duration); 
    }
    
    render(ctx) {
        ctx.beginPath();
        ctx.globalAlpha = this.alpha;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.closePath();
    }
}

export function particleFactory(amount, settings) {
    
}