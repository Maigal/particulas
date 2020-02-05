export class Particle {
    constructor(x, y, size, color, alpha, duration) {
        this.x = x;
        this.y = y;
        this.alpha = alpha;
        this.size = size;
        this.color = color;
        this.duration = duration;

        this.opacityStep = 0.02; 
    }
}

export function particleFactory(amount, settings) {
    
}