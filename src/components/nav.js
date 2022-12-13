import React from "react";

import sytles from "../styles/nav.module.scss"
import {
   
    // PlusCircleOutlined
} from '@ant-design/icons';

export default function Nav() {
    return (
        <div className={sytles.aside}>
            <div style={{lineHeight:"0.8px",fontSize:"16px"}}>
                <ul type="none">
                   <p style={{height:"20px",width:"100px",border:"1px solid",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3rem"}}>Premium</p>
                    <li style={{marginTop:"3rem"}}>Discover </li>
                    <li> Radio</li>
                    <li>Podcast</li>
                </ul>
            </div>
            <div style={{lineHeight:"0.8px",fontSize:"16px"}}>
                <ul type="none">
                    <li style={{marginTop:"3rem",fontSize:"13px"}}>Library</li>
                    <li > Recents</li>
                    <li>Albums </li>
                    <li>Songs</li>
                    
                </ul>
            </div>
         <div style={{fontSize:"16px",lineHeight:"5px"}}>
         <ul type="none">
            <li style={{marginTop:"5rem"}}>PlayList</li>
                <li >Japanese songs</li>
                <li>Summer 2020</li>
            </ul>
         </div>
        </div>
    )
}