import { connect, styled } from "frontity";

const VideoPlayer = ({ state, src})=>{
    console.log(src)
    if(!src){return null}
    


    return (

        <Video autoPlay='true' loop='true '>
            <source src={src}></source>
        </Video> 
    )

}

export default connect(VideoPlayer);

const Video = styled.video`
max-height: 300px;
max-width: 300px
`




