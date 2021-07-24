import { connect } from "frontity";

const Content = ({state}) => {

    const data = state.source.get(state.router.link);

    const items = state;

    const item = state.source[data.type][data.id];

    const  content  = item.content.rendered;
    // {data}
    console.log()

    return(
        <div>
            {content}
        </div>
    )
}


export default connect(Content);


