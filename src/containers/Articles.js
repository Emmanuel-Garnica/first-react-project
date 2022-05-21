import styled from "styled-components";
import Container from "../elements/Container";

const Article = ({className}) =>{
    return(
        <div className={className}>
            <Container>
                <h2>Estos son mis articulos en Dev.to</h2>
            </Container>
        </div>
    );
}

export default styled(Article)`
    background-color: ${ props => props?.theme?.colors?.primary || "#14213d" };
    color: ${ props => props?.theme?.colors?.lightText || "#fff" };
    padding-top: 50px;
    padding-bottom: 60px;
`;