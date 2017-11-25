/**
 * Import React and ReactDOM Dependency
 */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Import App component
 */
import App from './src/components/App'

/**
 * Render your root React component to DOM with id=app in index.html
 */
ReactDOM.render(
  <App />, 
  document.getElementById('app')
)