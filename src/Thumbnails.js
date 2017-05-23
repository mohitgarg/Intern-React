import React from 'react'

class Image extends React.Component {
  constructor () {
    super()
    this.showImage = this.showImage.bind(this)
  }
  showImage (src) {
    console.log(this._div)
  }
  render () {
    return (
      <div id='main'>
        <div id='big-image'>
          <img
            src='http://lorempixel.com/400/200/sports/1/'
            alt='Current Display'
            ref={el => {
              this._input = el
            }}
          />
        </div>
        <div className='small-images'>
          <img
            src='http://lorempixel.com/100/50/sports/1/'
            alt='Player'
            onClick={this.showImage('http://lorempixel.com/100/50/sports/1/')}
          />
          <img
            src='http://lorempixel.com/100/50/fashion/1/'
            alt='Cloths'
            onClick={this.showImage('http://lorempixel.com/100/50/fashion/1/')}
          />
          <img
            src='http://lorempixel.com/100/50/city/1/'
            alt='Temple'
            onClick={this.showImage('http://lorempixel.com/100/50/city/1/')}
          />
        </div>
      </div>
    )
  }
}

export default Image
