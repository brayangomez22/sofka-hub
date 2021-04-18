import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Social from '../pages/Social'
import Error404 from '../pages/Error404'

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/social" component={Social} />
				<Route component={Error404}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Router
