export default function particulas(targetElement, config) {

    console.log('Entering particulas')

    let configuration = {
        color: config.color || '#000000'
    }

    const canvas = document.getElementById(targetElement)
    const context = canvas.getContext('2d')

    
    const init = () => {
        console.log(context)
        render()
    }

    const set = (property, value) => {
        configuration[property] = value;
    }

    const render = () => {
        canvas.style.border = '2px solid red'
    }

    return {
        init,
        set
    }
}