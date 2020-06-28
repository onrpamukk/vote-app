import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './app/store/store'
import {
  newvote as NewVote,
  votes as Votes
} from './app/pages/MainLayout/Home'
import { Growl } from 'primereact/growl';
import { setGrowlRef } from './app/services/toaster-message.service'


const pages: RouteProps[] = [
  {
    path: '/',
    component: Votes,
    exact: true
  },
  {
    path: '/new-vote',
    component: NewVote,
    exact: true
  }
]

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Growl ref={(_growlRef) => setGrowlRef(_growlRef)} />
        <Router>
          <Switch>
            {
              pages.map((page, i) => (
                <Route
                  key={i}
                  exact={page.exact}
                  path={page.path}
                  component={page.component}
                />
              ))
            }
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
