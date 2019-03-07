import React from 'react';

class App extends React.Component {
  state = { reference: 'posts' }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ reference: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({ reference: 'todos'})}>Todos</button>
        </div>
        {this.state.reference}
      </div>
    )
  }
}

export default App;
