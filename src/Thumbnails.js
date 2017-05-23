import React from 'react'

class Image extends React.Component {
  constructor () {
    super()
    this.state = {
      image: 'http://lorempixel.com/400/200/sports/1/'
    }
    this.showImage = this.showImage.bind(this)
  }
  showImage (src) {
    this.setState({ image: src })
  }
  render () {
    return (
      <div id='main' style={{ marginBottom: '50' }}>
        <div id='big-image'>
          <img
            src={this.state.image}
            alt='Current Display'
            className='img - thumbnail'
          />
        </div>
        <div className='small-images' style={{ display: 'flex' }}>
          <img
            className='img - thumbnail'
            src='http://lorempixel.com/100/50/sports/1/'
            alt='Player'
            onClick={() =>
              this.showImage('http://lorempixel.com/400/200/sports/1/')}
          />
          <img
            className='img - thumbnail'
            src='http://lorempixel.com/100/50/fashion/1/'
            alt='Cloths'
            onClick={() =>
              this.showImage('http://lorempixel.com/400/200/fashion/1/')}
          />
          <img
            className='img - thumbnail'
            src='http://lorempixel.com/100/50/city/1/'
            alt='Temple'
            onClick={() =>
              this.showImage('http://lorempixel.com/400/200/city/1/')}
          />
        </div>
      </div>
    )
  }
}

export default Image
