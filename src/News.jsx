import React, { useEffect, useState } from "react";
import Links from "./Links";
import './index.css';
import Footer from "./Footer";
// import Links from "./Links"; 

function News(){
    const [NewsTitle,setNews]=useState([]);
    const [cro,setCro]=useState([]);
    const [Excs,setExc]=useState([]);
    const [ticker,setThicker]=useState([]);
    async function thicker(){
        let resp=await fetch('https://api.polygon.io/v2/reference/news?apiKey=TgyJ6i_tsAeRjNlkP3YtNTGMx7TM5Lkd');
        let data=await resp.json();
        console.log(data.results);
        console.log(data.results);
        setThicker(data.results);
    }
    async function getNewsData(){
        let resp=await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=demo');
        let newsData=await resp.json();
        let n=await newsData.feed;
        setNews(newsData.feed);
    }
    async function dataGet(){
        var res=await fetch(' https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=TgyJ6i_tsAeRjNlkP3YtNTGMx7TM5Lkd');
        var Esxc=await res.json();
        console.log(Esxc.results);
        setExc(Esxc.results);
    }
    async function crypto(){
        var r=await fetch('https://fcsapi.com/api-v3/crypto/latest?symbol=BTC/USD,ETH/USD&access_key=tQYSIgb2KXmOeZZZAHEWb');
        var d=await r.json();
        console.log(d.response);
        setCro(d.response);
        
    }
    useEffect(()=>{
        dataGet();
        getNewsData();
        crypto();
        thicker();
    },[]);
    

    return(
        <>
           <Links />
        <div className="newSection">
            
           <div className="newsMain">
           <p1>News Section</p1>
            {
                NewsTitle.map((item,index)=>{
                   return(
                    <div className="mainNews" key={index}>
                       <div className="topLeft">
                       <div className="autherName">{item.authors}<span className="cot">({item.category_within_source})</span></div>
                        <div className="source">Source:-{item.source}</div>
                       </div>
                       <div className="topRight">

                        <div className="statement">Overall sentiment lable:-{item.overall_sentiment_label}</div>
                        <div className="statement">Overall sentiment score:-<span className="color">{item.overall_sentiment_score}</span></div>
                   
                       </div>
                       <div className="sum">
                        summary
                       </div>
                    <div className="summary">
                        <p>{item.summary}</p>
                    </div>
                    <div className="thikerStatement">
                        <div className="thikerTopic">
                             
                        </div>
                    </div>
                     </div>
                   )
                })
            }
           </div>
           <div className="exchange">
           <p1>Exchange</p1>
           <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Locale</th>
                    <th>Mic</th>
                    
                    <th>Type</th>
                    <th>Visit</th>
                </tr>
            </thead>
            <tbody>
                {
                    Excs.map((item,i)=>{
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
      <div className="thicker">
      <p1>Thicker News</p1>

        <div className="thickerMain">
            {
                ticker.map((t,i)=>{ 
                    return(
                            <div className="head" key={i}>
                               <div className="thickerHead">
                               <div className="thickerTitle">{t.title}</div>
                               <div className="thickertime">{t.published_utc}</div>
                               </div>
                                <div className="thickerAuther">Author: <span className="author"> {t.author}</span></div>
                                <div className="thickerDescription">   {t.description}</div>
                            </div>
                    )
                })
            }
        </div>
      </div>  
           </div>
        
           <div className="crypto">
           <p1>Crypto News</p1>

                    <table>
                        <thead>
                            <tr>
                                <th>Last update</th>
                                <th>Symbole</th>
                                <th>Open</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>Close</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    cro.map((it,s)=>{
                                       return(
                                        <tr key={s}>
                                            <td>{it.tm}</td>
                                            <td>{it.s}</td>
                                            <td>{it.o}</td>
                                            <td>{it.h}</td>
                                            <td>{it.l}</td>
                                            <td>{it.c}</td>
                                         
                                        </tr>
                                       )
                                    })
                                }
                        </tbody>
                    </table>
           </div>
        </div>
        <Footer />
        </>
    )
}
export default News;
    