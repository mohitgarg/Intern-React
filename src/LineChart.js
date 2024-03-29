import React from 'react'
import RC2 from 'react-chartjs2'
import data from './data.json'

const arr = []
data.data.map(item => arr.push(item.value))

const chartData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
  datasets: [
    {
      label: 'Temperature in Delhi',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: arr,
      spanGaps: false
    }
  ]
}

const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}
const style = {
  width: '500px',
  height: '500px'
}

const Line = () => {
  return (
    <div style={style}>
      <RC2 data={chartData} options={chartOptions} type='line' />
    </div>
  )
}

export default Line
