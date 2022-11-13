import React, {  useState } from "react";
import './index.css';
import Links from "./Links";
import Footer from "./Footer"; 
import Bmi from './Bmi';
import Stock from "./Bmi";
import Amzn from "./Amzn";
import Tsco from "./Tsco";
import Shops from "./Shops";
import GreenPower from "./GreenPower";
import Rel from "./Rel";
export default function Homes(){
    // const [state,setState]=useState({
          
    //     series: [{
    //         name: "Desktops",
    //         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //     }],
    //     options: {
    //       chart: {
    //         height: 350,
    //         type: 'line',
    //         zoom: {
    //           enabled: false
    //         }
    //       },
    //       dataLabels: {
    //         enabled: false
    //       },
    //       stroke: {
    //         curve: 'straight'
    //       },
    //       title: {
    //         text: 'Product Trends by Month',
    //         align: 'left'
    //       },
    //       grid: {
    //         row: {
    //           colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //           opacity: 0.5
    //         },
    //       },
    //       xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //       }
    //     },
      
      
    //   }
    // )
   
   
    return(
      <>
           <Links />
           <div className="homeHead">Check today stock </div>
        <div className="stock">
          <div className="s1"> 
          <Rel />
          <Stock />
         </div>
         <div className="s2">
         <Amzn />
          <Tsco />
         
         </div>
         <div className="s3">
         <Shops />
          <GreenPower />
         </div>
        </div>
        <Footer />
        </> 
    )
}
