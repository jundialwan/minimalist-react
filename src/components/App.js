/**
 * Import React is a must in every React component file
 */
import React from 'react'

class App extends React.Component {
  render() {

    /**
     * return JSX that wil be rendered
     * it must be a single wrapped component
     */    
    return (
      <div>
        <h5>Minimalist React Environment</h5>
        <span>Hello world!</span>
      </div>
    )
  }
}

/**
 * Exporting your component so another file can use this component
 */
export default App