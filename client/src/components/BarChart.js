import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = (props) => {
  const year = props.year
  const lastyear = props.year - 1
  const time = props.time
  const type = props.type
  const typeName =
    props.type === 'REVENUE'
      ? '銷售金額'
      : props.type === 'ORDERCOUNT'
      ? '訂單數量'
      : ''
  console.log(year + '/' + lastyear)
  console.log(time + '/' + type)

  useEffect(() => {
    const getOrderData = () => {
      let url = new URL(
        'http://localhost:3001/dashboard/report/orderlist/chart'
      )
      let params = {
        year: year,
        lastyear: lastyear,
        time: time,
        type: type,
      }
      url.search = new URLSearchParams(params).toString()

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => console.log('錯誤:', err))
    }
    getOrderData()
  }, [year, lastyear, time, type])

  const sum = [
    1000,
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
  ]
  const lastsum = [
    10000,
    90400,
    2500,
    15800,
    42200,
    60000,
    80700,
    22000,
    48000,
    10000,
    20000,
    60000,
  ]
  const labels =
    time === 'MONTH'
      ? [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC',
        ]
      : time === 'QUARTER'
      ? ['Q1', 'Q2', 'Q3', 'Q4']
      : []
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${typeName} ${year}`,
        data: sum,
        borderColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1,
      },
      {
        label: `${typeName} ${lastyear}`,
        data: lastsum,
        borderColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
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
            //   beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div className="col-6">
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default BarChart
