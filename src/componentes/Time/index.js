import Tripulantes from '../Tripulantes'
import './Time.css'

const Time = (props) => {
    const estilosCss =  { backgroundColor: props.corFundo }
    const corLinha = {borderColor: props.corBarra}
    return(
        props.tripulantes.length > 0 && <section className='time' style={estilosCss}>
            <h3 style={corLinha}>{props.nome}</h3>
            <div className='tripulantesDosPiratas'>
                {props.tripulantes.map( tripulante => <Tripulantes 
                    corDeFundo={props.corBarra}
                    key={tripulante.tripulacao} 
                    nome={tripulante.nome} 
                    fruta={tripulante.fruta}
                    imagem={tripulante.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time