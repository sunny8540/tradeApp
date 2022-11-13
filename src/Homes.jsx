import React ,{useEffect, useState} from "react";
import './index.css';
import Links from "./Links"; 

export default function Homes(){
    const [exc,setExc]=useState([]);
    async function dataGet(){
        var res=await fetch(' https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=TgyJ6i_tsAeRjNlkP3YtNTGMx7TM5Lkd');
        var exc=await res.json();
        console.log(exc.results);
        setExc(exc.results);
    }
    useEffect(()=>{
        dataGet();
    },[]);
    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Locale</td>
                    <td>Mic</td>
                    
                    <td>Type</td>
                    <td>Visit</td>
                </tr>
            </thead>
            <tbody>
                {
                    exc.map((item,i)=>{
                       return(
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.locale}</td>
                            <td>{item.mic}</td>
                             
                            <td>{item.type}</td>
                            <td><a href={item.url}>Visit</a></td>
                        </tr>
                       )
                    })
                }
            </tbody>
        </table>
        
        
        </> 
    )
}
 