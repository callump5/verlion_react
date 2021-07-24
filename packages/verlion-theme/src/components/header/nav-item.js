import { connect, useConnect } from "frontity";

import Link from "@frontity/components/link";
const NavItem = ({state, name, link}) => {

    // const { state, actions } = useConnect();

    return(
        <Link link={link}>{name}</Link>
    )

}

export default connect(NavItem);