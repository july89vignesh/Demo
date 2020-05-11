import React, { Component } from 'react';
 
class Area extends Component {
  render() {
    return (
      <div>
        Area of rectangle:
        <button onClick={() => this.props.update('Area')}>
          Click
        </button>
      </div>
    );
  }
}
 
export default Area;