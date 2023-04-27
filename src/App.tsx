import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/SelfControlledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {

   let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
   let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=> (setAccordionCollapsed(!accordionCollapsed))}/>

            {/*<UncontrolledRating/>*/}

            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={(on)=>{
               setSwitchOn(on)}}/>
            {/*<UncontrolledOnOff />*/}

            <UncontrolledAccordion titleValue={"Menu"} />

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