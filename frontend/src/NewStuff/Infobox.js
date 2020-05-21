import React,{useContext} from 'react';

import {ValuePair} from './ValuePair'
import {PointContext} from "../Content/PointContext"
export function Infobox(){
    const items = []
    const pointMap = useContext(PointContext);


    pointMap.forEach((value,key,map) => {items.push(<td key={key.toString()}><ValuePair value={value[0]}  text={key.toString()} /></td>)})


    return (<div id="infobox">
    <table>
        <tbody>
            <tr>
                {items}
            </tr>
        </tbody>
    </table>
    
    </div>)
}