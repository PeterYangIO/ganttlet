import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import PropsRoute from './utils/components/PropsRoute';

function Routing(props) {
    const { selectHome, selectLogin, selectRegister } = props;
    return (
        <Switch>
            <PropsRoute path="/dashboard" component={Dashboard} />
            <PropsRoute path="/login" component={Login} selectLogin={selectLogin} />
            <PropsRoute path="/register" component={Register} selectRegister={selectRegister} />
            <PropsRoute path="/" component={Home} selectHome={selectHome} />
        </Switch>
    );
}

Routing.propTypes = {
    selectHome: PropTypes.func.isRequired,
    selectLogin: PropTypes.func.isRequired,
    selectRegister: PropTypes.func.isRequired,
};

export default memo(Routing);
