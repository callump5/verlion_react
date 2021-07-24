import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";

import VerlionParticles from "./particles";
import Header from "./header/header";
import Grid from "./grid/grid";

import AppCss from '../assets/css/App.css';
import Content from "./content";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    // console.log(state,data)
    return (
        <>

            <Global styles={css(AppCss)} />
            
            <Head>
                <title>Eye of Echo</title>
            </Head>


            <Header></Header>

            <Main>
                <Switch>
                    <Grid when={data.isArchive} />
                    <Content when={data.isPortfolio} />
                    <Content when={data.isPost} />

                {/* <Loading when={data.isFetching} />
                <PageError when={data.isError} /> */}
                </Switch>
            </Main>



            <VerlionParticles></VerlionParticles>

        </>
    );
};


const Main = styled.div`

`


export default connect(Root);