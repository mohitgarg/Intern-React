import React from 'react'
import Line from './LineChart'
import data from './data.json'
import Bar from './BarChart'
import Image from './Thumbnails'

const style = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  // backgroundColor: 'yellow',
  // marginTop: '100'
  justifyContent: 'center',
  // alignItems: 'center',
  // margin: 'auto'
  height: '700'
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
      <div id='main' style={{ display: 'flex' }}>
        <ul style={style}>
          <li style={{ marginBottom: '10' }}>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => {
                this.setState({
                  boolDisplayLine: true,
                  boolDisplayBar: false
                })
              }}
            >
              Generate Line Graph
            </button>
          </li>
          <li>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => {
                this.setState({
                  boolDisplayLine: false,
                  boolDisplayBar: true
                })
              }}
            >
              Generate Bar Graph
            </button>
          </li>
        </ul>
        <div
          style={{
            justifyContent: 'space-between',
            marginTop: '100',
            marginLeft: '300'
          }}
        >
          <Image />
          {this.state.boolDisplayLine ? <Line /> : <Bar />}
        </div>
      </div>
    )
  }
}

export default Menu
