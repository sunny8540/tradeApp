import React from "react";
import Plot from 'react-plotly.js';
class Shops extends React.Component{
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
        // const symbol='SHOP.TRT';
        let Api_call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SHOP.TRT&outputsize=compact&apikey=${Api_key}`;
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
        <div className="topic">SHOP.TRT stock</div>
           
            <Plot
        data={[
          {
            x:this.state.stockXvalue,
            y: this.state.stockYvalue,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'lightcoral'},
          },
        //   {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 600, height: 440, title: 'SHOP.TRT'} }
      />
        </div>
      )
     }
}
export default Shops;