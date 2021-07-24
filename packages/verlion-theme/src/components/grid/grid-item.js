import { connect, styled } from "frontity";

const GridItem = ({state}) => {
    return(
        <GridItemContainer>
            <p>test</p>
        </GridItemContainer>
    )

};
const GridItemContainer = styled.div`

`

export default connect(GridItem);