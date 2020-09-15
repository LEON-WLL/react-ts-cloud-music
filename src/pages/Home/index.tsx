import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from './index.store';
import './index.less';

interface IProps extends RouteConfig {

}

interface IState {}

@observer
class Home extends React.Component<IProps , IState> {

  render(): JSX.Element {

    return (
      <div className="home-page">
        <div className="header-wrapper">
          <span onClick={() => {}}>菜单</span>
          <span>云音悦</span>
          <span onClick={() => {}}>搜索</span>
        </div>

        <div className="content-tab-wrapper">
          <NavLink to="/recommend" activeClassName="selected">
            <div className="content-tab-item">
              <span>推荐</span>
            </div>
          </NavLink>

          <NavLink to="/singers" activeClassName="selected">
            <div className="content-tab-item">
              <span>歌手</span>
            </div>
          </NavLink>

          <NavLink to="/rank" activeClassName="selected">
            <div className="content-tab-item">
              <span>排行榜</span>
            </div>
          </NavLink>
        </div>

        {renderRoutes(this.props.route.routes)}
      </div>
    );

  }
}

export default Home;

