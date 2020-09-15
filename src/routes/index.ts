import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

import Home from '../pages/Home/index';
import Recommend from '../pages/Recommend/index';
import Rank from '../pages/Rank/index';
import Singers from '../pages/Singers/index';


const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/recommend',
        key: 'recommend',
        component: Recommend
      },
      {
        path: '/rank',
        key: 'rank',
        component: Rank
      },
      {
        path: '/singers',
        key: 'singers',
        component: Singers
      }
    ]
  }
];

export default routes;
