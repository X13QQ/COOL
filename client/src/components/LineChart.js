import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  datasets: [
    {
      label: '銷售金額',
      data: [
        80000,
        9000,
        25000,
        15800,
        14200,
        60000,
        18000,
        29000,
        78000,
        10000,
        90000,
        6000,
      ],
      borderColor: ['rgba(255,206,86,0.2)'],
      backgroundColor: ['rgba(255,206,86,0.2)'],
      pointBackgroundColor: ['rgba(255,206,86,0.2)'],
      pointBorderColor: ['rgba(255,206,86,0.2)'],
    },
  ],
}

const options = {
  title: {
    display: true,
    text: '每月營業額',
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 100000,
          // stepSize: 1,
        },
      },
    ],
  },
}

const LineChart = () => {
  return (
    <div className="col-6">
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default LineChart
