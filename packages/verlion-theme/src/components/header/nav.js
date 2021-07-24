import { connect, styled } from "frontity";
import NavItem from "./nav-item";


const Nav = ({ state, menu }) => {

    return(
    <NavContainer>
    {menu.map(([name, link]) => {
    
    //   const isCurrentPage = state.router.link === link;
        return(
            <NavItem key={name} link={link} name={name} ></NavItem>
        )
    } )}
    </NavContainer>
    )

}

const NavContainer = styled.div`

`;

export default connect(Nav);