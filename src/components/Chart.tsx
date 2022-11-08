import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Product } from '../types/Chart.type';


const Chart = () => {

    const [data, setData] = useState([])

    // declare variable to store data from json file
    let colorIntensity: number[] = [];
    let hue: number[] = [];
    let alcohol: number[] = [];
    let malicAcid: number[] = []

    // create async function to fetch data as a synchronous way 
    const fetchData = async () => {
        await fetch('Wine-data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }

    fetchData()

    // map data to store our required data in array
    data.map((product: Product) => {
        colorIntensity.push(product['Color intensity'])
        hue.push(product.Hue)
        alcohol.push(product.Alcohol)
        malicAcid.push(product['Malic Acid'])
    })

    // option for bar diagram
    const bar = {
        title: {
            text: 'Bar Diagram'
        },
        tooltip: {},
        legend: {
            data: []
        },
        xAxis: {
            data: alcohol
        },
        yAxis: {},
        series: [{
            name: 'Malic Acid',
            type: 'bar',
            data: malicAcid
        }]
    };


    // option for scatter diagram
    const scatter = {
        title: {
            text: 'Scatter Diagram'
        },
        tooltip: {},
        legend: {
            data: ['']
        },
        xAxis: {
            data: colorIntensity
        },
        yAxis: {},
        series: [{
            name: 'Hue',
            type: 'scatter',
            data: hue
        }]
    };

    return (
        <div>
            <ReactECharts
                option={bar}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />;

            <h4>Bar Diagram Alcohol vs Malic Acid</h4>
            <br />

            <ReactECharts
                option={scatter}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />
            <h4>Scatter Diagram Color Intensity vs Hue</h4>

        </div>
    );
};

export default Chart;