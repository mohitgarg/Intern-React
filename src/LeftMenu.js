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
    this.state = {
      boolDisplayLine: true,
      boolDisplayBar: false
    }
  }

  render () {
    return (
      <div>
        <div>
          <div>
            <button
              onClick={() => {
                this.setState({
                  boolDisplayLine: true,
                  boolDisplayBar: false
                })
              }}
            >
              Generate Line Graph
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({
                  boolDisplayLine: false,
                  boolDisplayBar: true
                })
              }}
            >
              Generate Bar Graph
            </button>
          </div>
        </div>
        <Image />
        {this.state.boolDisplayLine ? <Line /> : <Bar />}
      </div>
    )
  }
}

export default Menu
