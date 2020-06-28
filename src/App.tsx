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
import { HomePage } from './app/pages/MainLayout/Home/HomePage'
import {
  newvote as NewVote,
  votes as Votes
} from './app/pages/MainLayout/Home'

const pages: RouteProps[] = [
  {
    path: '/',
    component: Votes,
    exact: true
  },
  {
    path: '/new-vote',
    component: NewVote,
    exact:true
  }
]

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
