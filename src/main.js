export default function particulas(targetElement, config) {

    console.log('entrando a particulas')

    let configuration = {
        color: config.color || '#000000'
    }

    const element = document.querySelector(targetElement)

    let counter = 0;
    
    const init = () => {
        render()
    }

    const set = (property, value) => {
        configuration[property] = value;
    }

    const render = () => {
        element.innerHTML = counter
        element.style.color = configuration.color
        counter++
    }

    return {
        init,
        set
    }
}