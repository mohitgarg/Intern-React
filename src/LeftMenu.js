import React from 'react'
import Line from './LineChart'
import data from './data.json'
import Bar from './BarChart'
import Image from './Thumbnails'

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'yellow',
  width: '150',
  marginTop: '100'
  // justifyContent: 'center',
  // alignItems: 'center',
  // margin: 'auto'
}
class Menu extends React.Component {
  constructor () {
    super()
    this.isGraph = this.isGraph.bind(this)
  }

  isGraph () {
    console.log(this._button)
  }
  render () {
    return (
      <div>
        <div>
          <div>
            <button
              ref={button => {
                this._button = button
              }}
              onClick={this.isGraph}
            >
              Generate Line Graph
            </button>
          </div>
          <div><button>Generate Bar Graph</button></div>
        </div>
        <Image />
        <Line />
        <Bar />
      </div>
    )
  }
}

export default Menu
