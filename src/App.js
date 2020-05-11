import React, { Component } from 'react';
import Area from './components/Area';
import Peremeter from './components/Peremeter';
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0,
      len: 40,
      bre: 50
    }
    this.updateState = this.updateState.bind(this);
  }
 
  updateState(calculation) {
    if(calculation === "Area")
    {
      this.setState({data: this.state.len * this.state.bre})
    }
    else
    {
      this.setState({data: 2 * (this.state.len + this.state.bre)})
    }
  }
 
  render() {
    return (
      <div>
        Calculation: {this.state.data}
        <Area update={this.updateState} />
        <Peremeter update={this.updateState} />
      </div>
    )
  }
}
 
export default App;