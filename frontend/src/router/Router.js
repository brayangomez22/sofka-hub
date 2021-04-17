import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Social from '../pages/Social'

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/social" component={Social} />
			</Switch>
		</BrowserRouter>
	)
}

export default Router
