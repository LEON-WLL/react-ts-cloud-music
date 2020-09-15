import React from 'react';
import { observer } from 'mobx-react';
import { RouteConfig } from "react-router-config";

import store from './index.store';
import './index.less';

interface IProps extends RouteConfig {}

interface IState {}

@observer
class Recommend extends React.Component<IProps, IState> {

  render(): JSX.Element {

    return (
      <div>
        <div>Recommend</div>
      </div>
    );

  }
}

export default Recommend;

