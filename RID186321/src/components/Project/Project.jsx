// Chamando o arquivo css
import './Project.css'

// Importando as imagens
import AgendeIA from '../../assets/AgendeIA.jpg'
import DashboardAerodromos from '../../assets/DashboardAerodromos.jpg'
import DesenvolvimentoWeb from '../../assets/DesenvolvimentoWeb.jpg'

function Project () {
    return (
        <div className='container'>
            <div className='box-project'>
                <h2>Projetos</h2>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={AgendeIA} alt="AgendeIA" />
                </div>
                <div className='card-text-project'>
                    <h2>Desafio - Board de Tarefas DNC</h2>
                    <p>Desenvolvimento de um board de tarefas dinâmico e responsivo, utilizando JavaScript, CSS e HTML.
                    </p>
                </div>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={DashboardAerodromos} alt="DashboardAerodromos" />
                </div>
                <div className='card-text-project'>
                    <h2>Desenvolvendo um Blog Responsivo</h2>
                    <p>Desenvolvimento de um Blog responsivo CSS e HTML.
                    </p>
                </div>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={DesenvolvimentoWeb} alt="DesenvolvimentoWeb" />
                </div>
                <div className='card-text-project'>
                    <h2>Projeto-Landing-Page</h2>
                    <p>Construção de uma Landing Page responsiva, utilizando HTML, CSS e JavaScript.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project