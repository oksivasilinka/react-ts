import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props: OnOffType) {


    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;