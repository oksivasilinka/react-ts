import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: ()=> void
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}/>
                {props.collapsed === false && <AccordionBody/>}
            </div>
        )
}
//
// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h2 onClick={props.onChange}>---{props.title}---</h2>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;