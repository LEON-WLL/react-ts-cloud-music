import React from 'react';
import { observer } from 'mobx-react';
import store from './HomeStore';
import './Home.less';

interface IProps {}

interface IState {}

@observer
class Home extends React.Component<IProps, IState> {

  render(): JSX.Element {

    return <div className="test" onClick={(): void => { store.clickButton(); }}>{store.testStr}</div>;

    // return <div onClick={(): void => { }}>LeonLeon</div>;
  }
}

export default Home;





// import React from 'react';
// import './Home.css';

// interface IProps {
//   framework: string;
// }

// interface IState {
//   framework: string;
// }


// class Home extends React.Component<IProps, IState> {

//     state = {
//         framework: '333'
//     };

//   clickButton = (): void => {
//     this.setState({
//       framework: '999999'
//     });
//   }

//   render(): JSX.Element {

//     return <div onClick={(): void => { this.clickButton(); }}>{this.state.framework}</div>;
//   }
// }

// export default Home;
