import React, { useState} from 'react';
import Dropdown from '../components/Dropdown';
import { Input, FormBtn } from '../components/Form'
import { LineChart, PieChart, BarChart } from '../components/Chart'

const options = ['Bar Graph', 'Line Graph', 'Pie Chart'];

function Graph() {

    const [selected, setSelected] = useState(options[0]);
    const [yAxis, setYAxis] = useState('Enter Y Axis');
    const [barObject, setBarObject] = useState([{
        id: 0,
        label: 'first label',
        amount: 0
    }]);
    const [chartData, setChartData] = useState({});

    const changeSize = (change) =>{
        setBarObject([... barObject, {
            id: barObject.length + 1,
            label: 'new label',
            amount: 0
        }]);
    }

    const updateFieldChange = index => e =>{
        console.log('index: ' + index);
        console.log('property name: '+ e.target.name);
        if(e.target.name === 'label'){
            let newArr = [...barObject];
            newArr[index].label = e.target.value; 
            setBarObject(newArr)
        }
        if(e.target.name === 'amount'){
            let newArr = [...barObject];
            newArr[index].amount = e.target.value; 
            setBarObject(newArr)
        }
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        //create xAxisArray
        let xAxisArray = [];
        for(let i = 0; i < barObject.length; i++){
            xAxisArray.push(barObject[i].label)
        }
        //createbarArray
        let barValuesArray=[];
        for(let i = 0; i < barObject.length; i++){
            barValuesArray.push(barObject[i].amount)
        }

        console.log(xAxisArray);
        console.log(barValuesArray);
        console.log(newData);

        let newData = {
            labels: xAxisArray,
            datasets:[
              {
                label:  'y-axis variable',
                data:  barValuesArray
              }
            ]
        }
        setChartData(newData);

    }

    function BarGraph() {
        return (
        <div>
            <form>
                {barObject.map( (data, index) => {
                    return (
                        <div key={data.id}>
                        <Input type='text' name='label' value={data.label} onChange={updateFieldChange(index)}/>
                        <Input type='text' name='amount' value={data.amount} onChange={updateFieldChange(index)}/>
                        </div>
                    );
                })}
            </form>
            <FormBtn onClick={() => changeSize('add')}>Add Data Field</FormBtn>
            {/* <FormBtn onClick={() => changeSize('remove')}>Remove Data Field</FormBtn> */}
            <FormBtn onClick={(event) => handleFormSubmit(event)}>Graph</FormBtn>
            <BarChart chartData={chartData} />
        </div>
        )
    }

    function LineGraph() {
        return <h1>Line Graph</h1>
    }

    function PieChart() {
        return <h1>Pie Chart</h1>
    }

    function renderPage() {
        if(selected === 'Bar Graph'){
            return <BarGraph />;            
        }
        if(selected === 'Line Graph'){
            return <LineGraph />
        }
        if(selected === 'Pie Chart'){
            return <PieChart />
        }else{
            return <h1>Please Select A Graph</h1>
        }

    }

  return (
    <div>
      <Dropdown 
        title={selected}
        items={options}
        onSelectedChange={setSelected} 
      />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Graph;