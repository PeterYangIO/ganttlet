import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from '@material-ui/core';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/ExitToApp';
import RegisterIcon from '@material-ui/icons/ExitToApp';
import NavigationDrawer from '../shared/NavigationDrawer';

const styles = (theme: Theme) =>
    createStyles({
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

interface Props extends WithStyles<typeof styles> {
    // non style props
    handleMobileDrawerOpen: { (): void };
    handleMobileDrawerClose: { (): void };
    mobileDrawerOpen: boolean;
    selectedTab: string;
    selectTab: { (selectedTab: string): void };
    // injected style props
}
function NavBar(props: Props): JSX.Element {
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
        <div>
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
export default withStyles(styles, { withTheme: true })(memo(NavBar));
