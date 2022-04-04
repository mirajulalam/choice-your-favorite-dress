import React from 'react';
import './MyLineChart.css';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='Line-chart'>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
            <BarChart width={400} height={400} data={data}>
                <Bar dataKey={'investment'}></Bar>
                <Bar dataKey={'sell'}></Bar>
                <Bar dataKey={'revenue'}></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </BarChart>

            <AreaChart width={400} height={400} data={data}>
                <Area dataKey={'investment'} stroke="#8884d8" fill="#8884d8"></Area>
                <Area dataKey={'sell'} stroke="#8884d8" fill="#8884d8"></Area>
                <Area dataKey={'revenue'} stroke="#8884d8" fill="#8884d8"></Area>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </AreaChart>
        </div>
    );
};

export default MyLineChart;