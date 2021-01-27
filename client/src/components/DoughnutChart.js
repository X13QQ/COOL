import React from 'react'
import { Doughnut, Pie, Radar } from 'react-chartjs-2'

const DoughnutChart = (props) => {
  // console.log(props)
  const sort = props.sort
  const titleText =
    sort === 'brand'
      ? '售出數量(品牌)'
      : sort === 'size'
      ? '售出數量(尺寸)'
      : ''

  const hotData = props.hotData
  // console.log(hotData.map((v, i) => v.brand))
  const count = hotData.length

  const labels =
    sort === 'brand'
      ? hotData.map((v, i) => v.brand)
      : sort === 'size'
      ? hotData.map((v, i) => v.size)
      : []
  // console.log('labels' + labels)
  const amountAll = hotData.length > 0 ? hotData.map((v) => v.amount) : ''

  const data = {
    labels: labels,
    datasets: [
      {
        data: amountAll,
        backgroundColor: countColor(count),
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: titleText,
    },
    legend: {
      position: 'left',
    },
  }

  return (
    <div className="col-6">
      <Pie data={data} options={options}></Pie>
    </div>
  )
}

function randomColor(a) {
  var r = Math.round(Math.random() * (255 - 0) + 0)
  var g = Math.round(Math.random() * (255 - 0) + 0)
  var b = Math.round(Math.random() * (255 - 0) + 0)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function countColor(count) {
  let arr = []
  for (let i = 0; i < count; i++) {
    arr.push(randomColor(0.8))
  }
  return arr
}

export default DoughnutChart
