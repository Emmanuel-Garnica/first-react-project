import styled from "styled-components";
import { titleStyles } from "../collections/styles";
import CircleImage from "../elements/CircleImage";
import Container from "../elements/Container";
import StyledSpan from "../elements/StyledSpan";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import Row from "../elements/Row";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const H1Title = styled.h1`
    ${ titleStyles };
    margin: 0;
`;

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Header = ({className})=> {
    let [user] = useContext(UserContext);
    return(
        <Container>
            <header className={className}>
                <InfoContainer>
                    <H1Title>
                        Bienvenid@s, mi nombre es <StyledSpan>Emmanuel</StyledSpan>
                        Desarrollador web
                    </H1Title>
                    <Row>
                        <LinkPrimaryButton>mis proyectos</LinkPrimaryButton>
                        <LinkPrimaryButton>descargar mi CV</LinkPrimaryButton>
                    </Row>
                    <LinkSecondaryButton>o lee mis artículos {user.articlesFromDevTo.lenght}</LinkSecondaryButton>
                </InfoContainer>
                <CircleImage width={350} height={350} src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/279269144_10223008636824588_2418192205239074811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGcK-gW0xBZWtwfLoAhOpSO9B4A7WVx2fz0HgDtZXHZ_Pya8SRscKYtY0pk7wAlkQY&_nc_ohc=NRxAz4_EcLsAX-HBj71&_nc_ht=scontent-bog1-1.xx&oh=00_AT9UP3ajSGVMMntZjeXmlqWr2HquaCwANCP4DUWkMKVCCw&oe=628D0E95" alt="Foto"/>
            </header>
        </Container>
    );
}

export default styled(Header)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 0;
    align-items: center;
`;