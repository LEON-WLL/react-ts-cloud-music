import React from 'react';

import './App.css';

interface IProps {
  framework: string;
}

interface IState {
  framework: string;
}

class App extends React.Component<IProps, IState> {

  state = {
    framework: this.props.framework
  };

  clickButton = (): void => {
    this.setState({
      framework: '999999'
    });
  }

  render(): JSX.Element {

    return <div onClick={(): void => { this.clickButton(); }}>{this.state.framework}</div>;
  }
}

export default App;
