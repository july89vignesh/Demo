import React, { Component } from 'react';
 
class Peremeter extends Component {
  render() {
    return (
      <div>
        Peremeter of rectangle:
        <button onClick={() => this.props.update('Parameter')}>
          Click
        </button>
      </div>
    );
  }
}
 
export default Peremeter