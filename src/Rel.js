import React,{push,key} from "react";
import './index.css'
import Plot from 'react-plotly.js';
class Rel extends React.Component{
    constructor(props){
        super(props);
       this.state={
        stockXvalue:[],
        stockYvalue:[]
       }
    } 
    componentDidMount(){
        this.fetchStock();
    }
    fetchStock(){
        const pointerTothis=this;
        console.log(pointerTothis);
        const Api_key=' VSGQ3EIASO0LA22A';
        const symbol='RELIANCE.BSE';
        let Api_call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${Api_key}`;
        let stockXvaluefunction=[];
        let stockYvaluefunction=[];
        fetch(Api_call)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for(var i in data['Time Series (Daily)']){
                stockXvaluefunction.push(i);
                stockYvaluefunction.push(data['Time Series (Daily)'][i]['1. open']);
            }
            // console.log(stockXvaluefunction);
            pointerTothis.setState({
                stockXvalue:stockXvaluefunction,
                stockYvalue:stockYvaluefunction
            })
        })  
    }
    render(){
      return(
        <div>
        <div className="topic rel">Reliance Industries Limited  stock</div>
          
            <Plot
        data={[
          {
            x:this.state.stockXvalue,
            y: this.state.stockYvalue,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },
        //   {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 600, height: 440, title: 'Reliance Industries Limited (India - BSE)'} }
      />
        </div>
      )
     }
}
export default Rel;