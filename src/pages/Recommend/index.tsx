import React from 'react';
import { observer } from 'mobx-react';
import { RouteConfig } from 'react-router-config';

import Slider, { bannerType } from '../../components/Slider/index';
import store from './index.store';
import './index.less';

interface RecommendProps extends RouteConfig {
  // bannerList: bannerType[];
}

interface IState {}

@observer
class Recommend extends React.Component<RecommendProps, IState> {


  getData = (): bannerType[] => {

    return [1, 2, 3, 4].map((item): bannerType => {
      return {
        imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        url: item + ''
      };
    });
  }

  render(): JSX.Element {

    return (
      <div>
        <Slider bannerList={this.getData() } />
      </div>
    );

  }
}

export default Recommend;

