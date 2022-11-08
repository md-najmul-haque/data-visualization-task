import { useState } from 'react';
import ReactECharts from 'echarts-for-react';

type Product = {
    Alcohol: number,
    'Malic Acid': number,
    Ash: number,
    Alcalinity0fAsh: number,
    'Color intensity': number,
    Hue: number,
}


const Chart = () => {

    const [data, setData] = useState([])

    let colorIntensity: any = [];
    let hue: any = [];
    let alcohol: any = [];
    let malicAcid: any = []


    const fetchData = async () => {
        await fetch('Wine-data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }

    fetchData()


    data.map((product: Product) => {
        colorIntensity.push(product['Color intensity'])
        hue.push(product.Hue)
        alcohol.push(product.Alcohol)
        malicAcid.push(product['Malic Acid'])
    })

    const option = {
        title: {
            text: 'Bar Diagram'
        },
        tooltip: {},
        legend: {
            data: ['sales volume']
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



    const scatter = {
        title: {
            text: 'Scatter Diagram'
        },
        tooltip: {},
        legend: {
            data: ['Color Intensity']
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
                option={option}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />;

            <ReactECharts
                option={scatter}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />;
        </div>
    );
};

export default Chart;