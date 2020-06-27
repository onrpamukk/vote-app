import React from 'react';
import { HomePage } from './app/pages/MainLayout/Home/HomePage';
import { initAxios } from './app/api-services/base.api.service';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStoreInstanceFNC } from './app/store/store';
import { NewVote } from './app/pages/MainLayout/Home/Votes/NewVote';

export default class App extends React.Component<any, any>{
  constructor(props) {
    super(props);
    try {
      initAxios();
      createStoreInstanceFNC();
    } catch (error) {
      console.log('GLOBAL-ERROR-HANDLING');
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/new-vote" component={NewVote} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

