import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(true)
            }}>TOGGLE
            </button>
            {!collapsed === true && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h2>---{props.title}---</h2>
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

export default UncontrolledAccordion;