import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
