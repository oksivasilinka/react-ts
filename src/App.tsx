import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/SelfControlledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";

function App() {

   let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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