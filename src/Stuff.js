import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>React 18</h2>
        <p>React 18 is a widely used JavaScript library used for building user interfaces. Developed and maintained byFacebook, React 18 simplifies the process
          of creating interactive and dynamic web applications. By utilizing new methods imported from `react-dom/client` such as `createRoot` to enable concurrent mode keeping
          the UI more responsive and updates faster. Build independant, isolated and reusable user interfaces and piece them together with React 18 tooling.    
        </p>
        
        <h2>React Router v6</h2>
        <p>React Router v6 is a powerful routing library designed specifically for React applications. Routing is crucial for single-page applications (SPAs) to navigate
          between different views while maintaining a seamless user experience. Version 6 brings significant improvements and simplifications to the routing process. It introduces
          a more component-focused approach to defining routes making it easier to implement routing into your application. Additionally it offers features such as 
          nested routes, client side routing and relative links just to name a few. All these features combined provide a robust and 
          flexible solution for handling routing in modern React applications.</p>
      </div>
    );
  }
}
 
export default Stuff;