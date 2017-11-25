/**
 * Import React is a must in every React component file
 */
import React from 'react'
import Route from '../Router' // import our Route file

class App extends React.Component {

  /**
   * Render you component with render method 
   */
  render() {

    /**
     * return JSX that wil be rendered
     * it must be a single wrapped component
     */    
    return (
      <div>
        <h5>Minimalist React Environment</h5>
        <div>Hello World!</div>

        {/* Render our route component */}
        <Router />
      </div>
    )
  }
}

/**
 * Exporting your component so another file can use this component
 */
export default App