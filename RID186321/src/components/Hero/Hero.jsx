// Chamando o arquivo css
import './Hero.css'

// Importanto o componente Button
import Button from '../Button/Button'

function Hero () {
    return (
        <div className='container hero d-flex al-center'>
            <div className='hero-text'>
                <h1>Olá, eu sou Esley Heriberto <br /> Desenvolvedor Full-stack</h1>
                <p>
                Sou desenvolvedor Full-stack com experiência em Java, Python, SQL, CSS, React, JavaScript e TypeScript.
                Minha atuação envolve o desenvolvimento de aplicações web dinâmicas. 
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Hero