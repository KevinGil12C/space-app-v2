import styled from "styled-components"
import tags from "./tags"

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
    padding-top: 56px;
`

const TagTitulo = styled.h3`
    font-size: 24px;
    color: #D9D9D9;
    margin: 0;
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const ButtonTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const Tag = () => {
    return (
    <ContainerTags>
        <TagTitulo>Buscar por Tags:</TagTitulo>
        <Div>
        {tags.map(tag=>{
            return <ButtonTag key = {tag.id}>{tag.titulo}</ButtonTag>
        })}
        </Div>
    </ContainerTags>
    )
}

export default Tag