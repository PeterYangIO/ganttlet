import React, { Fragment, Suspense, memo, useState, useEffect, useCallback } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './assets/style/theme';
import GlobalStyles from './assets/style/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core';
import NavBar from './components/navigation/NavBar';
import Routing from './Routing';
import smoothScrollTop from './utils/functions/smoothScrollTop';

const styles = (theme) =>
    createStyles({
        wrapper: {
            backgroundColor: theme.palette.common.white,
            overflowX: 'hidden',
            overflowY: 'hidden',
        },
    });

function App(props): JSX.Element {
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
                        <Routing selectHome={selectHome} selectLogin={selectLogin} selectRegister={selectRegister} />
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
