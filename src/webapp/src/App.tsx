import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RootLayout from './component/layout/index';
import LiveList from './component/live-list/index';
import LiveInfo from './component/live-info/index';

const App: React.FC = () => {
  return (
    <RootLayout>
      <Switch>
        <Route path="/liveInfo" component={LiveInfo}></Route>
        <Route path="/" component={LiveList}></Route>
      </Switch>
    </RootLayout>
  );
}

export default App;
