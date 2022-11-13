import React, { useEffect, useState } from "react";
import './index.css';
// import Links from "./Links"; 

function Stock(){
    const [NewsTitle,setNews]=useState([]);
    const [img,setImg]=useState([]);

    async function getNewsData(){
        let resp=await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=demo');
        let newsData=await resp.json();
        let n=await newsData.feed;
       
        console.log(newsData.feed);
        // // console.log(newsData.feed.title);
        // for(var i in newsData.feed ){
        //     console.log(newsData.feed[i].title);
        // }

        // console.log(n[0].ticker_sentiment);
        setNews(newsData.feed);
      
    }
    useEffect(()=>{
        getNewsData();
    },[]);
    

    return(
        <>
        
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
        </>
    )
}
export default Stock;
    