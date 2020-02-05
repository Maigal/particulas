import { Particle } from './Particle'

export default function particulas(targetElement, config = {}) {

    console.log('Entering particulas')

    const canvas = document.getElementById(targetElement)
    const context = canvas.getContext('2d')

    let configuration = {
        particles: config.particles || 60,
        color: config.color || '#000000',
        alpha: config.alpha || 1,
        duration: config.duration || 3000
    }

    let particles = [
        new Particle(300, 300, 20, configuration.color, configuration.alpha, configuration.duration),
        new Particle(100, 100, 15, configuration.color, configuration.alpha, configuration.duration)
    ]

    

    
    const init = () => {
        render()
    }

    const set = (property, value) => {
        configuration[property] = value;
    }

    const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log('entering render')
        particles.forEach((particle, index) => {

            const _alpha = Math.max(0, particle.alpha - particle.opacityStep);

            context.beginPath();
            context.globalAlpha = _alpha;
            context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
            context.fillStyle = configuration.color;
            context.fill();
            context.globalAlpha = 1;
            context.closePath();

            particle.alpha = _alpha;
            
        })
        setTimeout(render, 100)
    }

    return {
        init,
        set
    }
}