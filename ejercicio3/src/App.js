import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>El contador {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Agregar Contador
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Restar Contador
        </button>
      </div>
    );
  }
}
export default App;
