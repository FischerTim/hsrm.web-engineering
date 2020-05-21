import React from 'react';

export function ValuePair({value,text}){
    return (<div>
        <label>{text}</label> 
        <br/>
        <label>{value}</label>
    </div>)
}
