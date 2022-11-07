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

    console.log(alcohol)
    console.log(malicAcid)
    console.log(hue)
    console.log(colorIntensity)

    const fetchData = async () => {
        await fetch('Wine-data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }

    fetchData()


    data.map((product: Product) => {
        // console.log(product)
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



    const option2 = {
        title: {
            text: 'Scatter Diagram'
        },
        tooltip: {},
        legend: {
            data: ['sales volume']
        },
        xAxis: {
            data: colorIntensity
        },
        yAxis: {},
        series: [{
            name: 'Malic Acid',
            type: 'scatter',
            data: hue
        }]
    };

    console.log(option)
    return (
        <div>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />;

            <ReactECharts
                option={option2}
                style={{ height: 400 }}
                opts={{ renderer: 'svg' }}
            />;
        </div>
    );
};

export default Chart;