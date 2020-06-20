import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/ExitToApp';
import RegisterIcon from '@material-ui/icons/ExitToApp';
import NavigationDrawer from '../shared/NavigationDrawer';
import { createGenerateClassName } from '@material-ui/core';

const styles = (theme) => ({
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400,
    },
    noDecoration: {
        textDecoration: 'none !important',
    },
});

function NavBar(props) {
    const { classes, handleMobileDrawerOpen, handleMobileDrawerClose, mobileDrawerOpen, selectedTab } = props;
    const menuItems = [
        {
            link: '/',
            name: 'Home',
            icon: <HomeIcon className="text-white" />,
        },
        {
            link: '/login',
            name: 'Login',
            icon: <LoginIcon className="text-white" />,
        },
        {
            link: '/register',
            name: 'Register',
            icon: <RegisterIcon className="text-white" />,
        },
    ];
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div>
                        <Typography variant="h4" className={classes.brandText} display="inline" color="primary">
                            Gantt
                        </Typography>
                        <Typography variant="h4" className={classes.brandText} display="inline" color="secondary">
                            let
                        </Typography>
                    </div>
                    <div>
                        <Hidden mdUp>
                            <IconButton
                                className={classes.menuButton}
                                onClick={handleMobileDrawerOpen}
                                aria-label="Open Navigation"
                            >
                                <MenuIcon color="primary" />
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            {menuItems.map((element) => {
                                return (
                                    <Link
                                        key={element.name}
                                        to={element.link}
                                        className={classes.noDecoration}
                                        onClick={handleMobileDrawerClose}
                                    >
                                        <Button
                                            color="secondary"
                                            size="large"
                                            classes={{ text: classes.menuButtonText }}
                                        >
                                            {element.name}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <NavigationDrawer
                menuItems={menuItems}
                anchor="right"
                open={mobileDrawerOpen}
                selectedItem={selectedTab}
                onClose={handleMobileDrawerClose}
            />
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleMobileDrawerOpen: PropTypes.func,
    handleMobileDrawerClose: PropTypes.func,
    mobileDrawerOpen: PropTypes.bool,
    selectedTab: PropTypes.string,
    selectTab: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
