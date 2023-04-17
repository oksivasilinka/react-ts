import React, {useState} from "react";
import {isNumberObject} from "util/types";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {

    console.log("Rating rendering")
    let [value, setValue] = useState(0)
    const buttonStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '1px solid black'
    }

    return (
        <div>
            <Star selected={value > 0} />
            <button style={buttonStyle} onClick={() => {
                setValue(1)
            }}>1
            </button>

            <Star selected={value > 1}/>
            <button style={buttonStyle} onClick={() => {
                setValue(2)
            }}>2
            </button>

            <Star selected={value > 2}/>
            <button style={buttonStyle} onClick={() => {
                setValue(3)
            }}>3
            </button>

            <Star selected={value > 3}/>
            <button style={buttonStyle} onClick={() => {
                setValue(4)
            }}>4
            </button>

            <Star selected={value > 4}/>
            <button style={buttonStyle} onClick={() => {
                setValue(5)
            }}>5
            </button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return props.selected
        ? <span><b>star </b></span>
        : <span>star </span>

}