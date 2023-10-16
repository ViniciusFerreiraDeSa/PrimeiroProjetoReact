import './Tripulantes.css'

const Tripulantes = ({nome,fruta, imagem, corDeFundo}) => {
    return (
        <div className='tripulates'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{fruta}</h5> 
            </div>
        </div>
    )   
}

export default Tripulantes