import { connect, styled } from "frontity";
import GridItem from "./grid-item";

const Grid = ({state}) => {

    const data = state.source.get(state.router.link);
    
    console.log(state);
    return (
        <GridContainer>
            {data.items.map(({type, id, link}) => {
                const item = state.source[type][id];
                console.log('123', item);
                return (
                    <GridItem key={id}></GridItem>
                )
            })}
        </GridContainer>    
    )
}

const GridContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 

`
export default connect(Grid);