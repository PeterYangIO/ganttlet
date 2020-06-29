import React, { Fragment, Suspense, memo, useState, useCallback } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './assets/style/theme';
import GlobalStyles from './assets/style/GlobalStyles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import PropsRoute from './utils/components/PropsRoute';
import smoothScrollTop from './utils/functions/smoothScrollTop';
import Profile from './components/profile/Profile';
const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        wrapper: {
            backgroundColor: theme.palette.common.white,
            overflowX: 'hidden',
            overflowY: 'hidden',
        },
    });

type Props = WithStyles<typeof styles>;

function App(props: Props): JSX.Element {

    const { classes } = props;
    const [selectedTab, setSelectedTab] = useState('');
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

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

    const selectProfile = useCallback(() => {
        smoothScrollTop();
        document.title = 'Profile | Ganttlett';
        setSelectedTab('Profile');
    }, [setSelectedTab]);

    const selectDashBoard = useCallback(() => {
        smoothScrollTop();
        document.title = 'Dashboard | Ganttlet';
        setSelectedTab('Dashboard');
    }, [setSelectedTab]);

    const handleMobileDrawerOpen = useCallback(() => {
        setIsMobileDrawerOpen(true);
    }, [setIsMobileDrawerOpen]);

    const handleMobileDrawerClose = useCallback(() => {
        setIsMobileDrawerOpen(false);
    }, [setIsMobileDrawerOpen]);

    const handleSideDrawerOpen = useCallback(() => {
        setIsSideDrawerOpen(true);
    }, [setIsSideDrawerOpen]);

    const handleSideDrawerClose = useCallback(() => {
        setIsSideDrawerOpen(false);
    }, [setIsSideDrawerOpen]);

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <Suspense fallback={<Fragment />}>
                    <div className={classes.wrapper}>
                        <div className={classes.root}>
                            <NavBar
                                selectedTab={selectedTab}
                                selectTab={setSelectedTab}
                                mobileDrawerOpen={isMobileDrawerOpen}
                                handleMobileDrawerOpen={handleMobileDrawerOpen}
                                handleMobileDrawerClose={handleMobileDrawerClose}
                                handleSideDrawerOpen={handleSideDrawerOpen}
                                handleSideDrawerClose={handleSideDrawerClose}
                                sideDrawerOpen={isSideDrawerOpen}
                                loggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                            <Switch>
                                <PropsRoute path="/login" component={Login} selectLogin={selectLogin} />
                                <PropsRoute path="/register" component={Register} selectRegister={selectRegister} />
                                <PropsRoute path="/profile" component={Profile} selectProfile={selectProfile} />
                                {isLoggedIn ? (
                                    <PropsRoute path="/" component={Dashboard} selectDashboard={selectDashBoard} />
                                ) : (
                                    <PropsRoute path="/" component={Home} selectHome={selectHome} />
                                )}
                            </Switch>
                        </div>
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
