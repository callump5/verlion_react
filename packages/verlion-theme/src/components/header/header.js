import Logo from "./logo";
import Nav from "./nav";
import { connect, styled } from "frontity";

const Header = ( { state } ) => {

    return (
        <HeaderContainer>
            <Nav menu={state.theme.leftMenu}></Nav>
            <Logo></Logo>
            <Nav menu={state.theme.rightMenu}></Nav>
        </HeaderContainer>
    )

}

const HeaderContainer = styled.div`

    #logo {
        width: auto;
        height: 120px
    }

`


export default connect(Header); 