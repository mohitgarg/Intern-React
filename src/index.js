import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import Bar from './BarChart'
import Line from './LineChart'
import Menu from './LeftMenu'

ReactDOM.render(<Menu />, document.getElementById('root'))
registerServiceWorker()
