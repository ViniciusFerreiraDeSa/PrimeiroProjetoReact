import './CampoTexto.css'
const CampoTexto = (propriedade) =>{
    // const modificaMensagem = `${propriedade.placeholder} mensagem modificada com template`

    const aoDigitado = (evento) =>{
       propriedade.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-de-texto">
            <label>
                {propriedade.label}
            </label>
            <input value={propriedade.valor} onChange={aoDigitado} required={propriedade.obrigatorio} placeholder={`${propriedade.placeholder}..`}/>
        </div>
    );
}

export default CampoTexto