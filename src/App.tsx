import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from './routes/index';
import { GlobalStyle } from './App.style';

const App: React.FC = () => {
  return (
      <HashRouter>
        <GlobalStyle />
        {renderRoutes(routes)}
      </HashRouter>
  );
};

export default App;
