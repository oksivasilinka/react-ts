import React from 'react';
import './App.css';
import Accordion from "./components/accordion";
import {Rating} from "./components/rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/SelfControlledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";

function App() {
    console.log("App rendering")
    return (
        <div className={'App'}>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <Rating value={2}/>
            <OnOff />
            {/*<OnOff />*/}

            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;