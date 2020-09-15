import React from 'react';
import { observer } from 'mobx-react';

import store from './index.store';
import './index.less';

interface IProps {}

interface IState {}

@observer
class Rank extends React.Component<IProps, IState> {

  render(): JSX.Element {

    return (
      <div>
        <div>Rank</div>
      </div>
    );

  }
}

export default Rank;

