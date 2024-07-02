// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
)
