import { connect }                       from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore }          from 'react-router-redux';

import { AccountComponent }  from './account';
import { HomeComponent }     from './home';
import { LoginComponent }    from './login';
import { NotFoundComponent } from './not-found';
import { ProfileComponent }  from './profile';
import { RegisterComponent } from './register';
import { Store }             from '../stores';
import { TrackerComponent }  from './tracker';
import { logPageView }       from '../utils/analytics';

const history = syncHistoryWithStore(browserHistory, Store);

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/account', component: AccountComponent },
  { path: '/u/:username', component: ProfileComponent },
  { path: '/u/:username/:slug', component: TrackerComponent },
  { path: '*', component: NotFoundComponent },
];

export function App ({ nightMode }) {
  return (
    <div className={`root ${nightMode ? 'night-mode' : ''}`}>
      <Router history={history} onUpdate={logPageView} routes={routes} />
    </div>
  );
}

function mapStateToProps ({ nightMode }) {
  return { nightMode };
}

export const AppComponent = connect(mapStateToProps)(App);
