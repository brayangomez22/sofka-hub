import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/Router'
import AOS from 'aos/dist/aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

AOS.init();
ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById('root')
)
