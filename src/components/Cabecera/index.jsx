import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
const HeaderEstilizado = styled.header`
    padding: 60px 0;
   display: flex;
    justify-content: space-between;
    .logo{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img className="logo" src="imagenes/logo.png" alt="Logo de Space App" />
        <CampoTexto/>
    </HeaderEstilizado>
}

export default Cabecera