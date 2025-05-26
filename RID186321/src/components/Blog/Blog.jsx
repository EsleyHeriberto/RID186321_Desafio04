// Chamando o arquivo css
import './Blog.css'

// Importando a função para mudança de cor
import { useBackgroundColor } from '../../utils/ChangeColor';

function Blog () {

    
    return (
        <div className='box-blog'>
            <div className='container'>
                <div className='card-blog'>
                    <h2>
                        Blog
                    </h2>
                </div>
                <div className='card jc-space-between'>
                    <div className='card-area'>
                        <h2>Pós - Engenharia de Software</h2>
                        <div className='info-blog'>
                            <p>26 Mai 2025</p>
                            <p>Heriberto, Esley</p>
                        </div>
                        <div className='card-text'>
                            <p>Estou terminando a minha pós-graduação em engenharia de software e estou aprendendo nela: Java, Cloud e IA.
                            </p>
                        </div>

                    </div>
                    <div className='card-area'>
                        <h2>Análise de Sistemas</h2>
                        <div className='info-blog'>
                            <p>26 Mai 2025</p>
                            <p>Heriberto, Esley</p>
                        </div>
                        <div className='card-text'>
                            <p>Finalizei a minha graduação em 2024 e com ela consegui desenvolver mais a minha lógica de programação e foi nela que desenvolvi minhas habilidades de softskill.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog