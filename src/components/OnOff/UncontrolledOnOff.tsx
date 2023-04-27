import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: OnOffType) {
    console.log("UncontrolledOnOff rendering");

    let [on, setOn] = useState(false);
    console.log("on: " + on);

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;