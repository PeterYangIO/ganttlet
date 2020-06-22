import React, { Fragment, Suspense, memo, useState, useEffect, useCallback } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './assets/style/theme';
import GlobalStyles from './assets/style/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, WithStyles, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import PropsRoute from './utils/components/PropsRoute';
import smoothScrollTop from './utils/functions/smoothScrollTop';

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            backgroundColor: theme.palette.common.white,
            overflowX: 'hidden',
            overflowY: 'hidden',
        },
    });

interface Props extends WithStyles<typeof styles> {
    // non style props
    // injected style props
}

function App(props: Props): JSX.Element {
    const { classes } = props;
    const [selectedTab, setSelectedTab] = useState('');
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const selectHome = useCallback(() => {
        smoothScrollTop();
        document.title = 'Ganttlet';
        setSelectedTab('Home');
    }, [setSelectedTab]);

    const selectLogin = useCallback(() => {
        smoothScrollTop();
        document.title = 'Login | Ganttlet';
        setSelectedTab('Login');
    }, [setSelectedTab]);

    const selectRegister = useCallback(() => {
        smoothScrollTop();
        document.title = 'Register | Ganttlet';
        setSelectedTab('Register');
    }, [setSelectedTab]);

    const handleMobileDrawerOpen = useCallback(() => {
        setIsMobileDrawerOpen(true);
    }, [setIsMobileDrawerOpen]);

    const handleMobileDrawerClose = useCallback(() => {
        setIsMobileDrawerOpen(false);
    }, [setIsMobileDrawerOpen]);
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <Suspense fallback={<Fragment />}>
                    <div className={classes.wrapper}>
                        <NavBar
                            selectedTab={selectedTab}
                            selectTab={setSelectedTab}
                            mobileDrawerOpen={isMobileDrawerOpen}
                            handleMobileDrawerOpen={handleMobileDrawerOpen}
                            handleMobileDrawerClose={handleMobileDrawerClose}
                        />
                        <Switch>
                            <PropsRoute path="/dashboard" component={Dashboard} />
                            <PropsRoute path="/login" component={Login} selectLogin={selectLogin} />
                            <PropsRoute path="/register" component={Register} selectRegister={selectRegister} />
                            <PropsRoute path="/" component={Home} selectHome={selectHome} />
                        </Switch>
                    </div>
                </Suspense>
            </MuiThemeProvider>
        </Router>
    );
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(App));
