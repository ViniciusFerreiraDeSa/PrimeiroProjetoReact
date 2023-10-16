import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [fruta, setFruta] = useState('')
    const [imagem, setImagem] = useState('')
    const [tripulacao, setTripulacao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.tripulacaoCadastrada({
            nome,
            fruta,
            imagem, 
            tripulacao,
        })
        setNome('')
        setFruta('')
        setImagem('')
        setTripulacao('')
    } 

    return (
        <section className='formulario_grandline'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para CONQUISTAR A GRAND LINE!!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do personagem." 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Fruta" 
                    placeholder="Digite a fruta do seu personagem."
                    valor = {fruta}
                    aoAlterado = {valor => setFruta(valor)}
                 />

                <CampoTexto 
                    label="Imagem"
                    placeholder="Adicione uma imagem do seu personagem."
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                 />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Tripulações"
                    itens={props.nomeDosTimes}
                    valor={tripulacao}
                    aoAlterado={valor => setTripulacao(valor)}
                />

                <Botao>Criar Tripulação</Botao>
            </form>
        </section>
    );
}

export default Formulario