import React, {useEffect, useState} from "react";
import './index.css';
import Links from "./Links";
import Footer from "./Footer";
export default function Mutual(){
    const [fund,setMutual]=useState([]);
        
        async function mutual(){
        const mut=await fetch('https://api.twelvedata.com/mutual_funds/list?fund_family=Vanguard&apikey=demo&source=docs');
        const mutu=await mut.json();
        let datas=mutu.result.list;
        // console.log(mutu.result.list);
            setMutual(datas);

        // .then(function(resps){
        //     return resps.json();
        // })
        // .then(function(data){
        //     console.log(data.result.list);
        //     setMutual(data.result.list);
        // });
        
    }
    useEffect(()=>{
        mutual();
    },[]);
    return(
        <>
            <Links />
           <div className="mainMu">
           <p2>Mutual Fund World wide data</p2>
           </div>
            <div className="MutualMain">
                <table className="mutual">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Country</th>
                            <th>Fund type </th>
                            <th>Fund family</th>
                            <th>Performance Rating</th>
                            <th>Risk Rating</th>
                            <th>Currency</th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                     
                        {
                            fund.map((mutuals,inds)=>{
                                return(
                                    <tr key={inds}>
                                        <td>{mutuals.name}</td>
                                        <td>{mutuals.symbol}</td>
                                        <td>{mutuals.country}</td>
                                        <td>{mutuals.fund_type}</td>
                                        <td>{mutuals.fund_family}</td>
                                        <td>{mutuals.performance_rating}</td>
                                        <td>{mutuals.risk_rating}</td>
                                        <td>{mutuals.currency}</td>
                                    </tr>
                                )
                            })
                        }
                  
                </table>
            </div>
            <Footer />
        </>

    )
}