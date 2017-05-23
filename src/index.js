import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import Menu from './LeftMenu'

ReactDOM.render(<Menu />, document.getElementById('root'))
registerServiceWorker()
