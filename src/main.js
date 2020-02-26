import { Particle } from './Particle'

export default function particulas(targetElement, config = {}) {

    const canvas = document.getElementById(targetElement)
    const context = canvas.getContext('2d')

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    let configuration = {
        fps: config.fps || 60,
        particles: config.particles || 60,
        color: config.color || '#000000',
        alpha: config.alpha || 1,
        duration: config.duration || 3000,
        direction_x: config.direction_X || 1,
        direction_y: config.direction_y || 1,
    }

    let particles = [
        new Particle(300, 300, 20, configuration.color, configuration.alpha, configuration.duration, configuration.fps),
        new Particle(100, 100, 15, configuration.color, configuration.alpha, 1000, configuration.fps),
        new Particle(200, 200, 15, configuration.color, configuration.alpha, 5000, configuration.fps)
    ]

    
    const init = () => {
        draw()
    }

    const set = (property, value) => {
        configuration[property] = value;
    }

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.render(context)
            const _alpha = Math.max(0, particle.alpha - particle.opacityStep);
            particle.alpha = _alpha;
        })
        setTimeout(draw, 1000/configuration.fps)
    }

    return {
        init,
        set
    }
}