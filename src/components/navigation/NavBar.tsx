import React, { memo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from '@material-ui/core';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/ExitToApp';
import RegisterIcon from '@material-ui/icons/ExitToApp';
import NavigationDrawer from '../shared/NavigationDrawer';
import SideDrawer from '../navigation/SideDrawer';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { mainListItems, secondaryListItems } from './listItems';
const drawerWidth = 240; // if change this value, change in SideDrawer.tsx too

const styles = (theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
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
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
    });

interface Props extends WithStyles<typeof styles> {
    // non style props
    handleMobileDrawerOpen: { (): void };
    handleMobileDrawerClose: { (): void };
    mobileDrawerOpen: boolean;
    handleSideDrawerOpen: { (): void };
    handleSideDrawerClose: { (): void };
    sideDrawerOpen: boolean;
    loggedIn: boolean;
    setIsLoggedIn: { (isLoggedIn: boolean): void };
    selectedTab: string;
    selectTab: { (selectedTab: string): void };
    // injected style props
}
function NavBar(props: Props): JSX.Element {
    const {
        classes,
        handleMobileDrawerOpen,
        handleMobileDrawerClose,
        mobileDrawerOpen,
        handleSideDrawerOpen,
        handleSideDrawerClose,
        sideDrawerOpen,
        loggedIn,
        setIsLoggedIn,
        selectedTab,
    } = props;
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
        <div>
            <AppBar position="absolute" className={clsx(classes.appBar, sideDrawerOpen && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    {loggedIn ? (
                        <div>
                            <IconButton
                                edge="start"
                                aria-label="open drawer"
                                onClick={handleSideDrawerOpen}
                                className={clsx(classes.menuButton, sideDrawerOpen && classes.menuButtonHidden)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div>
                        <Typography variant="h4" className={classes.brandText} display="inline" color="primary">
                            Gantt
                        </Typography>
                        <Typography variant="h4" className={classes.brandText} display="inline" color="secondary">
                            let
                        </Typography>
                    </div>
                    <div>
                        {loggedIn ? (
                            <div>lol user logged in</div>
                        ) : (
                            <div>
                                <Hidden mdUp>
                                    <IconButton onClick={handleMobileDrawerOpen} aria-label="Open Navigation">
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
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            {loggedIn ? (
                <SideDrawer handleSideDrawerClose={handleSideDrawerClose} sideDrawerOpen={sideDrawerOpen} />
            ) : (
                <div></div>
            )}
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
export default withStyles(styles, { withTheme: true })(memo(NavBar));
